import React from "react"
import GameEditForm from "./GameEditForm"

function GamesCard({handleUpdate, newChange, handleDelete , addNewChanges, openUpdateForm, toggleEditInput, game}) {
return (
  
    <div id="admin-game-card" 
        style={{overflow:"scroll"}}
        >
                    <br/>
                    <br/>
                {/* game img and game name */}
                <img 
                style={{width:"400px", marginLeft:"141px"}}
                src={game.image} alt="game image"/>
                <p className="nes-badge is-snapchat"
                style={{textAlign:"center", marginLeft:"141px"}}
                >{game.name}</p>
                    <br/>

        
                    <br/>
                
                {/* form for card goes here */}

                        <GameEditForm handleUpdate={handleUpdate} newChange={newChange} addNewChanges={addNewChanges} openUpdateForm={openUpdateForm} toggleEditInput={toggleEditInput} game={game}/>


                {/* ------------------------ */}
           
            <button onClick={()=>handleDelete(game.id)}        
               style={{cursor: "pointer",  marginLeft: "415px", width:"120px", fontSize:"18px",marginTop:"-67px"}}
            className="nes-btn">Delete!</button>
             <br/>
            <br/>

            {/* end .map() from here */}

            </div>
            
        
)}

export default GamesCard