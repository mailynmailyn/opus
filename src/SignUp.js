import logo from './assets/record.png'
import classes from './styles/SignUp.module.scss'
import NavbarO from './assets/NavbarO'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function SignUp() {
  return (
    <div>
    <div className={classes.gridContainer}>
      <div className = {classes.gridContainer__login}> 
        <img src={logo} className={classes.gridContainer__login__logo} alt="logo" />
        <h1 className={classes.gridContainer__login__title}>sign up</h1>
        <form className={classes.gridContainer__login__form}>
          <input type="text" className={classes.gridContainer__login__form__input} placeholder="username"></input>
          <input type="text" className={classes.gridContainer__login__form__input} placeholder="email"></input>
          <input type="text" className={classes.gridContainer__login__form__input} placeholder="password"></input>
          <Button as= {Link} to = "/profile"> register </Button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SignUp;