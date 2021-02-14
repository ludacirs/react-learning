import React from 'react';
import {ColorConsumer} from '../contexts/color';
const colors = ['red','orange','yellow','green','blue','indigo','violet'];

const SelectColors = () => {
    return (
        <div>
            <h2>choose a color.</h2>
            <ColorConsumer>
                {({actions})=>(
                    <div style={{display : 'flex'}}>
                        {colors.map(color=>
                            <div onContextMenu={()=>actions.setSubColor(color)}
                                 onClick={()=>actions.setColor(color)}
                                 key={color} style={{
                                width : '24px',
                                height : '24px',
                                background : color,
                                cursor : 'pointer',
                            }}/>)}
                    </div>
                )}
            </ColorConsumer>
            <hr/>
        </div>
    );
};

export default SelectColors;