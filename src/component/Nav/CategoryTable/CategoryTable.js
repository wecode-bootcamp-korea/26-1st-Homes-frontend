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
    const { categoryImg, categoryName, categoryLists } = this.props;

    return (
      <div className="CategoryTable">
        <li
          className="category"
          onMouseEnter={() => {
            this.setState({ showMenu: true });
          }}
          onMouseLeave={() => {
            this.setState({ showMenu: false });
          }}
        >
          <img src={categoryImg} alt="furniture img" className="furnitureImg" />
          <span className="furniture">{categoryName}</span>
          <ul className="furnitureLists">
            {this.state.showMenu
              ? categoryLists.map(item => (
                  <FurnitureTable
                    furnitureName={item.furnitureName}
                    sub_category={item.sub_category}
                  />
                ))
              : null}
          </ul>
        </li>
      </div>
    );
  }
}

export default CategoryTable;
