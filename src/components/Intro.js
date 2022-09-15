import React from "react";
import './Intro.css';
import { NavLink } from "react-router-dom";
import "nes.css/css/nes.min.css";
import { Columns } from 'react-bulma-components';

function Intro() {

return (

<div id='test' >
        <Columns style={{overflow:"-moz-hidden-unscrollable"}}>
            <Columns.Column>
                <Columns.Column size={3}>
                <div className="nes-container is-rounded" id="text1" style={{ color: "black", backgroundColor:"white", zIndex: "0"}}>
                    <p>Oh hey.</p>
                </div> 
                <div className="nes-container is-rounded" id="text" style={{ color: "black", backgroundColor:"white", zIndex: "0"}}>
                    <p>Welcome to "Balancing Limbo".  Heh. Or the local 7/11's.</p>
                </div> 
                <div className="nes-container is-rounded" id="text" style={{ color: "black", backgroundColor:"white", zIndex: "0"}}>
                    <p>Nice game boy. Am I stoned? ... Or did that gameboy just fall from the sky and
                    into your hands?</p>
                </div> 
                </Columns.Column>
                <Columns.Column size={1}>
                <div className="nes-container is-rounded" id="text2" style={{ color: "black", backgroundColor:"white", zIndex: "0"}}>
                    <p>Well... anyways, I guess it's yours now.</p>
                </div> 
                </Columns.Column>
            </Columns.Column>
            <Columns.Column size={6}>
                <div id="control">
                 
                 {/* Nav Link Path! */}
                <div id='bggb'>
        
                    <NavLink to="/game"> 
                    <div id="start-game"></div> 
                    </NavLink>     
   
                </div>
                </div>
            </Columns.Column>
        
    
</Columns>

</div>
)
}

export default Intro; 