/**
 * components/Preview.js
 */
import React, {Component, PropTypes} from 'react';

const styles = {
  width: '100%',
  height: '400px',
};

export default class Preview extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
  }

  handleClick = e => {
    e.preventDefault();
    this.elem.webkitRequestFullScreen();
  }

  render() {
    const {
      src,
    } = this.props;

    return (
      <div>
        <iframe src={src} style={styles} ref={e => (this.elem = e)} />
        <button onClick={this.handleClick}>Full Screen</button>
      </div>
    );
  }
}
