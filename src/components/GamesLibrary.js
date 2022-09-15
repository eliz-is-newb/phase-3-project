import { useState } from "react"
import { Columns } from 'react-bulma-components';
import { Resizable, ResizableBox } from 'react-resizable';
import { Link } from "react-router-dom";

const GamesLibrary = () => {
const [games, setGames] = useState([{game_desc: 'This is a game', game_link: 'Thisisaalink.com', game_name: "this game is called game." }, {game_desc: 'This is a game', game_link: 'Thisisaalink.com', game_name: "this game is called game."}])

// For the Game Name Label Hover ! 
const [isShown, setIsShown] = useState(true); 



return (

    <div id="gameslibrary-bg">
            <div id="test"> 
    <ResizableBox style={{marginLeft: "171px"}} width={1000} height={100} draggableOpts={{grid: [25, 25]}}
    minConstraints={[100, 100]} maxConstraints={[300, 300]}>
        <Columns>
        <Columns.Column></Columns.Column>
         <Columns.Column size={5} style={{ padding: "-10px"}}>
        <img  src="../bggb444.png"
        style={{
            minHeight: "10%",
            marginTop: "197px",
            marginBottom: "-15px", 
            width: "1000px",
            minWidth: "1000px",
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
            marginRight: "598px",
            marginTop: "-720px",
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
                height: "482px",
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
                                {game.game_name}
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
    </div>
    </ResizableBox>
     </div>

</div>
)

} 

export default GamesLibrary