import React from "react";
import { useEffect, useState} from "react";
import AdminDetails from "./AdminDetails";
import { Link } from "react-router-dom";
import './FTFY.css';
import GamesCard from "./GamesCard";

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
console.log(gamesData)
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
        image: ""
    })

    // updating database ------------------------------------------
       function addNewEntry(e) {
        console.log(e.target)
        setNewEntry(prevEntry => {
            return {...prevEntry, [e.target.name]: e.target.value}
        })
    }

    // requests ------------------------------------------
    function handleSubmit(e) {
        e.preventDefault();
        console.log("handleSubmit")
        fetch("http://localhost:3000/games", {  
        method: "POST", 
        headers: { 
        "Content-Type" : "application/json"
        }, 
            body: JSON.stringify(newEntry)
        }) 
            .then(res => res.json())
            .then(data => setGamesData([...gamesData, data]))
           
    }

    // FETCH : PATCH ################################

    // updating databases  --------------------------

    let addNewChanges = (e) => { 
        e.preventDefault()
        setNewChange(prevEntry => {
            return {...prevEntry, [e.target.name]: e.target.value}
        })
        // const updateData = [...gamesData, e.target.value] 
        //     setGamesData(updateData)
    }

    // requests ------------------------------------

    const handleUpdate = async (e,id) => {
        e.preventDefault();
        let req = fetch(`http://localhost:3000/games/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newChange),
        })
        .then(resp=> resp.json())
        .then(data=>{
            setGamesData(gamesData.filter((item)=> item.id !== data.id))
            setGamesData((current)=>[data,...current])
            // setRefresh(prevRefresh => !prevRefresh)
        })
    }


    // FETCH : DELETE ########################################
    function handleDelete(id) {
        console.log(id)
        fetch(`http://localhost:3000/games/${id}`, { 
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
    <div className="" id="games-library-window"
    style={{marginTop: "10%", marginRight: "10%", width:"700px", overflow:"auto", marginLeft: "0%", marginBottom:"50px"}}
    >
        <div method="dialog">
        {/* Title! */}
        <br/>
        <p style={{marginLeft:"105px"}}
        className="title">Update Game Info?</p>
        <br/>

        {/* ---------View!-------- */}

        
        {/* ------Buttons!-------- */}

        {/* post, update, delete */}
        <button onClick={toggleNewInput}
        style={{cursor: "pointer", marginLeft: "105px", width:"481px"}}
            className="nes-btn is-primary">Create New!</button>


        {/* form here */}
        

            {/* ternary to display the form */}
        {openCreateForm
                    ?  <form className="" 
                    onSubmit={handleSubmit} // post
                    onChange={addNewEntry}  // post
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >

<br/>
                        <br/> 
                        {/* name */}
                    <label for="name_field">Name?</label>
                    <input 
                        id="name_field"
                        // change this value
                        value={newEntry.name}
                        name="name"
                        type="text" 
                        className="nes-input" 
                        placeholder="enter name"/>
                        
                    
                        <br/> <br/>
                    {/* description */}
                    <label for="description_field">Description?</label>
                    <input 
            
                        id="name_field"
                        // change this value
                        value={newEntry.description}
                        name="description"
                        type="text" 
                        className="nes-input" 
                        placeholder="enter description:"/>
                        
                        <br/>
                        <br/>
                        {/*  link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
                
                        id="name_field"
                        // change this value
                        value={newEntry.link}
                        name="link"
                        type="text" 
                        className="nes-input" 
                        placeholder="enter link"/>
                    
                    <br/>
                        <br/> 
                        {/* image */}
                    <label for="name_field">Image Src?</label>
                    <input 
                
                        id="name_field"
                        // change this value
                        value={newEntry.image}
                        name="image"
                        type="text" 
                        className="nes-input" 
                        placeholder="enter img src link:"/>
                    
                    <br/>
                    <br/>
                    <button className="nes-btn" type="submit"> submit </button>
                    {/* end of form */}
                    </form>

                    : null
                
            }
        
        {/* form end */}

 {/* start .map() from here -----------------------------------------------------> do all of ur dot maps please. i pulled  */}
           
            {gamesData.map(game => {
            return ( 

                <>
                <GamesCard gamesData={gamesData} handleUpdate={handleUpdate} 
        newChange={newChange} handleDelete={handleDelete} addNewChanges={addNewChanges}
        game={game}/>
                </>
            )})}
        
        {/* end .map() from here */}

    </div>
    </div>
    </section>
    </div>
    
  );
    
}

export default GamesContainer;