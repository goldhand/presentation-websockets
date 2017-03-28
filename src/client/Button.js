/**
 * Button.js
 */

const setup = text => {
  const elem = document.createElement('button');
  elem.innerText = text;
  elem.className = 'Button';
  return elem;
};

export default class Button {

  constructor({text}) {
    this.elem = setup(text);
  }

  addEventListener = (event, listener) => {
    this.elem.addEventListener(event, listener);
    return () => this.elem.removeEventListener(event, listener);
  }
}
