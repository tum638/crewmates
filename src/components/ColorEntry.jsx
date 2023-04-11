import React, {useState} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ColorEntry = ({ handleParams, setChange}) => {
    const [color, setColor] = useState("");
    return (
        <div className="color-container rounded">
            <h1>Color</h1>

            <FormControl>

      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
                    name="color"
                    value={color}  

                    onChange={(e) => {
                        setColor(e.target.value);
                        setChange(color);
                        handleParams(e.target);
                    }
                    }       
      >
        <FormControlLabel  value="blue" control={<Radio  sx={{
    color: "blue",
    '&.Mui-checked': {
      color: "blue",
    },
  }}/>} label="Blue" />
                    <FormControlLabel  value="orange" control={<Radio
                        sx={{
    color: "orange",
    '&.Mui-checked': {
      color: "orange",
    },
  }}
        />} label="Orange" />
                    <FormControlLabel  value="purple" control={<Radio
        sx={{
    color: "purple",
    '&.Mui-checked': {
      color: "purple",
    },
  }}            />} label="Purple" />
                    <FormControlLabel  value="red" control={<Radio
                sx={{
    color: "red",
    '&.Mui-checked': {
      color: "red",
    },
  }}/>} label="Red" />
                    <FormControlLabel  value="green" control={<Radio
        sx={{
    color: "green",
    '&.Mui-checked': {
      color: "green",
    },
  }}            />} label="Green" />
                    <FormControlLabel  value="yellow" control={<Radio
        sx={{
    color: "yellow",
    '&.Mui-checked': {
      color: "yellow",
    },
  }}            />} label="Yellow" />
      </RadioGroup>
    </FormControl>
        </div>
    )
}

export default ColorEntry;