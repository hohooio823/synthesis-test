import { Component } from 'react';

import styled from '@emotion/styled';

import Input from './Components/Input/Input';
import Button from './Components/Button/Button';
import List from './Components/List/List';



class App extends Component {
  render() {
    const Container = styled.div`
      display:flex;
      margin-top:5vh;
      margin-bottom:2.5vh;
      justify-content:center;
    `
    return (
      <div>
         <Container>
            <Input placeholder={'Add your todo item'} />
            <Button type="primary">Click me!</Button>
         </Container>
         <List header="Some title" elements={["element1", "element2", "element3"]} />
      </div>
    );
  }
}

export default App;
