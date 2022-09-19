import React from "react";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

function CartoonsContainer({  }) {

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
        image: ""
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
            .then(data => newEntry(data))
            console.log("handleSubmit")
    }

    // FETCH : PATCH ################################

    // updating databases  --------------------------

    let addNewChanges = (newChange) => { 
        newChange.preventDefault()
        const updateData = [...cartoonsData, newChange] 
            setCartoonsData(updateData)
    }

    // requests ------------------------------------

    const handleUpdate = async () => {
        let req = fetch(`http://localhost:3000/cartoons/${cartoonsData.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "",
                description: ""
            }),
        })
    }


    // FETCH : DELETE ########################################
    function handleDelete() {
        fetch(`http://localhost:3000/cartoons/${cartoonsData.id}`, { 
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
    <div className="nes-dialog is-rounded" id="cartoons-library-window"
    style={{marginTop: "10%", marginRight: "40%", overflow:"auto", marginLeft: "10%", marginBottom:"500px"}}
    >
        <form method="dialog">
        {/* Title! */}
        <p class="title">Update Cartoon Info?</p>
        <br/>

        {/* ---------View!-------- */}

        {/* start .map() from here */}
        
        {/* ------Buttons!-------- */}

        {/* post, update, delete */}
        <button onClick={toggleNewInput}
        style={{cursor: "pointer", marginLeft: "11px", width:"481px"}}
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


                        <br/> 
                        {/* name */}
                    <label for="name_field">Name?</label>
                    <input 
            
                        id="name_field"
                        // change this value
                        value={newEntry.name}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter name"/>
                        
                    

                    <br/>
                    {/* description */}
                    <label for="description_field">Description?</label>
                    <input 
                
                        id="name_field"
                        // change this value
                        value={newEntry.description}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter description:"/>
                        

                        <br/>
                        {/* link */}
                    
                    <label for="link_field">iFrame Link?</label>
                    <input 
                        id="name_field"
                        // change this value
                        value={newEntry.link}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter link"/>
                    

                        <br/> 
                        {/*  image */}
                    <label for="name_field">Image Src?</label>
                    <input 
                    
                        id="name_field"
                        // change this value
                        value={newEntry.image}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter img src link:"/>
                    
                    {/* end of form */}
                    <br/>
                    <br/>
                    </form>
                    

                    : null
                
            }
         
        
        {/*------------- form end-------------- */}

        {cartoonsData.map(cartoon => {
            return (
        <div id="admin-cartoon-card" key={cartoon.id}>
                    <br/>
                    <br/>
                {/* cartoon img and cartoon name */}
                <img src={cartoon.image} alt="game image"/>
                <p>{cartoon.name}</p>

        <button onClick={toggleEditInput}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Edit!</button>
            {/* ---------form here--------------- */}


            {/* ternary to display the form on pop-up/modal */}
            {openUpdateForm
                    ?  <form className="nes-field" 
                    onChange={addNewChanges} //patch
                    onSubmit={handleUpdate} //patch

                    
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >
                        
                        <br/> 
                        {/* name */}
                    <label for="name_field">Name?</label>
                    <input 
            
                        id="name_field"
                        
                        value=""
                        type="text" 
                        className="nes-input" 
                        placeholder="enter name"/>
                        
                    

                    <br/>
                    {/* description */}
                    <label for="description_field">Description?</label>
                    <input 
                
                        id="name_field"
                    
                        value=""
                        type="text" 
                        className="nes-input" 
                        placeholder="enter description:"/>
                        

                        <br/>
                    
                    {/* end of form */}
                    </form>

                    : null
                
            }
            <br/>
            <br/>
        <button onClick={handleDelete}
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

export default CartoonsContainer;