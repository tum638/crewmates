import React, { useState } from "react";
import { TextField } from "@mui/material";

const SpeedEntry = ({ handleParams, setChange }) => {
    const [speed, setSpeed] = useState(0);
    return (
        <div className="speed-container rounded">
            <h1>Speed</h1>
            <TextField
                sx={{backgroundColor:"white", borderRadius: 2, }}
                label="Speed"
                id="outlined-size-small"
                placeholder="Enter speed"
                size="small"
                type="number"
                name="speed"
                value={speed}
                onChange={(e) => {
                    setSpeed(e.target.value);
                    setChange(speed)
                    handleParams(e.target);
                }
                }
            />
        </div>
    ) 
}
export default SpeedEntry;