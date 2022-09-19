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

                {/* balloon - "thought bubble commentary" */}
                {/* <div className="nes-container" 
                style={{
                    padding:"10px",
                    opacity: "0.8",
                    color:"black",
                    backgroundColor: "white",
                    position:"absolute",
                    top: "641px",
                    right: "1218px",
                    width: "234px",
                    fontSize: "14px",
                    boxShadow: "0 0.3em black, 0 -0.3em black, 0.3em 0 black, -0.3em 0 black", 
                    border: "none", 
                }}
                    >Am I stoned? ... Or did that gameboy just fall from the sky?</div> */}

                    {/* thought bubbles */}
                    {/* 1 */}
                    {/* <span className="nes-badge"
                    style={{
                        opacity: "0.8",
                        backgroundColor: "white",
                        position:"absolute",
                        top: "575px",
                        height: "10px",
                        right: "1190px",
                        width: "20px",
                        boxShadow: "0 0.2em black, 0 -0.2em black, 0.2em 0 black, -0.2em 0 black", 

                    }}
                    
                    > </span> */}
                    {/* 2 */}
                    {/* <span className="nes-badge"
                    style={{
                        opacity: "0.8",
                        backgroundColor: "white",
                        position:"absolute",
                        top: "602px",
                        height: "11px",
                        right: "1212px",
                        width: "35px",
                        boxShadow: "0 0.2em black, 0 -0.2em black, 0.2em 0 black, -0.2em 0 black", 

                    }}
                    
                    > </span> */}
                     
          
                {/* banner inside bggb */}  

                <div className="nes-container" 
                style={{ 
                    padding: "12px",
                    color: "white", 
                    backgroundColor:"black", 
                    zIndex: "5", 
                    border: "2px solid white",
                    top: "537px",
                    right: "-1259px",
                    height: "135px",
                    width: "313px",
                    fontSize: "18px"
                    }}>
                    <p>Welcome to "Balancing Limbo". Heh. Or the local 7/11's.</p>
                </div>

                {/* first balloon - "greeting" */}
                <div className="nes-balloon from-right" 
                style={{ 
                    color: "black", 
                    backgroundColor:"white", 
                    zIndex: "0",
                    top: "156px",
                    right: "-235px",
                    height: "196px",
                    width: "350px",
                    fontSize: "18px"
                    }}>
                    <p>Oh hey there, hipster scum!</p>
                    <br/>
                    <p>this game is brought to you by 
                            degenerates on macbooks!</p>
                            <br/>
                        


                    {/* create a seperate container to show off the img logos of what tech we used, 
                    github links. Put inside <div> snes-container */}

               
                </div> 


                {/* text above bggb */}
                {/* 1 */}
                </Columns.Column>
                <Columns.Column size={1}>
                <div className="nes-container is-rounded" id="text2" style={{ color: "black", backgroundColor:"white", zIndex: "0"}}>
                    <p>huh... interesting. I wonder if it's charged.</p>
                </div> 
                {/* 2 */}
                
                <div className="nes-container is-rounded" id="text2a" style={{ color: "black", backgroundColor:"white", zIndex: "0"}}>
                    <p> * A random gameboy has fallen from the heavens and has been sitting on the roof of this gas pit stop for couple months now. Out of some odd luck, while escaping your den of programming hell, it has fallen into your hands.* </p>
                </div> 

                {/* bggb img helper */}
                <div className="nes-container is-rounded" id="text3" style={{ color: "black", backgroundColor:"gray", zIndex: "0"}}>
                    <p>Well... anyways, I guess it's yours now.</p>
                </div> 
                </Columns.Column>
            </Columns.Column>
            <Columns.Column size={8}>
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