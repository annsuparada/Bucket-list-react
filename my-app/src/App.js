import React, { Component } from 'react';
import BucketList from "./component/BucketList"
import BucketForm from "./component/BucketForm"


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bucket: [
        {
          name:'Dance',
          id: 122,
          completed: false
        },
        {
          name:'Sky Diving',
          id: 123,
          completed: false
        },
        {
          name:'Travel',
          id: 124,
          completed: false
        }
      ]
    }
  }
  
  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      name: 'item',
      id: Date.now(),
      completed: false
    };
    this.setState({
      bucket: [...this.state.bucket, newItem]
    });
  }
  render() {
    console.log('bucket',this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bucket List</h1>
        </header>

        <BucketList bucket={this.state.bucket} />
        <BucketForm addItem={this.addItem}/>
      </div>
    );
  }
  
}

export default App;
