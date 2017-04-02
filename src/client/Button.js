/**
 * Button.js
 */

const setup = (text, data = {}) => {
  const elem = document.createElement('button');
  elem.innerText = text;
  elem.className = 'Button';
  for (const field in data) {
    elem.dataset[field] = data[field];
  }
  return elem;
};

export default class Button {

  constructor({text, data}) {
    this.elem = setup(text, data);
  }

  addEventListener = (event, listener) => {
    this.elem.addEventListener(event, listener);
    return () => this.elem.removeEventListener(event, listener);
  }

  destroy = () => this.parentElement.removeChild(this.elem);
}
