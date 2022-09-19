import { useState, useEffect} from "react"
import { Columns } from 'react-bulma-components';
import { Resizable, ResizableBox } from 'react-resizable';
import { Link } from "react-router-dom";

const GamesLibrary = () => {
const [games, setGames] = useState([])
const [showGames, setShowGames] = useState([])
const [loadPlease, setLoadPlease] = useState(false)

// For the Game Name Label Hover ! 
const [isShown, setIsShown] = useState(true); 

let loadGame = function(){
    setShowGames(showGames => !showGames)
}

let loadGame2 = function(){
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
    <div id="gameslibrary-bg">
            <div id="test"> 
    <ResizableBox style={{marginLeft: "184px"}} width={1000} height={100} draggableOpts={{grid: [25, 25]}}
    minConstraints={[100, 100]} maxConstraints={[300, 300]}>
        <Columns>
        <Columns.Column></Columns.Column>
         <Columns.Column size={5} style={{ padding: "-10px"}}>
        <img  src="../bggb808.png"
        style={{
            marginLeft:"-29px",
            minHeight: "10%",
            marginTop: "172px",
            marginBottom: "-15px", 
            width: "1514px",
            minWidth: "1027px",
            overflow: "hidden"
        }}
        ></img> 
       
       
        </Columns.Column>
        <Columns.Column></Columns.Column>

        </Columns> 

        <div>

            {/* Banner! */}
        <p className="nes-container is-rounded" 
       
        style={{
            zIndex: "5",
            minWidth:"500px",
            marginRight: "590px",
            marginTop: "-750px",
            marginLeft: "562px",
            minHeight:"85px",
            color: "black",
            stroke: "ActiveBorder",
            fontSize: "18px",
            fontWeight: "",textAlign: "center", backgroundColor:"darkred", color: "white"}}
            >Warning... games may produce feelings of pleasure.
            
        </p> 
        </div>

        {/* Games Library Container */}
        <div id="gameslibrary-gameboy">
            <div id="gameslibrary-container"
            style={{
                marginLeft: "400px",
                backgroundColor: "green",
                width: "800px",
                height: "484px",
                marginTop:"-140px",
                
                overflow: "auto",
                scrollBehavior: "smooth",
                alignItems: "center"}}>

            {/* Mapping through our games library */}
                {games.map(game => {
                    return (
                        <div className="game-card">



                    {isShown && (
                            <p className="nes-container is-rounded" 
                            style={{
                                zIndex: "3",
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

                             onMouseEnter={() => setIsShown(true)}
                             onMouseLeave={() => setIsShown(true)}

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
                                console.log(game)
                            
                            }} 
                            style={{
                                zIndex: "1",
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
        {/* Where all the iframes are !! */}
        <div id="loadgame2"
        style={{
            // osition: absolute;
            // z-index: 200;
            // height: 499px;
            // margin-top: -465px;
            // width: 786px;
            // margin-left: 389px;
        
            position: "absolute",
            
            height: "499px", 
            marginTop: "-465px",
            width:"786px",
            marginLeft:"389px",


            
        }}
        >
            {/* <iframe style={{}}
            src="https://v6p9d9t4.ssl.hwcdn.net/html/1071128/WebBuild/index.html?v=1542781917" 
            width="100%" height="100%"frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            */}

            <iframe 
            src={showGames.link}
            width="100%" height="100%"frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="false" ></iframe>

        
        {/* iframes go here! */}
        

        </div>
        
    </div>
    </ResizableBox>
     </div>

</div>
</>
)

} 

export default GamesLibrary