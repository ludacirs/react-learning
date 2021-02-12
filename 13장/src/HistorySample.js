import React, {Component, useEffect} from "react";

class HistorySampleClass extends Component{
    handleGoBack= ()=>{
        this.props.history.goBack();
    };

    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        this.unblock = this.props.history.block('did you leave?');
    }
    componentWillUnmount() {
        if(this.unblock) {
            this.unblock();
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.handleGoBack}>Back</button>
                <button onClick={this.handleGoHome}>Home</button>
            </div>
        );
    }
}
const HistorySampleFunction = ({history})=>{
    useEffect(() => {
        return (history.block('did you leave?'));
    }, [history]);
    return(
        <div>
            <button onClick={()=>history.goBack()}>Back</button>
            <button onClick={()=>history.push('/')}>Home</button>
        </div>
    );
}

export {HistorySampleClass,HistorySampleFunction};