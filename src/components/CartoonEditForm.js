import React from "react";
import { useState } from "react";

function CartoonEditForm({ handleUpdate, newChange, addNewChanges, cartoon}) {

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
                    onChange={addNewChanges} //patch
                    onSubmit={(e)=>handleUpdate(e, cartoon.id)} //patch

                    
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >
                        
                        <br/> 
                        {/* name */}
                    <label for="name_field">Edit Name?</label>
                    <input 
            
                        id="name_field"
                        name="name"
                        value={newChange.name}
                        type="text" 
                        className="nes-input" 
                        placeholder='"Degenerates on Macbooks"'/>
                        
                    <br/>

                    {/* add new link */}
                    <label for="description_field">Pick Up Different Episodes?</label>

                    <p style={{marginBottom: "10px"}}
                    >(Episode capacity: 3)</p>
                    <input 
                
                        id="name_field"
                        name="link1"
                        value={newChange.link1}
                        type="text" 
                        className="nes-input" 
                        placeholder='"iFrame link for season blah, episode blah blah"'/>
                        

                        <br/>
                        <input 
                
                        id="name_field"
                        name="link2"
                        value={newChange.link2}
                        type="text" 
                        className="nes-input" 
                        placeholder='"Different iFrame link for season blah, episode blah"'/>
                        

                        <br/>
                        <input 
                
                        id="name_field"
                        name="link3"
                        value={newChange.link3}
                        type="text" 
                        className="nes-input" 
                        placeholder='"Final iFrame link for season blah, finale blah"'/>
                        

                        <br/>
                        <button className="nes-btn" type="submit"> submit </button>
                    {/* end of form */}
                    </form>

                    : null
                
            }
        
        </>

    )
}

export default CartoonEditForm

