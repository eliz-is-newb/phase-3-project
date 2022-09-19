import React from "react";
import { useState } from "react";

function GameEditForm({ handleUpdate, newChange, addNewChanges, game}) {

    const [openUpdateForm, setOpenUpdateForm] = useState(false) // update 

    let toggleEditInput = function(e){
        setOpenUpdateForm(!openUpdateForm)
        e.preventDefault()
    }
    return(
        <>
         <button onClick={toggleEditInput}
        style={{cursor: "pointer", marginLeft: "147px", width:"250px", marginTop:"-2px", fontSize:"18px", marginBottom:"0px"}}
            className="nes-btn">Edit!</button>
            {/* ---------form here--------------- */}


            {/* ternary to display the form on pop-up/modal */}
            {openUpdateForm
                    ?  <form className="nes-field" 
                    onSubmit={(e)=>handleUpdate(e,game.id)} //patch
                    onChange={addNewChanges} //patch
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >
                        
                        
                        <br/>
                        {/* Name */}
                    <label for="link_field">Name?</label>
                    <input 
                    
                    
                        id="name_field"
                        
                        name="name"
                        value={newChange.name}
                        type="text" 
                        className="nes-input" 
                        placeholder="New name?"/>  
                         <br/> 
                
                        {/*  image */}

                    <label for="name_field">Image Src?</label>
                    <input 
                        id="name_field"
                        
                        name="image"
                        value={newChange.image}
                        type="text" 
                        className="nes-input" 
                        placeholder="Change img src link:"/>
                    

                    <br/>
                  
                    <button className="nes-btn" type="submit"> submit </button>
                    
                    {/* end of form */}
                    </form>

                    : null
                
                  
                
                }
            
            </>
    
        )
    }

export default GameEditForm

