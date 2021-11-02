import React, { Component } from 'react';
import FurnitureLists from '../FurnitureLists/FurnitureLists';

export class Categories extends Component {
  render() {
    return (
      <div>
        <li className="category">
          <img
            src="images/premium-icon-armchair-2355336.png"
            alt="furnitureImg"
            className="furnitureImg"
          />
          <span className="furniture">가구</span>
          <ul className="livings">
            <FurnitureLists />
          </ul>
        </li>
      </div>
    );
  }
}

export default Categories;
