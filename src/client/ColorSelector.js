/**
 * ColorSelector.js
 */

const setup = () => {
  const elem = document.createElement('input');
  elem.setAttribute('type', 'color');
  elem.setAttribute('value', '#000000');
  elem.className = 'ColorSelector';
  return elem;
};

export default class ColorSelector {

  constructor() {
    this.elem = setup();
  }

  addEventListener = (event, listener) => {
    this.elem.addEventListener(event, listener);
    return () => this.elem.removeEventListener(event, listener);
  }
}
