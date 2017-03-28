/**
 * MouseHandler.js
 */

export default class MouseHandler {

  constructor(handles = {}) {
    this.down = 0;
    this.handles = handles;
    this.registerListeners();
  }

  onMouseDown = e => {
    this.down = 1;
    const {mouseDown} = this.handles;
    if (mouseDown) mouseDown(e);
  }

  onMouseUp = e => {
    this.down = 0;
    const {mouseUp} = this.handles;
    if (mouseUp) mouseUp(e);
  }

  onMouseMove = e => {
    const {mouseMove} = this.handles;
    if (mouseMove) mouseMove(e);
  }

  registerListeners = () => {
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
  }
}
