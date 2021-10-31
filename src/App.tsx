import { Component } from 'react';

import Button from './Components/Button/Button';
import List from './Components/List/List';

class App extends Component {
  render() {
    return (
      <div>
         <Button type="primary">Click me!</Button>
         <List header="Some title" elements={["element1", "element2", "element3"]} />
      </div>
    );
  }
}

export default App;
