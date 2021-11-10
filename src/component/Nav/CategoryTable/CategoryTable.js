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
    const {
      categoryImg,
      categoryName,
      categoryLists,
      categoryLink,
      isCategoryClick,
    } = this.props;

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
            <img
              src={categoryImg}
              alt="furniture img"
              className="furnitureImg"
            />
            <span className="furniture">{categoryName}</span>
          </Link>
          <ul className="furnitureLists">
            {showMenu &&
              categoryLists.map(item => (
                <FurnitureTable
                  key={item.id}
                  furnitureName={item.furnitureName}
                  sub_category={item.sub_category}
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
