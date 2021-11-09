import React, { Component } from 'react';
import './CheckBox.scss';

export class CheckBox extends Component {
  render() {
    const { isDeleteProductOne } = this.props;

    return (
      <div className="CartCheckBox">
        <div className="checkBoxWrap">
          <label className="checkBoxLabel">
            <input type="checkBox" className="checkBox" />
          </label>
          <img className="checkImg" src="./images/-.png" alt="check img" />
          {/* <span className="checkAll">모두선택(2)</span> */}
        </div>
        <button
          className="cleanChooseThings"
          onClick={e => isDeleteProductOne(e, 1)}
        >
          선택 삭제
        </button>
      </div>
    );
  }
}

export default CheckBox;
