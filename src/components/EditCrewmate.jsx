import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { supabase } from "../client";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: "black"
};

export default function EditCrewmate({open ,id , handleClose, reloadCrew}) {
const [crewmateEdit, setCrewmateEdit] = useState({name: "" , speed: 0, color: ""})
  const handleEdit = async (e) => {
    e.preventDefault();
      let something =   await supabase
      .from("Crewmates")
      .update(crewmateEdit)
      .eq("id", id)
    console.log(something)
    await handleClose();
    await reloadCrew();
    
}
const colors = [
  {
    value: 'green',
    label: 'Green',
  },
  {
    value: 'yellow',
    label: 'Yellow',
  },
  {
    value: 'purple',
    label: 'Purple',
  },
  {
    value: 'red',
    label: 'Red',
  },
  {
    value: 'blue',
    label: 'Blue',
  },
  {
    value: 'orange',
    label: 'Orange',
  },
];
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography></Typography>
          <ul className="edit-list">
            <li className="edit-list-item"><h2 className="edit-header">Name</h2> <span><TextField
              onChange={(e) => {
                  let crewmate = crewmateEdit;
                  crewmate.name = e.target.value;
                  setCrewmateEdit(crewmate)

                }}  sx={{ width: "11em" }} id="outlined-basic" variant="outlined" /></span></li>
            <li className="edit-list-item"><h2 className="edit-header">Color</h2> <span>
              <TextField
          id="outlined-select-currency"
          select
          label="Select"
                sx={{ width: "11em" }}
                onChange={(e) => {
                  let crewmate = crewmateEdit;
                  crewmate.color = e.target.value;
                  setCrewmateEdit(crewmate)

                }}
        >
          {colors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField></span></li>
            <li className="edit-list-item"><h2 className="edit-header">Speed</h2> <span><TextField
              onChange={(e) => {
                  let crewmate = crewmateEdit;
                  crewmate.speed = e.target.value;
                  setCrewmateEdit(crewmate)

                }}  sx={{ width: "11em" }} type="number" id="outlined-basic" variant="outlined" /></span></li>
          </ul>

            <Button size="large" sx={{marginLeft:"auto", marginRight:"auto", backgroundColor:"black"}} variant="contained" onClick={handleEdit}>Submit</Button>

          
        </Box>
        
      </Modal>
    </div>
  );
}
