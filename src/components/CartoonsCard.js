import React from "react"
import CartoonEditForm from "./CartoonEditForm"

function CartoonsCard({handleUpdate, newChange, handleDelete , addNewChanges, openUpdateForm, toggleEditInput, cartoon}) {
return (
  
    <div id="admin-cartoon-card" 
        style={{overflow:"scroll"}}
        >
                    <br/>
                    <br/>
                {/* cartoon img and cartoon name */}
                <img 
                style={{width:"400px", marginLeft:"141px"}}
                src={cartoon.image} alt="game image"/>
                <p className="nes-badge is-snapchat"
                style={{textAlign:"center", marginLeft:"141px"}}
                >{cartoon.name}</p>
                    <br/>

        
                    <br/>
                
                {/* form for card goes here */}

                        <CartoonEditForm handleUpdate={handleUpdate} newChange={newChange} addNewChanges={addNewChanges} openUpdateForm={openUpdateForm} toggleEditInput={toggleEditInput} cartoon={cartoon}/>


                {/* ------------------------ */}
           
            <button onClick={()=>handleDelete(cartoon.id)}        
               style={{cursor: "pointer",  marginLeft: "415px", width:"120px", fontSize:"18px",marginTop:"-67px"}}
            className="nes-btn">Delete!</button>
             <br/>
            <br/>

            {/* end .map() from here */}

            </div>
            
        
)}

export default CartoonsCard