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
          </body>

      </Container>
    </div>
  );
}

export default About;