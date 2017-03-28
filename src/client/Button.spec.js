/**
 * Button.spec.js
 */
import Button from './Button';

const setup = propOverrides => {
  const minProps = {
    text: 'foo',
  };
  const props = {
    ...minProps,
    ...propOverrides,
  };
  const output = new Button(props);
  return {
    props,
    output,
  };
};

describe('<Button />', () => {
  it('can render', () => {
    const {output} = setup();
    expect(output.elem instanceof HTMLElement).toBeTruthy();
  });
  it('can displays text', () => {
    const {output} = setup();
    expect(output.elem.innerText).toBe('foo');
  });
});
