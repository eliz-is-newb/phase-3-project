import React from "react"
import QuoteEditForm from "./QuoteEditForm"

function QuotesCard({handleUpdate, newChange, handleDelete , addNewChanges, openUpdateForm, toggleEditInput, quote}) {
return (
  
    <div id="admin-quote-card" 
        style={{overflow:"scroll"}}
        >
                    <br/>
                    <br/>
                    <br/>
                {/* quote img and quote name */}
                <iframe style={{width:"400px", height:"230px", marginLeft:"141px"}}
                
                src={quote.link} alt="game image"/>
                <p className="nes-badge is-snapchat"style={{textAlign:"center", marginLeft:"141px"}}
                >{quote.quote}</p>
                

        
                    <br/>
                
                {/* form for card goes here */}

                        <QuoteEditForm handleUpdate={handleUpdate} newChange={newChange} addNewChanges={addNewChanges} openUpdateForm={openUpdateForm} toggleEditInput={toggleEditInput} cartoon={quote}/>


                {/* ------------------------ */}
           
            <button onClick={()=>handleDelete(quote.id)}        
               style={{cursor: "pointer",  marginLeft: "415px", width:"120px", fontSize:"18px",marginTop:"-67px"}}
            className="nes-btn">Delete!</button>
             <br/>
            <br/>

            {/* end .map() from here */}

            </div>
            
        
)}

export default QuotesCard