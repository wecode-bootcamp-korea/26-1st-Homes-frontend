import React from 'react';
import './Signup.scss';

export class inputImages extends React.Component {
  render() {
    const { id, src, alt } = this.props;
    return (
      <div className="inputImages">
        <img id={id} src={src} alt={alt} />
      </div>
    );
  }
}
export default inputImages;
