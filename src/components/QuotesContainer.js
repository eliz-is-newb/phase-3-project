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
     style={{marginTop: "10%", marginRight: "10%", width:"700px", overflow:"auto", marginLeft: "0%", marginBottom:"500px"}}
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
        
        {/* form end */}
        {quotesData.map(quote => {
            return (
        <div id="admin-quotes-card" key={quote.id}
        style={{overflow:"scroll"}}
        >
                    <br/>
                    <br/>
                {/* quote img and quote name */}
                <iframe style={{width:"400px", height:"230px", marginLeft:"141px"}}
                
                src={quote.link} alt="game image"/>
                <p className="nes-badge is-snapchat"style={{textAlign:"center", marginLeft:"141px"}}
                >{quote.quote}</p>
                
  
        <br/>
        <button onClick={toggleEditInput}
        style={{cursor: "pointer", marginLeft: "147px", width:"250px", marginTop:"-2px", fontSize:"18px", marginBottom:"0px"}}
            className="nes-btn">Edit!</button>

    {/* ternary to display the form on pop-up/modal */}
    {openUpdateForm
                    ? <> 
                    <form className="nes-field" 
                    onSubmit={(e)=>handleUpdate(e,quote.id)} //patch
                    onChange={addNewChanges} //patch
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >
                        <br/>
                        {/*  title */}
                    <label for="link_field">Title?</label>
                    <input 
                        id="name_field"
                        name="quote"
                        value={newChange.quote}
                        type="text" 
                        className="nes-input" 
                        placeholder="Change title"/>
                        <br/>
                        <button className="nes-btn" type="submit"> submit </button>

                    {/* end of form */}
                  
                    
                    </form></>

                    : null
                
            }
            <br/><br/>

        <button onClick={()=>handleDelete(quote.id)}	//delete
        style={{cursor: "pointer",  marginLeft: "415px", width:"120px", fontSize:"18px",marginTop:"-115px"}}
            className="nes-btn">Delete!</button>
            <br/>
            <br/>

            </div>
            )})}
        {/* end .map() from here */}
    
       
            </div>
        </div>
        </section>
    </div>

  );
}

export default QuotesContainer;