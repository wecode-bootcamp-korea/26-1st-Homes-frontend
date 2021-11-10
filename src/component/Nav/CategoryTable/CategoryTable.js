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
      key,
      categoryImg,
      categoryName,
      categoryLists,
      categoryLink,
      isCategoryClick,
    } = this.props;

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
          onClick={isCategoryClick}
        >
          <Link to={`${categoryLink}`} className="categoryLink">
            <img
              src={categoryImg}
              alt="furniture img"
              className="furnitureImg"
            />
            <span className="furniture">{categoryName}</span>
          </Link>
          <ul className="furnitureLists">
            {this.state.showMenu &&
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
