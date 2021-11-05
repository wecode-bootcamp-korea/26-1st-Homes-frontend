import React, { Component } from 'react';
import './FurnitureTable.scss';

export class FurnitureTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  render() {
    const { key, furnitureName, sub_category } = this.props;

    return (
      <div className="FurnitureTable" key={key}>
        <li
          className="furnitureList"
          onMouseEnter={() => {
            this.setState({ showMenu: true });
          }}
          onMouseLeave={() => {
            this.setState({ showMenu: false });
          }}
        >
          <span className="furnitureName">{furnitureName}</span>
          <div className="furnitureTable">
            <ul className="items">
              {this.state.showMenu &&
                sub_category.map(itemName => {
                  return (
                    <li className="item" key={itemName.id}>
                      {itemName.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </li>
      </div>
    );
  }
}

export default FurnitureTable;
