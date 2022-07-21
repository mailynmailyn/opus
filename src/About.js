import NavbarO from './assets/NavbarO.js';
import classes from './styles/About.module.scss';
import record from './assets/record.png';
import {Container} from 'react-bootstrap';

function About() {
  return (
    <div>
      <NavbarO></NavbarO>
      <Container>
          <header className = {classes.header}>
            <img className = {classes.img} src = {record}></img>  
            <h2 className = {classes.header__title}>about us</h2>          
          </header>
          <body className = {classes.body}>
              <p> opus is a site for music lovers. discover and discuss music today! </p>
              <br></br>
              <h4 className = {classes.header__subtitle}> contact us! </h4>
              <p> having issues with the site? want to request a page for a currently non existing album? send an 
                email to:
              </p>
              <p  className = {classes.header__email}>opus_help@gmail.com</p>
          </body>

      </Container>
    </div>
  );
}

export default About;