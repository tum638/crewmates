
import React, { useEffect, useState } from "react";
import CrewMate from "../components/Crewmate";
import { supabase } from "../client";

const DisplayCrewmates = () => {
    const [crewmates, setCrewmates] = useState([{}]);
    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data } = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: true })
            console.log(data)
            setCrewmates(data)
        }
        fetchCrewmates().catch(console.log);
    }, [])
    function reloadCrew() {
         const fetchCrewmates = async () => {
            const { data } = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: true })
            console.log(data)
            setCrewmates(data)
        }
        fetchCrewmates().catch(console.log);
    }
    return (
        <div>
             <h1>Crewmate Gallery</h1>
            <div className="crewmates-display">
           
            {
            crewmates? crewmates.map((crewmate, idx) => {
                return <CrewMate key={idx} crewmate={crewmate} reloadCrew={reloadCrew} />
       }) : "Loading..."
            }
        </div>
        </div>
       
    
   )
}

export default DisplayCrewmates;