import React from 'react';


import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default{
    Name:"Roopali",
    Title:"Trainee Software Engineer",
    Birthday:"18th May 2001",
    Email:"roopalipanake@gmail.com",


    Socials:{
        LinkedIn:{
            link:"http://www.linkedin.com",
            text:"My linkedIn",
            icon:<LinkedInIcon />,


        },
        Instagram:{
            link:"http://www.instagram.com",
            text:"My instagram",
            icon:<InstagramIcon />,
        },
    },
    projects:{
        TodoApp:{
            link:"https://github.com/Roopalidev/Todo.git",
            title:"ToDo App",
            text:"ToDo App using Context API",
          


        },
        Resume:{
            link:"http://www.github.com",
            text:"Resume Task",
            
        },
    },
    
    career:
        "Work with company where my skills and knowledge can be efficiently used  and improved towards the organization's success. \n I ensure to implement my dedication adaptability to grow along with the company.",
    experience:[
        {
            title:'Bachelor of Engineering(Computer Science and Engineering)',
            date:'2018-22',
            college:'Hirasugar Institute of Technology,Nidasoshi',
            aggregation:'9.2 CGPA',
        },
        {
            title:'PUC',
            date:'2016-18',
            college:'Basaprabhu core PU college,chikodi',
            aggregation:'86%',
        },
        {
            title:'SSLC',
            date:2016,
            college:'Sadalga Highschool Sadalga',
            aggregation:'96.64%'
        }
        
    ],
   
    Contact:[
        {
            Email:'roopalipanake@gmail.com',
            PhoneNo:'9008900736',
            Address:"Address: A/P:Sadalga,  Tq:chikodi, Dist:Belgavi, PinCode:591236"

        }
    ]

    

};
