
import logo from './assets/record.png'
import classes from './styles/Login.module.scss'
import NavbarO from './assets/NavbarO.js'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

function LoginPage() {
  return (
    <div>
    <div className={classes.gridContainer}>
      <div className = {classes.gridContainer__login}> 
        <img src={logo} className={classes.gridContainer__login__logo} alt="logo" />
        <h1 className={classes.gridContainer__login__title}>log in</h1>
        <form className={classes.gridContainer__login__form}>
          <input type="text" className={classes.gridContainer__login__form__input} placeholder="username or email"></input>
          <input type="text" className={classes.gridContainer__login__form__input} placeholder="password"></input>
          <Button as= {Link} to = "/profile"> continue </Button>
        </form>
        <br></br>
        <Button as= {Link} to = "/signup"> no account? click here to sign up! </Button>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;