import React, {Component} from "react";
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';


function randomColor() {
    return "#" + Math.random().toString(16).slice(2,8);
}

class App extends Component{
  state = {
    color : `#000000`,
  }

  render (){
    return (
        <div>
          <button onClick={this.handleClick}> 색상 업데이트 </button>
            <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
            </ErrorBoundary>
        </div>
        )
  }

  handleClick =()=> {
    this.setState({
      color : randomColor()
    });
  }
}

export default App;
