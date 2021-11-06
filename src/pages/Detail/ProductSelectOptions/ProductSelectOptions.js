import React, { Component } from 'react';

class ProductSelectOptions extends Component {
  render() {
    return (
      <div
        className={this.props.secondDropDown === true ? 'testMap2' : 'test123'}
        onClick={this.props.optionSelectButton}
      >
        <div>
          {this.props.id}.{this.props.productName}
        </div>
        <div>{this.props.productPrice}원~</div>
      </div>
    );
  }
}
export default ProductSelectOptions;
