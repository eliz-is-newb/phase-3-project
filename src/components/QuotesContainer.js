import React from "react";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

function QuotesContainer({  }) {

 // FETCH : GET #########################################

    // consts => -------------------------------------------
    const [quotesData, setQuotesData] = useState([]) 
    const [refresh, setRefresh] = useState(false)

    // requests => -------------------------------------------
    useEffect(() => { 
        const getData = async () => { 
        let req = await fetch("http://localhost:3000/quotes")  
        let res = await req.json()  
        setQuotesData(res)  
    } 
        getData()  
    }, [])  

    // FETCH : POST #####################################
    // consts -------------------------------------------
    
    const [newEntry, setNewEntry] = useState({
        quote: "",
        link: ""
    })

    // updating database ------------------------------------------
       function addNewEntry(e) {
        setNewEntry(prevEntry => {
            return {...prevEntry, [e.target.name]: e.target.value}
        })
    }

    // requests ------------------------------------------
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/quotes", {  
        method: "POST", 
        headers: { 
        "Content-Type" : "application/json"
        }, 
            body: JSON.stringify(newEntry)
        }) 
            .then(res => res.json())
            .then(data => newEntry(data))
            console.log("handleSubmit")
    }

    // FETCH : PATCH ################################

    // updating databases  --------------------------

    let addNewChanges = (newChange) => { 
        newChange.preventDefault()
        const updateData = [...quotesData, newChange] 
            setQuotesData(updateData)
    }

    // requests ------------------------------------

    const handleUpdate = async () => {
        let req = fetch(`http://localhost:3000/quotes/${quotesData.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quote: "",
            }),
        })
    }


    // FETCH : DELETE ########################################
    function handleDelete() {
        fetch(`http://localhost:3000/quotes/${quotesData.id}`, { 
            method: "DELETE", 
            headers: {
            "Content-Type" : "application/json",
            }
            }) 	
            setRefresh(prevRefresh => !prevRefresh)
            } 




    //// for css 
    const [openCreateForm, setOpenCreateForm] = useState(false) // post //defined inside regular function, have to be defined inside of a functional component

    const [openUpdateForm, setOpenUpdateForm] = useState(false) // update 

    let toggleNewInput = function(e){
        // these are onSubmits to close the forms after submit 
        setOpenCreateForm(!openCreateForm)
        e.preventDefault()
    }

    let toggleEditInput = function(e){
        setOpenUpdateForm(!openUpdateForm)
        e.preventDefault()
    }



  return (
    <div >
    <section> 
    <div className="nes-dialog is-rounded" id="quotes-library-window"
       style={{marginTop: "10%", marginRight: "40%", overflow:"auto", marginLeft: "10%", marginBottom:"500px"}}

    >
        <form method="dialog">
        {/* Title! */}
        <p class="title">Update Quotes Info?</p>
        <br/>
        <br/>

        {/* ---------View!-------- */}

        {/* start .map() from here */}
        
        {/* ------Buttons!-------- */}

        {/* post, update, delete */}
        <button onClick={toggleNewInput}
        style={{cursor: "pointer", marginLeft: "11px", width:"481px"}}
            className="nes-btn">Create New!</button>
          
            <br/>
            

    {/* form here */}
        

            {/* ternary to display the form on pop-up/modal */}
        {openCreateForm
                    ?  <><form className="nes-field" 
                    onChange={addNewEntry}	//post
                    onSubmit={handleSubmit} //post
                
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >


                       <br/>
                      
                        {/* quote */}
                    <label for="name_field">Title?</label>
                    <input 
            
                        // change this value
                        value={newEntry.quote}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter title"/>
                        
                        <br/>
                        {/*  link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
            
                        id="name_field"
                    
                        value={newEntry.link}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter link"/>
                        <br/>
                        
                        </form></> 
                    

                    : null
                
        }
        
        {/* form end */}
        {quotesData.map(quote => {
            return (
        <div id="admin-quotes-card" key={quote.id}>
                    <br/>
                    <br/>
                {/* quote img and quote name */}
                <iframe style={{width: "90%", height: "500px"}}
                
                src={quote.link} alt="game image"/>
                <p>{quote.quote}</p>
  
        <br/>
        <button onClick={toggleEditInput}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Edit!</button>

    {/* ternary to display the form on pop-up/modal */}
    {openUpdateForm
                    ? <> 
                    <form className="nes-field" 
                    onSubmit={handleUpdate} //patch
                    onChange={addNewChanges} //patch
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >


                    

                      
                        {/*  title */}
                    <label for="link_field">Title?</label>
                    <input 
                        id="name_field"
                    
                        value={addNewChanges.quote}
                        type="text" 
                        className="nes-input" 
                        placeholder="Change title"/>
                    
                    {/* end of form */}
                  
                    
                    </form></>

                    : null
                
            }
            <br/><br/>

        <button onClick={handleDelete}	//delete
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Delete!</button>
            </div>
            )})}
        {/* end .map() from here */}
    
        <menu className="dialog-menu">
            <button style={{
            cursor: "pointer", 
            marginTop: "-40px",
            marginLeft: "334px",
            width: "65px",
            height:"65px"
        }}>
           <Link to="/admin"> <img src="../x-btn1.png" alt="close"/> </Link>
            </button>
            </menu>
            </form>
        </div>
        </section>
    </div>

  );
}

export default QuotesContainer;