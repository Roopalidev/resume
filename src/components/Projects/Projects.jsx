import React from 'react'
import { Grid, Typography } from '@mui/material'
import resumeData from '../../components/utils/resumeData'
import CustomTimeline, {CustomTimelineSeparator} from "../../components/Timeline/Timeline"
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { TimelineConnector, TimelineSeparator } from '@mui/lab';
import TimelineItem from '@mui/lab/TimelineItem';
import './Project.css'

import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const CustomTimelineItem = ({title,text,link}) => (
  <TimelineItem>
         
        <CustomTimelineSeparator />
       
      
        <TimelineContent className='timeline_content'>
        
        {link ? (
        <Typography className='timelineitem_text'>
            <span>{title}:</span>
            {""}
        <a href={link} target="_blank">
            {text}
            </a>
            </Typography>
            ) : (
            <Typography className='timelineitem_text'><span>{title}:</span>{text}
            </Typography>
            ) }
        </TimelineContent>
        
       
    </TimelineItem>
)
const Projects = () => {
  return (
    // <div container className='section'>
    
    // {/* <Grid item xs={12}> */}
    // <div>
    //   <div container className='resume_timeline'>
    //     <div item sm={12} md={6}>
    //     <CustomTimeline  title='Projects' icon={<HistoryEduIcon />}>
    //       {resumeData.projects.map((projects) => (
    //         <TimelineItem>
    //           <TimelineSeparator className='separator_padding'>
    //             <TimelineDot  className='timeline_dot' />
    //           <TimelineConnector className='time_connect' />

    //           </TimelineSeparator>
    //           <TimelineContent>
                
    //           <Typography className='timeline_title'>{projects.link}</Typography>
    //             <Typography className='timeline_title'>{projects.title}</Typography>
    //             <Typography className='timeline_college'>{projects.company}</Typography>
    //             <Typography className='timeline_college'>{projects.description}</Typography>
               
                
    //           </TimelineContent>
    //         </TimelineItem>


    //       ))}
    //     </CustomTimeline>
    //     </div>
    //   </div>
    //   </div>

    
    // </div>
    <div className='profile_information1'>
            <CustomTimeline icon={<HistoryEduIcon />} title='React Projects' >
              
        
             {Object.keys(resumeData.projects).map((key) => (
              
             <CustomTimelineItem title={key} text={resumeData.projects[key].text} link={resumeData.projects[key].link} />
             ))}
        
             </CustomTimeline>
             </div>
  
  )
}

 

export default Projects
