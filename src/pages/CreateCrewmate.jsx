import React, { useState } from "react";
import NameEntry from "../components/NameEntry";
import ColorEntry from "../components/ColorEntry";
import SpeedEntry from "../components/SpeedEntry";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

const CreateCrewmate = () => {
    const [crewmate, setCrewmate] = useState({name: "", speed: 0, color: "" });
    const [change, setChange] = useState("");
    const navigateTo = useNavigate();
      const handleParams = (target) => {
        if (target?.name === "name") {
            handleName(target.value);
        }
        else if (target?.name === "speed") {
            handleSpeed(target.value);
        }
        else if (target?.name === "color") {
            handleColor(target.value);
        }
        } 
    useState(() => {
        handleParams();
    }, [change])
   
    const handleColor = (color) => {
        let oldData = crewmate;
        oldData.color = color;
        setCrewmate(oldData) 
        }

      const handleSpeed = (speed) => {
        let oldData = crewmate;
        oldData.speed = speed;
        setCrewmate(oldData)  
    } 
    
    const handleName = (name) => {
        let oldData = crewmate;
        oldData.name = name;
        setCrewmate(oldData)
    }
    const submitCrewmate = async (event) => {
        event.preventDefault();
        await supabase
            .from("Crewmates")
            .insert(crewmate)
            .select();
      
        navigateTo("/");
   } 

      

    return (
        <div>
            <h1>Create a new Crewmate</h1>
            
        <div className="create-crewmate-container">
                <NameEntry setChange={setChange} handleParams={handleParams} />
                <SpeedEntry setChange={setChange}  handleParams={handleParams} />
                <ColorEntry setChange={setChange} handleParams={handleParams} />
            <div className="button-container rounded" onClick={submitCrewmate}>
                <h1 className="button-text">
                    Create Crewmate     
                </h1>
            </div>
            
        </div>
        </div>
        
    )
}
export default CreateCrewmate;