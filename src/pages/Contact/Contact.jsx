import React from 'react'
import {Grid, Typography} from '@mui/material'
import resumeData from '../../components/utils/resumeData'
import TimelineContent from '@mui/lab/TimelineContent';
import './Contact.css'

const Contact = () => {
  return (
    
    <Grid container className='section'>
    <Grid item className='section_title' >
       <span></span>
      <Typography className='section_text_title' variant='h6' >Contact Us</Typography>
      
    </Grid>
    {resumeData.Contact.map((Contact) => (
    <Grid item xs={12} className='contact_info'>
    
                <Typography><span className='contact_email'>Email:</span>{Contact.Email}</Typography>
                
                <Typography style={{marginTop:"10px"}}><span style={{fontWeight:'bold'}}>PhoneNo:</span>{Contact.PhoneNo}</Typography>
                <Typography style={{marginTop:"10px"}}><span  style={{fontWeight:'bold'}}>Address:</span>{Contact.Address}</Typography>
 
         
    </Grid>
     ))} 
     <div className='icon_design'>
        {Object.keys(resumeData.Socials).map((key) => ( 
          <a href={resumeData.Socials[key].link} target="_blank">
            {resumeData.Socials[key].icon} 
            </a>
            ))}
      </div>  
  </Grid>
  )
}

export default Contact;

