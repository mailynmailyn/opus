import classes from './styles/French.module.scss'
import NavbarO from './assets/NavbarO.js';
import logo from './assets/record.png';
import sakamoto from './assets/sakamoto.jpg';
import cte from './assets/cte.jpg';
import ok from './assets/ok.png';
import beatles from './assets/beatles.jpg';
import strokes from './assets/isthisit.jpg';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function French(){
    return(
        <div>
            <NavbarO></NavbarO>
            <body className = {classes.body}>
                <div className = {classes.grid}>
                    <div className = {classes.card}>
                        <img src={logo} className = {classes.card__img} alt="logo"/>
                    </div>
                    <div>
                        <h1 className = {classes.body__title}> nom d'utilisateur </h1>
                        <button> modifier le profil </button>
                    </div>
                    <div>
                        <h3 className = {classes.body__stats}>stats</h3>
                        <h4 className = {classes.body__bio}># albums écoutés</h4>
                        <h4 className = {classes.body__bio}># albums critiqués</h4>
                    </div>
                </div>
                <h2 className = {classes.body__subtitle}> albums préférés</h2>
                <div className = {classes.secondaryGrid}>
                    <div className = {classes.genreGrid}>
                        <Button as= {Link} to = "/sakamoto"> 
                            <img src={sakamoto} className = {classes.card__img} alt="logo"/> 
                        </Button>
                        <Button as= {Link} to = "/sakamoto"> 
                            <img src={strokes} className = {classes.card__img} alt="logo"/>
                        </Button>
                        <Button as= {Link} to = "/sakamoto"> 
                            <img src={beatles} className = {classes.card__img} alt="logo"/>
                        </Button>
                        <Button as= {Link} to = "/sakamoto">
                            <img src={cte} className = {classes.card__img} alt="logo"/> 
                        </Button>
                        <Button as= {Link} to = "/sakamoto"> 
                            <img src={ok} className = {classes.card__img} alt="logo"/>
                        </Button>   
                        
                    </div>
                    <button> modifier les albums </button>
                </div>
            </body>
        </div>
    )
}

export default French;