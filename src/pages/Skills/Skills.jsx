
import React from 'react'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import './Skills.css'





const Skills = () => {
  return (
   <div>
    <div>
    <Typography style={{marginTop:"50px",fontWeight:"bold",fontSize:"20px"}}>HTML</Typography>
    <Typography className='circle_icon'>
    <CircleIcon style={{color:"#ffc500",marginRight:"40px",fontWeight:"bold",fontSize:"20px"}}/>
    <CircleIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}} />
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    </Typography>
    </div>
    <div>
    <Typography style={{marginTop:"50px",fontWeight:"bold",fontSize:"20px"}}>CSS</Typography>
    <Typography>
    <CircleIcon style={{color:"#ffc500",marginRight:"40px"}} />
    <CircleIcon  style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon  style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    </Typography>
    </div>
    <div>
    <Typography style={{marginTop:"50px",fontWeight:"bold",fontSize:"20px"}}>Javascript</Typography>
    <Typography>
    <CircleIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    </Typography>
    </div>
    <div>
    <Typography style={{marginTop:"50px",fontWeight:"bold",fontSize:"20px"}}>React</Typography>
    <Typography>
    <CircleIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    <CircleOutlinedIcon style={{color:"#ffc500",marginRight:"40px"}}/>
    </Typography>
    </div>

</div>


    
   
  )
}

export default Skills;
