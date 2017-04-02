/**
 * PaintCanvas.js
 */
import Button from './Button';
import ColorSelector from './ColorSelector';
import MouseHandler from './MouseHandler';

const METER_LIMIT = 50;  // canvas pen corners
const LINE_WIDTH = 2;  // canvas pen point width

const setup = () => {
  const elem = document.createElement('canvas');
  const pen = elem.getContext('2d');
  elem.className = 'PaintCanvas';
  return {elem, pen};
};

export default class PaintCanvas {

  constructor() {
    const {elem, pen} = setup();
    const {colorSelector, removeColorListener} = this.createColorSelector();
    const {clearButton, removeClearListener} = this.createClearButton();
    this.mouse = this.registerMouse();
    this.elem = elem;
    this.pen = pen;
    this.colorSelector = colorSelector;
    this.removeColorListener = removeColorListener;
    this.clearButton = clearButton;
    this.removeClearListener = removeClearListener;
    this.listeners = [];
    this.userButtons = [];
    this.state = {
      point: 0,
      color: '#000000',
      points: [],
      toUser: null,
    };
  }

  /**
   * Subscribe to line draws
   * @param {function} listener - draw listener
   * @returns {function} unsubscribe
   *
   * @usage
   * instance.subscribe((actionType, data) => {});
   */
  subscribe = listener => {
    this.listeners.push(listener);
    return () => (this.listeners = this.listeners.filter(l => l !== listener));
  }

  /**
   * Dispatch events to listeners
   * @param {string} actionType - type of action
   * @param {object} [data] - data to dispatch to listeners
   * @returns {void}
   *
   * @usage
   * instance.dispatch('ACTION_TYPE', {foo: 'bar'});
   */
  dispatch = (actionType, data = {}) => {
    this.listeners.forEach(listener => listener(actionType, data));
  }

  setState = nextState => {
    this.state = {
      ...this.state,
      ...nextState,
    };
  }

  sizeCanvas = ({height, width}) => {
    this.elem.setAttribute('height', height);
    this.elem.setAttribute('width', width);
    this.setState({
      height,
      width,
    });
  }

  configurePen = color => {
    this.pen.lineCap = 'butt';
    this.pen.lineJoin = 'round';
    this.pen.meterLimit = METER_LIMIT;
    this.pen.lineWidth = LINE_WIDTH;
    if (color) this.pen.strokeStyle = color;
  }

  clear = () => {
    this.pen.clearRect(0, 0, this.state.width, this.state.height);
  }

  colorChange = e => {
    this.setState({
      color: e.target.value,
    });
  }

  createColorSelector = () => {
    const colorSelector = new ColorSelector();
    const removeColorListener = colorSelector.addEventListener('change', this.colorChange);
    return {colorSelector, removeColorListener};
  }

  handleClearClick = () => {
    this.clear();
  }

  createClearButton = () => {
    const clearButton = new Button({text: 'clear'});
    const removeClearListener = clearButton.addEventListener('click', this.handleClearClick);
    return {clearButton, removeClearListener};
  }

  handleUserClick = e => {
    const toUser = e.target.dataset.user;
    this.userButtons.forEach(btn => btn.elem.classList.remove('active'));
    e.target.classList.add('active');
    this.setState({
      toUser,
    });
  }

  createUserButton = username => {
    const userButton = new Button({text: username, data: {user: username}});
    userButton.addEventListener('click', this.handleUserClick);
    this.userButtons.push(userButton);
    return userButton;
  }

  createAllButton = () => {
    const allButton = new Button({text: 'All'});
    allButton.addEventListener('click', this.handleUserClick);
    this.userButtons.push(allButton);
    return allButton;
  }

  drawLine = (points, color) => {
    Object.freeze(points);
    const mutablePoints = [...points];
    const start = mutablePoints.shift();
    this.configurePen(color);
    this.pen.beginPath();
    this.pen.moveTo(start.x, start.y);
    mutablePoints.forEach(p => (this.pen.lineTo(p.x, p.y)));
    this.pen.stroke();
  }

  mouseMove = e => {
    if (!this.mouse.down) return;
    const {point, color, toUser} = this.state;
    const nextPoint = {x: e.clientX, y: e.clientY};
    const points = [point, nextPoint];
    if (point) this.drawLine(points, color);
    this.setState({
      point: nextPoint,
      points,
    });

    this.dispatch('DRAW_POINTS', {points, color, toUser});
  }

  mouseUp = () => {
    this.setState({
      point: 0,
      points: [],
    });
  }

  mouseDown = e => {
    const point = {x: e.clientX, y: e.clientY};
    this.setState({
      point,
      points: [point],
    });
  }

  registerMouse = () => {
    const {mouseMove, mouseUp, mouseDown} = this;

    const mouseHandler = new MouseHandler({
      mouseMove,
      mouseUp,
      mouseDown,
    });

    return mouseHandler;
  }
}
