import React from 'react';
import './index.scss';

/**
 * @description 공용 Input 컴포넌트
 * @param {string} name 이름
 * @param {string} inputType Input 속성 값
 * @param {string} placeholder placeholder
 * @param onChange 이벤트 핸들러 함수
 */
export default class Input extends React.Component {
  render() {
    const { name, inputType, placeholder, onChange } = this.props;
    return (
      <input
        className="input"
        id={name}
        name={name}
        type={inputType}
        // value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}
