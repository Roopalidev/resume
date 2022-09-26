import { Typography } from '@mui/material';
import './Profile.css'
import React from 'react'
import CustomTimeline, {CustomTimelineSeparator} from "../Timeline/Timeline"
import resumeData from '../utils/resumeData';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { TimelineConnector, TimelineContent, TimelineItem } from '@mui/lab';
import CustomButton from '../Button/Button';
import GetAppIcon from '@mui/icons-material/GetAppRounded';
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

const Profile = () => {
    return (
        <div className='profile container-shadow'>
            <div className='profile_name'>
                <Typography className="name">{resumeData.Name}</Typography>
                <Typography className="title">{resumeData.Title}</Typography>
            </div>
           <figure className='profile_image'>
            <img src={require('../../assets/images/roopsss.jpeg')} />
           </figure>
           <div className='profile_information'>
            <CustomTimeline icon={<PersonOutlineIcon />}>
              
             <CustomTimelineItem title="Name" text={resumeData.Name} />
             
             <CustomTimelineItem title="Title" text={resumeData.Title} />
             <CustomTimelineItem title="Birthday" text={resumeData.Birthday} />

              
             <CustomTimelineItem title="Email" text={resumeData.Email} />
             {Object.keys(resumeData.Socials).map((key) => (
             <CustomTimelineItem title={key} text={resumeData.Socials[key].text} link={resumeData.Socials[key].link} />
             ))}
             </CustomTimeline>
             <div>
              <a href="https://docs.google.com/document/d/1n0IqjxgH6nwYUF9Ok_PpT_9yH3Ryeqy4TKNKMdgiq3k/edit?usp=sharing" style={{textDecoration:'None'}} target='_blank'>
             <CustomButton className='button_container' text={"See My Resume"}  />
             </a>
            </div>
           </div>
        </div>
    )
}
export default Profile;


