// リスト 3-19 ： ステートの更新 
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  msgStyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }

  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hello',
    };
    let timer = setInterval(() => {
      this.setState((state) => ({
        msg: state.msg + "!"
      }));
    }, 10000);
  }

  render(){
    return <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <p style={this.msgStyle}>{this.props.msg}</p>
    </div>;
  }
}

export default App;