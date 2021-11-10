import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './FurnitureTable.scss';

export class FurnitureTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  render() {
    const { furnitureName, sub_category, categoryLink, isCategoryClick } =
      this.props;

    return (
      <div className="FurnitureTable">
        <li
          className="furnitureList"
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
            <span className="furnitureName">{furnitureName}</span>
          </Link>
          <div className="furnitureTable">
            <ul className="items">
              {this.state.showMenu &&
                sub_category.map(itemName => {
                  return (
                    <li
                      key={itemName.id}
                      className="item"
                      onClick={() => isCategoryClick(categoryLink)}
                    >
                      {itemName.name}
                      <Link to={`${categoryLink}`} className="categoryLink" />
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

export default withRouter(FurnitureTable);
