import { Component } from 'react';

import styled from '@emotion/styled';

import Input from './Components/Input/Input';
import Button from './Components/Button/Button';
import List from './Components/List/List';



class App extends Component {
  
  state={
    text:"",
    todoList:[]
  }

  inputChangeHandler = (event:any)=>{
    this.setState({text:event.target.value})
  }

  buttonClickHandler = ()=>{
    this.setState({todoList:[...this.state.todoList,this.state.text]})
    this.setState({text:""})
  }

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
            <Input placeholder={'Add your todo item'} value={this.state.text} onChange={this.inputChangeHandler}/>
            <Button type="primary" onClick={this.buttonClickHandler}>Click me!</Button>
         </Container>
         <List header="Some title" elements={this.state.todoList} />
      </div>
    );
  }
}

export default App;
