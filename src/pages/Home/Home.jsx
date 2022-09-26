import React from 'react'
import {Grid, Typography} from '@mui/material'
import resumeData from '../../components/utils/resumeData'
import { color } from '@mui/system'
import './Home.css'

const Home = () => {
  return (
    <>
     {/* career objective */}
     <Grid container className='section'>
     <Grid item className='section_title' >
        <span></span>
       <Typography className='section_text_title' variant='h6' >Career Objective</Typography>
     </Grid>
     <Grid item xs={12}>
      <Typography className='about'>{resumeData.career}</Typography>
     </Grid>
   </Grid>
   {/* {Education} */}
   <Grid container className=''></Grid>
   {/* contact */}
   <Grid container className=''></Grid>
   </>
  )
}

export default Home
