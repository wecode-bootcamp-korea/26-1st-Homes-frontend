import React, { Component } from 'react';
import './FurnitureTable.scss';

export class FurnitureTable extends Component {
  render() {
    return (
      <div className="FurnitureTable">
        <li className="furnitureList">
          <span className="furnitureName">침실가구</span>
          <ul className="furnitures">
            <li className="furniture {furnitureName}">일반침대</li>
          </ul>
        </li>
      </div>
    );
  }
}

export default FurnitureTable;
