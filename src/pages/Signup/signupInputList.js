import React from 'react';
import inputList from '../data/inputList,json';
import './Signup.scss';

export class signupInputList extends React.Component {
  render() {
    const { className, content, type, placeholder, inputList } = this.props;
    return (
     {inputList.map((input,idx)=>(
       <Input
        key={idx}
        className={input.name}
        content={input.content}
        type={input.type}
        placeholder={input.placeholder}
      />
     ))}
  }
}
export default signupInputList;
