import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={ref=>this.scrollBox=ref}/>
                <button onClick={this.handleClick}> 맨 밑으로 </button>
            </div>
        );
    }

    handleClick =()=>{
        this.scrollBox.scrollToBottom();
    }
}
export default App;
