import { useState, useEffect} from "react"
import { Columns } from 'react-bulma-components';
import { Resizable, ResizableBox } from 'react-resizable';
import { Link } from "react-router-dom";

const GamesLibrary = () => {
const [games, setGames] = useState([])
const [showGames, setShowGames] = useState([])
const [loadPlease, setLoadPlease] = useState(false)
const [buttonHide, setButtonHide] = useState(false)

// For the Game Name Label Hover ! 
const [isShown, setIsShown] = useState(true); 


let loadGame = function(){
    document.getElementById('loadgame2').showModal()
}

let toggleGame = function(){
    setLoadPlease(loadPlease => !loadPlease)
}

useEffect(() => {
    const getData = async() => {
    let req = await fetch("http://localhost:3000/games") 
    let res = await req.json()
    console.log(res)
    setGames(res)
    } 
    getData() 
}, []) 

return (
<>
    <div style={{position: "relative"}} id="gameslibrary-bg">
            <div id="test"> 
    <ResizableBox style={{position:"absolute", right:"16%", top:"-6px", minHeight:"50px"}} width={1000} height={100} draggableOpts={{grid: [25, 25]}}
    minConstraints={[100, 100]} maxConstraints={[300, 300]}>
     
         <div  style={{ padding: "-10px"}}>
        <img  src="../bggb4.png"
        style={{
            marginLeft:"-45px",
            minHeight: "11%",
            marginTop: "60px",
            marginBottom: "-15px", 
            width: "1035px",
            minWidth: "1035px",
            overflow: "auto"
        }}
        ></img> </div>

        <div>

            {/* Banner! */}
        <p className="nes-container is-rounded" 
       
        style={{
            zIndex: "",
            minWidth:"250px",
            marginRight: "590px",
            marginTop: "-710px",
            marginLeft: "428px",
            minHeight:"50px",
            color: "black",
            stroke: "ActiveBorder",
            fontSize: "18px",
            fontWeight: "",textAlign: "center", backgroundColor:"black", color: "white"}}
            >Games library
            
        </p> 
        <span 
        style={{marginTop:"-90px", marginLeft:"740px",
        color: "black"
    }}
        className="nes-badge">scroll here <br/> <br/>    --------> </span>
        </div>
        
   
    </ResizableBox>
      </div>
      <div style={{position: "relative"}}>



        {/* Games Library Container */}
        <div id="gameslibrary-gameboy">
            <div id="gameslibrary-container"
            style={{
                position: "absolute",
                top:"-625px",
                right:"380px",
                zIndex:"0",
                width: "770px",
                height: "494px",
                marginTop:"-140px",
                
                overflowY: "scroll",
                scrollBehavior: "smooth",
                alignItems: "center"}}>

            {/* Mapping through our games library */}
                {games.map(game => {
                    return (
                        <div className="game-card">



                    {isShown && (
                            <p className="nes-container is-rounded" 
                            style={{
                                zIndex: "0",
                                width:"250px",
                               
                                marginTop: "180px",
                                marginLeft: "320px",
                                marginBottom: "-220px",
                                color: "black",
                                stroke: "ActiveBorder",
                                fontSize: "18px",
                                fontWeight: "",textAlign: "center", backgroundColor:"white", color: "black"}}
                                >
                                {game.name}
                            </p> 
                            )}
                                                
                       



                            {/* Green Gameboy Image */}
                            <img 

                       

                            style={{
                            
                                width: "300px",
                                marginTop: "20px",
                                marginLeft: "30px",
                                marginBottom: "60px",
                                padding: "15px"
                            }}
                            src="../cartridge1.png"/>

                            {/* Load Game Button */}
                            <button className="nes-btn"
                     
                            onClick={()=>{
                                setShowGames(game)
                                loadGame()
                            
                            }} 
                            style={{
                                position:"absolute",
                                zIndex: "0",
                                width:"200px",
                                color: "black", 
                                fontSize: "18px", 
                                padding:"8px", 
                                textAlign: "center", 
                                marginTop:"368px",
                                marginBottom: "60px", 
                                marginLeft:"-255px", 
                                cursor: "pointer"
                            
                            }}
                            >load game</button>



                            
                        </div>

                    )                    
                })}
         </div>
         </div>
         </div>
        {/* Where all the iframes are !! */}
        <dialog className="nes-dialog" id="loadgame2"
        style={{
            
            zIndex:"4",
            width:"790px",
            height:"510px",
            top:"-80px",
            right:"-20px",
            marginRight:"390px", 
            backgroundColor:"black"
        
          
//?? USE A POPUP!
            
        }}
        >
            {/* <iframe style={{}}
            src="https://v6p9d9t4.ssl.hwcdn.net/html/1071128/WebBuild/index.html?v=1542781917" 
            width="100%" height="100%"frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            */}

            <iframe style={{ zIndex:"20", right:"-7px"}}
            src={showGames.link}
            width="100%" height="120%"frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="false" ></iframe>

        
        {/* iframes go here! */}
        <form method="dialog">
    <menu class="dialog-menu">
        
    <button className="nes-btn"
    style={{
        fontFamily:"intro-font",
        fontSize:"12px",
        zIndex:"200",
        cursor: "pointer", 
        position:"absolute",
        top:"554px", 
        right:"15px",
        width: "116px",
        height:"38px"
    }}
    > go back </button>
    </menu> 
    </form>
        </dialog>
        </div>
</>
)

} 

export default GamesLibrary