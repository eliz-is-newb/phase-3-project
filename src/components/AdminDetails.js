import { useState, useEffect} from "react"

import { Link } from "react-router-dom";

const AdminDetails = () => {

// this page is set up for:
//    * password-protected admin details
//    * satisfying our CRUD element 
//    * Fetches: GET, POST, UPDATE, DELETE 
//    * Iterating over our data and making changes 
 

    // FETCH : GET #########################################

    // consts => -------------------------------------------
    const [gamesData, setGamesData] = useState([]) 
    const [cartoonsData, setCartoonsData] = useState([]) 
    const [quotesData, setQuotesData] = useState([]) 

    // request => ------------------------------------------

    //1
    useEffect(() => { 
        const getData = async () => { 
        let req = await fetch("http://localhost:3000/games")  
        let res = await req.json()  
        setGamesData(res)  
    } 
        getData()  
    }, [])  

    //2
    useEffect(() => { 
        const getData = async () => { 
        let req = await fetch("http://localhost:3000/cartoons")  
        let res = await req.json()  
        setQuotesData(res)  
    } 
        getData()  
    }, [])  

    //3
    useEffect(() => { 
        const getData = async () => { 
        let req = await fetch("http://localhost:3000/quotes")  
        let res = await req.json()  
        setCartoonsData(res)  
    } 
        getData()  
    }, [])  

    // ##################################################


    // FETCH : POST #####################################
    // consts -------------------------------------------
    
    const [gameFormData, setGameFormData] = useState({
        name: "", 
        description: "", 
        link: "", 
        image: ""
    })

    const [quoteFormData, setQuoteFormData] = useState({
        name: "", 
        description: "", 
        link: "", 
        link2: "",
        link3: "",
        image: ""
    })

    const [cartoonFormData, setCartoonFormData] = useState({
        quote: "",
        link: ""
    })

    // updating database ------------------------------------------
    function handleNewGameEntry(e) {
        setGameFormData(oldGameFormData => {
        return {...oldGameFormData, 
        [e.target.name]: e.target.value} 
        })
    }

    function handleNewQuoteEntry(e) {
        setQuoteFormData(oldQuoteFormData => {
        return {...oldQuoteFormData, 
        [e.target.name]: e.target.value} 
        })
    }

    function handleNewCartoonEntry(e) {
        setCartoonFormData(oldCartoonFormData => {
        return {...oldCartoonFormData, 
        [e.target.name]: e.target.value} 
        })
    }

    // requests ------------------------------------------
    function handleSubmitGameEntry(e) {
        e.preventDefault();
        fetch("http://localhost:3000/games", {  
        method: "POST", 
        headers: { 
        "Content-Type" : "application/json"
        }, 
            body: JSON.stringify(gameFormData)
        }) 
            .then(res => res.json())
            .then(data => addNewGame(data))
    }

    function handleSubmitQuoteEntry(e) {
        e.preventDefault();
        fetch("http://localhost:3000/quotes", {  
        method: "POST", 
        headers: { 
        "Content-Type" : "application/json"
        }, 
            body: JSON.stringify(quoteFormData)
        }) 
            .then(res => res.json())
            .then(data => addNewQuote(data))
    }

    function handleSubmitCartoonEntry(e) {
        e.preventDefault();
        fetch("http://localhost:3000/cartoons", { 
        method: "POST", 
        headers: { 
        "Content-Type" : "application/json"
        }, 
            body: JSON.stringify(cartoonFormData) 
        }) 
            .then(res => res.json())
            .then(data => addNewCartoon(data))
    }

    // FETCH : PATCH ################################

    // updating databases  --------------------------

    let addNewGame = (newGame) => { 
        const updateGameData = [...gamesData, newGame] 
            setGamesData(updateGameData)
    }

    let addNewQuote = (newQuote) => { 
        const updateQuotesData = [...quotesData, newQuote] 
        setQuotesData(updateQuotesData)
    }

    let addNewCartoon = (newCartoon) => { 
        const updateCartoonsData = [...cartoonsData, newCartoon] 
        setCartoonsData(updateCartoonsData)
    }

    // requests ------------------------------------ (try(s): 1)

    function updateCartoons(e) {
        e.preventDefault();
        fetch("http://localhost:3000/cartoons", {
        method: "PATCH", 
        headers: { 
        "Content-Type" : "application/json"
        }, 
            body: JSON.stringify({cartoonsData})
        }) 
            .then(res => res.json())
            .then(data => (data))
    }

    function updateQuotes(e) {
        e.preventDefault();
        fetch("http://localhost:3000/quotes", {
        method: "PATCH", 
        headers: { 
        "Content-Type" : "application/json"
        }, 
            body: JSON.stringify({
                cartoonsData
                // name: quote.quote,
                // quote: quote.link 

        }) 
        }) 
            .then(res => res.json())
            .then(data => (data))
    }

    function updateGames(e) {
        e.preventDefault();
        fetch("http://localhost:3000/games", {
        method: "PATCH", 
        headers: { 
        "Content-Type" : "application/json"
        }, 
            body: JSON.stringify({
                // name: game.link,
                // quote: game.image 
                gamesData

        }) 
        }) 
            .then(res => res.json())
            .then(data => (data))
    }

    // ######################################################

    // FETCH : DELETE ########################################

    // consts ------------------------------------
    const [refresh, setRefresh] = useState(false) 

    // requests ------------------------------------
    function gameDelete() {
        fetch(`http://localhost:3000/games/${gamesData.id}`, { 
            method: "DELETE", 
            headers: {
            "Content-Type" : "application/json" 
            }
            }) 	
            setRefresh(prevRefresh => !prevRefresh)
            } 

    function quoteDelete() {
            // Simple DELETE request with fetch
            fetch(`http://localhost:3000/games/${gamesData.id}`, { method: 'DELETE' })
                .then(() => quotesData({ status: 'Delete successful' }));
            
    function cartoonDelete() {
        fetch(`http://localhost:3000/cartoons/${cartoonsData.id}`, { 
        method: "DELETE", 
        headers: {
        "Content-Type" : "application/json" 
        }
        }) 	
        setRefresh(prevRefresh => !prevRefresh)
        } 
    // ######################################################


    // admin menu set up: 
    let openGameLibary = function(){
        document.getElementById('game-library-window').showModal()
    }

    let openCartoonLibary = function(){
        document.getElementById('cartoon-library-window').showModal()
    }

    let openQuotesLibary = function(){
        document.getElementById('quotes-library-window').showModal()
    }


    // this page should contain:
    //    * the most basic css:
    //          * iteration of data with delete button 
    //          * iteration of data with update button for the keys: 
    //                 * games => (name, desc, link, image)
    //                 * quotes => (link)
    //                 * cartoons => (name, desc, link, image)
    //          * 3 forms to add new data (for each library) 

    // crud menu set up (delete is defined above): 
    const [openCreateForm, setOpenCreateForm] = useState(false) // post
    const [openUpdateForm, setOpenUpdateForm] = useState(false) // update
    let toggleNewInput = function(){
        setOpenCreateForm(openCreateForm => !openCreateForm)
    }

    let toggleEditInput = function(){
        setOpenUpdateForm(openUpdateForm => !openUpdateForm)
    }


    return (
        <>
    {/* ############################ Admin Menu in Pop-Up ############################### */}

    <section>

            

    
    <dialog className="nes-dialog is-rounded" id="dialog-rounded" 
    style={{marginTop: "356px"}}
    >
        <form method="dialog">
        {/* Title! */}
        <p class="title">Hello Administrator... *wink* *wink*:</p>
        <br/>
        
        {/* Buttons! */}
        
        <p>"Entertaining 1950's Lobotomy Simulators"</p> 
        <p style={{fontSize:"10px"}}>(Game Library)</p>
        <br/>

        {/* 1 */}
        <button onclick={openGameLibary}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">View</button>
        <br/>

        <br/>
        <p style={{marginLeft: "170px"}}>"Mind Lube"</p> 
        <p style={{fontSize:"10px"}}>(Cartoon Libary)</p>

        <br />
        {/* 2 */}
    
        <button onclick={openCartoonLibary}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">View</button>
        <br />
        <br/>
        <p>"What I Felt Was Inspirational Today..."</p>
        <p style={{fontSize:"10px"}}>(Magic 8-Ball Library)</p>

        <br/>

        {/* 3 */}
        <button onclick={openQuotesLibary}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">View</button>
        <br/>
        <br/>
        <menu className="dialog-menu">
            <button style={{
            cursor: "pointer", 
            marginTop: "-40px",
            marginLeft: "334px",
            width: "65px",
            height:"65px"
        }}>
            <img src="../x-btn1.png"/>
            
        </button>
        </menu>
        </form>
    </dialog>
    </section>
    {/* ################################### End ########################################### */}

    {/*############################# Game Library Pop-Up ################################## */}
    <div> 
        {/* if error occurs, attempt deleting this outer div wrapper ;P */}
    <section> 
    <dialog className="nes-dialog is-rounded" id="game-library-window"
    style={{marginTop: "356px"}}
    >
        <form method="dialog">
        {/* Title! */}
        <p class="title">Sleepy?</p>
        <br/>

        {/* ---------View!-------- */}

        {/* start .map() from here -----------------------------------------------------> do all of ur dot maps please. i pulled from newest ruby thing */}
        
        {/* ------Buttons!-------- */}

        {/* post, update, delete */}
        <button onClick={toggleNewInput}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Create New!</button>


        {/* form here */}
        

            {/* ternary to display the form on pop-up/modal */}
        {openCreateForm
                    ?  <form className="nes-field" 
                    onSubmit={handleSubmitGameEntry} 
                    onChange={handleNewGameEntry}
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >


                        <br/> 
                        {/* name */}
                    <label for="name_field">Name?</label>
                    <input 
                        id="name_field"
                        // change this value
                        value={gameFormData.name}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter name"/>
                        
                    

                    <br/>
                    {/* description */}
                    <label for="description_field">Description?</label>
                    <input 
            
                        id="name_field"
                        // change this value
                        value={gameFormData.description}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter description:"/>
                        

                        <br/>
                        {/*  link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
                
                        id="name_field"
                        // change this value
                        value={gameFormData.link}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter link"/>
                    

                        <br/> 
                        {/* image */}
                    <label for="name_field">Image Src?</label>
                    <input 
                
                        id="name_field"
                        // change this value
                        value={gameFormData.image}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter img src link:"/>
                    
                    {/* end of form */}
                    </form>

                    : null
                
            }
        
        {/* form end */}

        <button onClick={toggleEditInput}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Edit!</button>
            
            {/* form here */}


            {/* ternary to display the form on pop-up/modal - change to openUpdateForm */} 
            {openUpdateForm
                    ?  <form className="nes-field" 
                    
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >
                        
                        <br/>
                        {/* link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
                    onSubmit={updateGames}
                    
                        id="name_field"
                        
                        value={updateQuotes.quote}
                        name="text" 
                        className="nes-input" 
                        placeholder="Change link"/>
                    

                
                    
                    {/* end of form */}
                    </form>

                    : null
                
            }
        


            {/* form end */}

        <button onClick={gameDelete}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Delete!</button>

        {/* end .map() from here */}
    
        <menu className="dialog-menu">
            <button style={{
            cursor: "pointer", 
            marginTop: "-40px",
            marginLeft: "334px",
            width: "65px",
            height:"65px"
        }}>
            <img src="../x-btn1.png"/>
            </button>
            </menu>
            </form>
        </dialog>
        </section>
    </div>
    {/*############################# Cartoon Library Pop-Up ################################## */}
    <div>
    <section> 
    <dialog className="nes-dialog is-rounded" id="cartoon-library-window"
    style={{marginTop: "356px"}}
    >
        <form method="dialog">
        {/* Title! */}
        <p class="title">Tired?</p>
        <br/>

        {/* ---------View!-------- */}

        {/* start .map() from here */}
        
        {/* ------Buttons!-------- */}

        {/* post, update, delete */}
        <button onClick={toggleNewInput}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Create New!</button>
    {/* form here */}
        

            {/* ternary to display the form on pop-up/modal */}
            {openCreateForm
                    ?  <form className="nes-field" 
                    onSubmit={handleSubmitCartoonEntry} 
                    onChange={handleNewCartoonEntry}
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >


                        <br/> 
                        {/* name */}
                    <label for="name_field">Name?</label>
                    <input 
            
                        id="name_field"
                        // change this value
                        value={cartoonFormData.name}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter name"/>
                        
                    

                    <br/>
                    {/* description */}
                    <label for="description_field">Description?</label>
                    <input 
                
                        id="name_field"
                        // change this value
                        value={cartoonFormData.description}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter description:"/>
                        

                        <br/>
                        {/* link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
                        id="name_field"
                        // change this value
                        value={cartoonFormData.link}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter link"/>
                    

                        <br/> 
                        {/*  image */}
                    <label for="name_field">Image Src?</label>
                    <input 
                    
                        id="name_field"
                        // change this value
                        value={cartoonFormData.image}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter img src link:"/>
                    
                    {/* end of form */}
                    </form>

                    : null
                
            }
        
        {/*------------- form end-------------- */}

        <button onClick={toggleEditInput}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Edit!</button>
            {/* ---------form here--------------- */}


            {/* ternary to display the form on pop-up/modal */}
            {openUpdateForm
                    ?  <form className="nes-field" 
                    onSubmit={updateCartoons} 
                    
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >
                        
                        <br/>
                        {/*  link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
                    
                        id="name_field"
                
                        value={updateCartoons.link}
                        type="text" 
                        className="nes-input" 
                        placeholder="Change link"/>
                    

                        <br/> 
                        {/*  image */}
                    <label for="name_field">Image Src?</label>
                    <input 
                        id="name_field"
                        
                        value={updateCartoons.image}
                        type="text" 
                        className="nes-input" 
                        placeholder="Change img src link:"/>
                    
                    {/* end of form */}
                    </form>

                    : null
                
            }
        <button onClick={cartoonDelete}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Delete!</button>

        {/* end .map() from here */}
    
        <menu className="dialog-menu">
            <button style={{
            cursor: "pointer", 
            marginTop: "-40px",
            marginLeft: "334px",
            width: "65px",
            height:"65px"
        }}>
            <img src="../x-btn1.png"/>
            </button>
            </menu>
            </form>
        </dialog>
        </section>
    </div>
    {/* /* ###################################################################################  */}


    {/*############################# Quotes Library Pop-Up ############################ */}
    <div>
    <section> 
    <dialog className="nes-dialog is-rounded" id="quotes-library-window"
    style={{marginTop: "356px"}}
    >
        <form method="dialog">
        {/* Title! */}
        <p class="title">Hungry?</p>
        <br/>

        {/* ---------View!-------- */}

        {/* start .map() from here */}
        
        {/* ------Buttons!-------- */}

        {/* post, update, delete */}
        <button onClick={toggleNewInput}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Create New!</button>

    {/* form here */}
        

            {/* ternary to display the form on pop-up/modal */}
        {openCreateForm
                    ?  <><form className="nes-field" 
                    onSubmit={handleSubmitQuoteEntry} 
                    onChange={handleNewQuoteEntry}
                
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >


                        <br/> 
                        {/* quote */}
                    <label for="name_field">Title?</label>
                    <input 
            
                        // change this value
                        value={quoteFormData.quote}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter title"/>
                        
                        <br/>
                        {/*  link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
            
                        id="name_field"
                    
                        value={quoteFormData.link}
                        type="text" 
                        className="nes-input" 
                        placeholder="enter link"/>
                        </form></> 
                    

                    : null
                
        }
        
        {/* form end */}
                    

        <button onClick={toggleEditInput}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Edit!</button>

    {/* ternary to display the form on pop-up/modal */}
    {openUpdateForm
                    ? <> 
                    <form className="nes-field" 
                    onSubmit={updateQuotes}
                    onChange={handleSubmitQuoteEntry}
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >


                    

                        <br/>
                        {/*  link */}
                    <label for="link_field">iFrame Link?</label>
                    <input 
                        id="name_field"
                    
                        value={updateQuotes.link}
                        type="text" 
                        className="nes-input" 
                        placeholder="Change link"/>
                    
                    {/* end of form */}
                    </form></>

                    : null
                
            }

        <button onClick={quoteDelete}
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">Delete!</button>

        {/* end .map() from here */}
    
        <menu className="dialog-menu">
            <button style={{
            cursor: "pointer", 
            marginTop: "-40px",
            marginLeft: "334px",
            width: "65px",
            height:"65px"
        }}>
            <img src="../x-btn1.png"/>
            </button>
            </menu>
            </form>
        </dialog>
        </section>
    </div>
    {/* ################################################################################### */}

    </>





)

} }
export default AdminDetails