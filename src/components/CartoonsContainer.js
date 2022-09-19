import React from "react";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './FTFY.css';
function CartoonsContainer() {

 // FETCH : GET #########################################

    // consts => -------------------------------------------
    const [cartoonsData, setCartoonsData] = useState([]) 
    const [refresh, setRefresh] = useState(false)

    // requests => -------------------------------------------
    useEffect(() => { 
        const getData = async () => { 
        let req = await fetch("http://localhost:3000/cartoons")  
        let res = await req.json()  
        setCartoonsData(res)  
    } 
        getData()  
    }, [])  

    // FETCH : POST #####################################
    // consts -------------------------------------------
    
    const [newEntry, setNewEntry] = useState({
        name: "", 
        description: "", 
        link: "", 
        image: "",
        user_id: 1
    })

    const [newChange, setNewChange] = useState({
        name: "", 
        description: ""
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
        fetch("http://localhost:3000/cartoons", {  
        method: "POST", 
        headers: { 
        "Content-Type" : "application/json"
        }, 
            body: JSON.stringify(newEntry)
        }) 
        .then(res => res.json())
        .then(data => setCartoonsData([...cartoonsData, data]))
    //    setCartoonsData([...cartoonsData, data]
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
        e.preventDefault();
        let req = fetch(`http://localhost:3000/cartoons/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newChange),
        })
        .then(resp=> resp.json())
        .then(data=>{
            setCartoonsData(cartoonsData.filter((item)=> item.id !== data.id))
            setCartoonsData((current)=>[data,...current])
            // setRefresh(prevRefresh => !prevRefresh)
        })
    }



    // FETCH : DELETE ########################################
    function handleDelete(id) {
        console.log(id)
        fetch(`http://localhost:3000/cartoons/${id}`, { 
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
    <div id="cartoons-library-window"
    style={{marginTop: "10%", marginRight: "10%", width:"700px", overflow:"auto", marginLeft: "0%", marginBottom:"500px"}}
    >
        <div method="dialog">
        {/* Title! */}
        <p style={{marginLeft:"105px", marginTop:"20px"}}
        className="title">Update Cartoon Info?</p>
        <br/>

        {/* ---------View!-------- */}

        {/* start .map() from here */}
        
        {/* ------Buttons!-------- */}

        {/* post, update, delete */}
        <button onClick={toggleNewInput}
        style={{cursor: "pointer", marginLeft: "105px", width:"481px"}}
            className="nes-btn">Create New!</button>
       <br/>
       <br/>
    

    {/* form here */}
        

            {/* ternary to display the form on pop-up/modal */}
            {openCreateForm
                    ?  <form className="nes-field" 
                    onChange={addNewEntry}	//post 
                    onSubmit={handleSubmit} //post
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >


                        <br/> <br/>
                        {/* name */}
                    <label for="name_field">Name?</label>
                    <input 
            
                        id="name_field"
                        // change this value
                        name="name"
                        value={newEntry.name}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter name"/>
                        
                    

                    <br/> <br/>

                    {/* description */}
                    <label for="description_field">Description?</label>
                    <input 
                
                        id="name_field"
                        name="description"
                        // change this value
                        value={newEntry.description}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter description:"/>
                        
                        <br/>
                        
                        <br/>
                        {/* link */}
                    
                    <label for="link_field">iFrame Link?</label>
                    <input 
                        id="name_field"
                        name="link"
                        // change this value
                        value={newEntry.link}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter link"/>
                    
                    
                        <br/>
                        <br/> 
                        {/*  image */}
                    <label for="name_field">Image Src?</label>
                    <input 
                    
                        id="name_field"
                        name="image"
                        // change this value
                        value={newEntry.image}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter img src link:"/>
                        <br/>
                        <br/>
                     <button className="nes-btn" type="submit"> submit </button>
                    {/* end of form */}
                    <br/>
                    <br/>
                    </form>
                    

                    : null
                
            }
         
        
        {/*------------- form end-------------- */}

        {cartoonsData.map(cartoon => {
            return (
        <div id="admin-cartoon-card" key={cartoon.id}
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
                    <label for="name_field">Name?</label>
                    <input 
            
                        id="name_field"
                        name="name"
                        value={newChange.name}
                        type="text" 
                        className="nes-input" 
                        placeholder="New name?"/>
                        
                    

                    <br/>
                    {/* description */}
                    <label for="description_field">Description?</label>
                    <input 
                
                        id="name_field"
                        name="description"
                        value={newChange.description}
                        type="text" 
                        className="nes-input" 
                        placeholder="New description?"/>
                        

                        <br/>
                        <button className="nes-btn" type="submit"> submit </button>
                    {/* end of form */}
                    </form>

                    : null
                
            }
           
            <button onClick={()=>handleDelete(cartoon.id)}        
               style={{cursor: "pointer",  marginLeft: "415px", width:"120px", fontSize:"18px",marginTop:"-67px"}}
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

export default CartoonsContainer