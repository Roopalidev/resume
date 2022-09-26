
import './App.css';
import { Container , Grid } from '@mui/material'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Education from './pages/Education/Education'
import Home from './pages/Home/Home'
import Projects from './components/Projects/Projects';
import Skills from './pages/Skills/Skills'
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Contact from './pages/Contact/Contact'
function App() {

  return (
    <Container className={'top_60'}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} >
          <Profile />
        </Grid>
        <Grid item xs >
        
          <Router>
          <Header />
          <div className='main-content container_shadow'>
          
         
            <Routes>
             <Route path="/Home" element={<Home />} />
           
            <Route path="/Education" element={<Education/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>
          </div>
          <Footer />
          </Router>
         
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
