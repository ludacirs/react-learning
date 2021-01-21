import React,{Component} from "react";

class EventPractice extends Component{
    state = {
        username : '',
        message : '',
    }

    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <div/>
                <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>button</button>
            </>
        )
    }

    handleClick =(e)=> {
        console.log(`유저네임 ${this.state.username}`);

        console.log(`메시지 ${this.state.message}`);
    }

    handleChange =(e)=> {
        this.setState( {
            [e.target.name] : e.target.value
        })
    }
}

export default EventPractice;