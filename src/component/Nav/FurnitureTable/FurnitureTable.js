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
    const { key, furnitureName, sub_category, categoryLink, isCategoryClick } =
      this.props;

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
          onClick={() => isCategoryClick()}
        >
          <Link to={`${categoryLink}`} className="categoryLink">
            <span className="furnitureName">{furnitureName}</span>
          </Link>
          <div className="furnitureTable">
            <ul className="items">
              {this.state.showMenu &&
                sub_category.map(itemName => {
                  return (
                    <Link to={`${categoryLink}`} className="categoryLink">
                      <li
                        className="item"
                        key={itemName.id}
                        onClick={() => isCategoryClick()}
                      >
                        {itemName.name}
                      </li>
                    </Link>
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
