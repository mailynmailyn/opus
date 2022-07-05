import classes from './styles/Profile.module.scss'
import NavbarO from './assets/NavbarO.js';
import logo from './assets/record.png';
import sakamoto from './assets/sakamoto.jpg';
import cte from './assets/cte.jpg';
import ok from './assets/ok.png';
import beatles from './assets/beatles.jpg';
import strokes from './assets/isthisit.jpg';


function Profile(){
    return(
        <div>
            <NavbarO></NavbarO>
            <body className = {classes.body}>
                <div className = {classes.grid}>
                    <div className = {classes.card}>
                        <img src={logo} className = {classes.card__img} alt="logo"/>
                    </div>
                    <div>
                        <h1 className = {classes.body__title}> username </h1>
                        <button> edit profile </button>
                    </div>
                    <div>
                        <h3 className = {classes.body__stats}>stats</h3>
                        <h4 className = {classes.body__bio}># albums listened</h4>
                        <h4 className = {classes.body__bio}># albums reviewed</h4>
                    </div>
                </div>
                <h2 className = {classes.body__subtitle}> favourite albums </h2>
                <div className = {classes.secondaryGrid}>
                    <div className = {classes.genreGrid}>
                        <img src={sakamoto} className = {classes.card__img} alt="logo"/>
                        <img src={strokes} className = {classes.card__img} alt="logo"/>
                        <img src={beatles} className = {classes.card__img} alt="logo"/>
                        <img src={cte} className = {classes.card__img} alt="logo"/>
                        <img src={ok} className = {classes.card__img} alt="logo"/>
                        
                    </div>
                    <button> edit albums </button>
                </div>
            </body>
        </div>
    )
}

export default Profile;