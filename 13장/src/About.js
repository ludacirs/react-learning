import React from "react";
import * as qs from "qs";

const About = ({location})=>{
    const query = qs.parse(location.search,{
        ignoreQueryPrefix: true,
    });
    const showDetail = query.detail==='true';
    return(
        <div>
            <h1>About.</h1>
            <div>about us</div>
            {showDetail && <div>did you see that</div>}
        </div>
    );
}


export default About;