import logo from './logo.svg';
import './App.css';
import React, {useState, Suspense} from "react";
import loadable from "@loadable/component";

const SplitMe = loadable(()=>import('./SplitMe'),{
    fallback: <div>loading...</div>
});

function App() {
    const [visible, setVisible] = useState(false);

    function handleClick() {
        setVisible(!visible);
    }

    function handleMouseOver() {
        SplitMe.preload();
    }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={()=>handleClick()} onMouseOver={()=>handleMouseOver()}>Hello React</p>
          {visible && <SplitMe/>}
      </header>
    </div>
  );
}

export default App;
