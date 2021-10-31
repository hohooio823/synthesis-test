import { Component } from 'react';

import styled from '@emotion/styled';

import ListProps from './ListProps';

class List extends Component<ListProps> {
  render() {
    const Card = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      border: 0.15vw #ededed solid;
      font-family: sans-serif;
    `;
    const Header = styled.h2`
      padding-left: 2.5vw;
    `
    const Container = styled.div`
      border-top: 0.075vw #ededed solid;
    `;
    const Element = styled.div`
      border-bottom: 0.075vw #ededed solid;
      padding-bottom: 2.5vh;
      padding-top: 2.5vh;
      padding-left: 2.5vw;
      font-size:1.25em;
    `;
    return (
      <Card className={this.props.className}>
        <Header>
          {this.props.header}
        </Header>
        <Container>
          {this.props.elements.map( element => <Element>element</Element> )}
        </Container>
      </Card>
    );
  }
}

export default List;
