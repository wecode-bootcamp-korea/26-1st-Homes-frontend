import React, { Component } from 'react';
import './CheckBox.scss';

export class CheckBox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }

  isCheckedCheckbox = () => {
    this.setState(prev => ({ checked: !prev.checked }));
  };

  render() {
    const { isDeleteProductOne, id } = this.props;
    const { checked } = this.state;

    return (
      <div className="CartCheckBox">
        <div className="checkBoxWrap">
          <label
            onClick={this.isCheckedCheckbox}
            className={`checkBoxLabel ${
              !checked ? 'uncheckedLabel' : 'checkedLabel'
            }`}
          >
            {/* <input type="checkbox" className="checkBox" /> */}
            <img className="checkImg" src="./images/-.png" alt="check img" />
          </label>
          {/* <span className="checkAll">모두선택(2)</span> */}
        </div>
        <button
          className="cleanChooseThings"
          onClick={e => isDeleteProductOne(id)}
        >
          선택 삭제
        </button>
      </div>
    );
  }
}

export default CheckBox;
