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
    const { key, categoryImg, categoryName, categoryLists } = this.props;
    const { showMenu } = this.state;
    return (
      <div className="CategoryTable" key={key}>
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
            {showMenu &&
              categoryLists.map(item => (
                <FurnitureTable
                  key={item.id}
                  furnitureName={item.furnitureName}
                  sub_category={item.sub_category}
                />
              ))}
          </ul>
        </li>
      </div>
    );
  }
}

export default CategoryTable;
