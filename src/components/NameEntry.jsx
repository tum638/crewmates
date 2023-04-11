import React, { useState } from "react";
import { TextField } from "@mui/material";

const NameEntry = ({ handleParams, setChange }) => {
    const [name, setName] = useState("")
    return (
    <div className="name-container rounded">
        <h1>Name</h1>
            <TextField
                sx={{backgroundColor:"white", borderRadius: 2,}}
                label="Name"
                id="outlined-size-small"
                placeholder="Enter name"
                name="name"
                size="small"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    setChange(name)
                    handleParams(e.target);
                }}
            />
    </div>
    )
   
}

export default NameEntry