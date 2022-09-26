import { Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import resumeData from '../utils/resumeData'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
       <Typography className='footer_name'>{resumeData.Name}</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright'>Design and Developed by<a href='/' target='_blank'>TechPundits Info Systems.</a>
        
        </Typography>
      </div>
    </div>
  )
}

export default Footer;
