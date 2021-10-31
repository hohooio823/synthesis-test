import { Component } from 'react';

import styled from '@emotion/styled';

import  InputProps  from './InputProps';


class Input extends Component<InputProps> {
  render() {
    const placeholder = this.props.placeholder;
    
    const Input = styled.input`
      width:50vw;
      font-size: 18px;
      padding: 10px;
      margin: 10px;
      border: 1px solid;
      border-radius: 3px;
      ::placeholder {
        color: light gray;}
    `
    return (
      <Input className={this.props.className} placeholder={placeholder} type="text" onChange={this.props.onChange} />
    );
  }
}

export default Input;
