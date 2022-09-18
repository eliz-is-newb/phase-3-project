import React, {useState} from "react";
import AdminDetails from "./AdminDetails";

const InputForAdmin = ({adminInput, setAdminInput}) => {

    let handleInputChange = function (e) {
        setAdminInput(e.target.value)
        
    }



    let checkIfTrue = function (e) {
        e.preventDefault()
        if (adminInput === "unicorns") {
            document.getElementById('admin-main-menu').showModal()
        } else (document.getElementById("admin-input-div").placeholder = "wrong password")
                setAdminInput(e.target.reset()) }


    




return (

    <div>
    {/* ternary for display on mouse click */}
    <form id="admin-input-div" className="nes-field" 
    onSubmit={checkIfTrue}
    onChange={handleInputChange}
    style={{position: "absolute", zIndex: "90", top:"732px"}}>
    <label for="name_field"></label>
    <input 
    style={{ 
        backgroundColor: "black",
        color: "white" ,
        width: "105px",
        boxShadow: "0 0.1em white, 0 -0.1em white, 0.1em 0 white, -0.1em 0 white", 
        paddingTop:"7px",
        height: "33px",
        fontSize: "13px", 
        textAlign: "center",  
        marginLeft:"575px",
        cursor: "pointer",
        }} 

        value={adminInput}
        type="text" 
        className="nes-input" 
        placeholder="password?"/>
    </form>



            {/* Admin Details Pop-up */}
            <AdminDetails />
            <div id="input-container">
            
            </div>

    </div>

    




)}
export default InputForAdmin