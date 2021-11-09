import React, { Component } from 'react';
import './CheckBox.scss';

export class CheckBox extends Component {
  render() {
    return (
      <div className="CartCheckBox">
        <div className="checkBoxWrap">
          <input type="checkBox" id="checkBox" />
          <label htmlFor="checkBox" className="checkBoxLabel">
            <img className="checkImg" src="./images/-.png" alt="check img" />
          </label>
          {/* <span className="checkAll">모두선택(2)</span> */}
        </div>
        <button className="cleanChooseThings">선택 삭제</button>
      </div>
    );
  }
}

export default CheckBox;
