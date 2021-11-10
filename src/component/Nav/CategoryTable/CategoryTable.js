import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    const { menuImg, menuName, menuLists, categoryLink, isCategoryClick } =
      this.props;

    const { showMenu } = this.state;

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
          <Link
            to={`${categoryLink}`}
            className="categoryLink"
            onClick={() => {
              isCategoryClick(categoryLink);
            }}
          >
            <img src={menuImg} alt="furniture img" className="furnitureImg" />
            <span className="furniture">{menuName}</span>
          </Link>
          <ul className="furnitureLists">
            {showMenu &&
              menuLists.map(item => (
                <FurnitureTable
                  key={item.id}
                  furnitureName={item.name}
                  sub_category={item.subcategories}
                  categoryLink={item.categoryLink}
                  isCategoryClick={isCategoryClick}
                />
              ))}
          </ul>
        </li>
      </div>
    );
  }
}

export default withRouter(CategoryTable);
