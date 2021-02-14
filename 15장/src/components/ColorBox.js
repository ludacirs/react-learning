import React, {useContext} from 'react';
import {ColorContext,ColorConsumer} from "../contexts/color";

// const ColorBox = () => {
//     return (
//         <div>
//             <ColorConsumer>
//                 {({state})=>(
//                     <div>
//                         <div style={{
//                             width :'64px',
//                             height :'64px',
//                             background : state.color,
//                         }}/>
//                         <div style={{
//                             width : '32px',
//                             height : '32px',
//                             background : state.subColor,
//                         }}/>
//                     </div>
//
//                 )}
//             </ColorConsumer>
//         </div>
//     );
// };
const ColorBox = () => {
    const {state} = useContext(ColorContext);
    return (
        <div>
            <div>
                <div style={{
                    width :'64px',
                    height :'64px',
                    background : state.color,
                }}/>
                <div style={{
                    width : '32px',
                    height : '32px',
                    background : state.subColor,
                }}/>
            </div>

        </div>
    );
};


export default ColorBox;