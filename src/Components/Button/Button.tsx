import { Component } from 'react';

import styled from '@emotion/styled';

import  ButtonProps  from './ButtonProps';


class Button extends Component<ButtonProps> {
  colors = {
    "primary":{
      "color":"#007bff",
      "hovered":"#0069d9"
    },
    "secondary":{
      "color":"#6c757d",
      "hovered":"#343a40"
    },
    "warning":{
      "color":"#ffc107",
      "hovered":"#ffb507"
    },
    "text":"#ffffff"
  }  
  render() {
    const {type,block} = this.props;
    const Button = styled.button`
        background-color:${this.colors[type].color};
        color:${this.colors.text};
        width:${block!==true?"fit-content":"100%"};
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        &:hover {
            background-color:${this.colors[type].hovered};
        }
    `;
    return (
      <Button className={this.props.className} onClick={this.props.onClick}>
         {this.props.children}
      </Button>
    );
  }
}

export default Button;
