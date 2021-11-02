import React, { Component } from 'react';
import BedLists from '../BedLists/BedLists';

export class FurnitureLists extends Component {
  render() {
    return (
      <div>
        <li className="living bedList">
          <span className="furnitureName">침실가구</span>
          <ul className="beds">
            <BedLists />
            <BedLists />
            <BedLists />
            <BedLists />
            <BedLists />
            <BedLists />
            <BedLists />
            <BedLists />
          </ul>
        </li>
      </div>
    );
  }
}

export default FurnitureLists;
