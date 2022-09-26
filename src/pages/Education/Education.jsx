import React from 'react'
import { Grid, Typography } from '@mui/material'
import resumeData from '../../components/utils/resumeData'
import CustomTimeline, {CustomTimelineSeparator} from "../../components/Timeline/Timeline"
import SchoolIcon from '@mui/icons-material/School';
import { TimelineConnector, TimelineSeparator } from '@mui/lab';
import TimelineItem from '@mui/lab/TimelineItem';


import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './Education.css'




const Education = () => {
  return (
    <div container className='section'>
    
    {/* <Grid item xs={12}> */}
    <div>
      <div container className='resume_timeline'>
        <div item sm={12} md={6}>
        <CustomTimeline  title='Education History' icon={<SchoolIcon />}>
          {resumeData.experience.map((experience) => (
            <TimelineItem>
              <TimelineSeparator className='separator_padding'>
                <TimelineDot  className='timeline_dot' />
              <TimelineConnector className='time_connect' />

              </TimelineSeparator>
              <TimelineContent>
                <Typography className='timeline_title'>{experience.title}</Typography>
                
                <Typography className='timeline_college'>{experience.college}</Typography>
                <Typography className='timeline_date'>{experience.date}</Typography>
                <Typography className='timeline_aggregation'>{experience.aggregation}</Typography>
              </TimelineContent>
            </TimelineItem>


          ))}
        </CustomTimeline>
        </div>
      </div>
      </div>

    
    </div>
  
  )
}

export default Education

