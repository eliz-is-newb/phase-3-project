import React from "react";
import { useEffect, useState} from "react";
import AdminDetails from "./AdminDetails";
import { Link } from "react-router-dom";

function GamesContainer({}) {

 // FETCH : GET #########################################

    // consts => -------------------------------------------
    const [gamesData, setGamesData] = useState([]) 
    const [refresh, setRefresh] = useState(false)

    // requests => -------------------------------------------
    useEffect(() => { 
        const getData = async () => { 
        let req = await fetch("http://localhost:3000/games")  
        let res = await req.json()  
        setGamesData(res)  
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
        fetch("http://localhost:3000/games", {  
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

    let addNewChanges = (e) => { 
        e.preventDefault()
        const updateData = [...gamesData, e.target.value] 
            setGamesData(updateData)
    }

    // requests ------------------------------------

    const handleUpdate = async () => {
        let req = fetch(`http://localhost:3000/games/${gamesData.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "",
                image: ""
            }),
        })
    }


    // FETCH : DELETE ########################################
    function handleDelete() {
        fetch(`http://localhost:3000/games/${gamesData.id}`, { 
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
    <div> 

    <section> 
    <div className="nes-dialog is-rounded" id="games-library-window"
    style={{marginTop: "10%", marginRight: "40%", overflow:"auto", marginLeft: "10%", marginBottom:"500px"}}
    >
        <form method="dialog">
        {/* Title! */}
        <p class="title">Update Game Info?</p>
        <br/>

        {/* ---------View!-------- */}

        
        {/* ------Buttons!-------- */}

        {/* post, update, delete */}
        <button onClick={toggleNewInput}
        style={{cursor: "pointer", marginLeft: "11px", width:"481px"}}
            className="nes-btn">Create New!</button>


        {/* form here */}
        

            {/* ternary to display the form */}
        {openCreateForm
                    ?  <form className="nes-field" 
                    onSubmit={handleSubmit} // post
                    onChange={addNewEntry}  // post
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
                        {/*  link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
                
                        id="name_field"
                        // change this value
                        value={newEntry.link}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter link"/>
                    

                        <br/> 
                        {/* image */}
                    <label for="name_field">Image Src?</label>
                    <input 
                
                        id="name_field"
                        // change this value
                        value={newEntry.image}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter img src link:"/>
                    
                    {/* end of form */}
                    </form>

                    : null
                
            }
        
        {/* form end */}

 {/* start .map() from here -----------------------------------------------------> do all of ur dot maps please. i pulled  */}
        {gamesData.map(game => {
            return ( 
        <div id="admin-game-card" key={game.id} 
        style={{overflow:"scroll"}}
        >
                    <br/>
                    <br/>
                {/* game img and game name */}
                
                <img src={game.image} alt="game image"/>
                <p>{game.name}</p>

        <button onClick={toggleEditInput}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Edit!</button>
            
            {/* form here */}


            {/* ternary to display the form on pop-up/modal - change to openUpdateForm */} 
            {openUpdateForm
                    ?  <form className="nes-field" 
                    onSubmit={handleUpdate} //patch
                    onChange={addNewChanges} //patch
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >
                        
                        
                        <br/>
                        {/* Name */}
                    <label for="link_field">Name?</label>
                    <input 
                    
                    
                        id="name_field"
                        
                        value={addNewChanges}
                        type="text" 
                        className="nes-input" 
                        placeholder="New name?"/>  
                         <br/> 
                
                        {/*  image */}

                    <label for="name_field">Image Src?</label>
                    <input 
                        id="name_field"
                        
                        value={addNewChanges}
                        type="text" 
                        className="nes-input" 
                        placeholder="Change img src link:"/>
                    

                
                    
                    {/* end of form */}
                    </form>

                    : null
                
            }
        


            {/* form end */}
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

export default GamesContainer;