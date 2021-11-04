import React, { Component } from 'react';
import FurnitureTable from '../FurnitureTable/FurnitureTable';
import './CategoryTable.scss';

export class CategoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  render() {
    return (
      <div className="CategoryTable">
        <ul
          className="categoryList"
          onMouseOver={() => {
            this.setState({ showMenu: true });
          }}
          onMouseLeave={() => {
            this.setState({ showMenu: false });
          }}
        >
          <li className="category">
            <img
              src="images/premium-icon-armchair-2355336.png"
              alt="furniture img"
              className="furnitureImg"
            />
            <span className="furniture">가구</span>
            <ul className="furnitureLists">
              {this.state.showMenu ? <FurnitureTable /> : null}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryTable;
