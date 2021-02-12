import React from "react";
import withRouter from "react-router-dom/es/withRouter";

const WithRouterSample = ({location, match, history}) =>{
    return(
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location,null,2)} rows="7" readOnly/>
            <h4>match</h4>
            <textarea value={JSON.stringify(match,null,2)} rows="7" readOnly/>
            <h4>history</h4>
            <button onClick={()=>history.push('/')}>Home</button>
        </div>
    );
}

export default withRouter(WithRouterSample);