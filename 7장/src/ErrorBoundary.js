import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state = {
        error : false
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error : true
        });
        console.log({error, errorInfo});
    }
    render(){
        return this.state.error ? <div>에러가 발생했습니다</div> : <div>{this.props.children}</div>
    }
}

export default ErrorBoundary;