import React from "react";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import QuotesCard from "./QuotesCard";

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
        link: "",
        user_id:1
    })

    const [newChange, setNewChange] = useState({
        quote: ""
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
            .then(data => setQuotesData([...quotesData, data]))
           
    }
    // FETCH : PATCH ################################

    // updating databases  --------------------------

    let addNewChanges = (e) => { 
        e.preventDefault()
        setNewChange(prevEntry => {
            return {...prevEntry, [e.target.name]: e.target.value}
        })
    }

    // requests ------------------------------------

    const handleUpdate = async (e,id) => {
        e.preventDefault()
        let req = fetch(`http://localhost:3000/quotes/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newChange),
        })
        .then(resp=> resp.json())
        .then(data=>{
            setQuotesData(quotesData.filter((item)=> item.id !== data.id))
            setQuotesData((current)=>[data,...current])
        })
    }


    // FETCH : DELETE ########################################
    function handleDelete(id) {
        fetch(`http://localhost:3000/quotes/${id}`, { 
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
    <div  id="quotes-library-window"
     style={{marginTop: "10%", marginRight: "10%", width:"700px", overflow:"auto", marginLeft: "0%", marginBottom:"50px"}}
    >
        <div method="dialog">
        {/* Title! */}
        <p  style={{marginLeft:"105px", marginRight:"20px"}}
        class="title">Update Quotes Info?</p>
        <br/>
        

        {/* ---------View!-------- */}

        {/* start .map() from here */}
        
        {/* ------Buttons!-------- */}

        {/* post, update, delete */}
        <button onClick={toggleNewInput}
        style={{cursor: "pointer", marginLeft: "105px", width:"481px"}}
            className="nes-btn is-primary">Create New!</button>
          
            <br/>
            

    {/* form here */}
        

            {/* ternary to display the form on pop-up/modal */}
        {openCreateForm
                    ?  <><form className="nes-field" 
                    onChange={addNewEntry}	//post
                    onSubmit={handleSubmit} //post
                
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >


                       <br/> <br/>
                      
                        {/* quote */}
                    <label for="name_field">Title?</label>
                    <input 
            
                        // change this value
                        value={newEntry.quote}
                        name="quote"
                        type="text" 
                        className="nes-input" 
                        placeholder="enter title"/>
                        
                        <br/> <br/> 
                        {/*  link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
            
                        id="name_field"
                    
                        value={newEntry.link}
                        name="link"
                        type="text" 
                        className="nes-input" 
                        placeholder="enter link"/>
                        <br/>
                        <button className="nes-btn" type="submit"> submit </button>

                        
                        </form></> 
                    

                    : null
                
        }
        
       
            <br/><br/>

            {quotesData.map(quote => {
            return ( 

                <>
                <QuotesCard quotesData={quotesData} handleUpdate={handleUpdate} 
        newChange={newChange} handleDelete={handleDelete} addNewChanges={addNewChanges}
        quote={quote}/>
                </>
            )})}
        
        {/* end .map() from here */}

    </div>
    </div>
    </section>
    </div>
    
  );
    
}
export default QuotesContainer;