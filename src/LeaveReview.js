import classes from './styles/LeaveReview.module.scss';
import NavbarO from './assets/NavbarO.js';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function LeaveReview(){
    return(
        <div classname= "LeaveReview">
            <NavbarO></NavbarO>
            <header className= {classes.header}>
                <h1 className= {classes.header__title}> leave review </h1>
            </header>
            <body className= {classes.body}>
                <div className= {classes.body__pfp}>
                <h1 className= {classes.header__subtitle}> choose rating </h1>
                <select name="rank" id="rank">
                    <option value="rank1">1</option>
                    <option value="rank1">2</option>
                    <option value="rank1">3</option>
                    <option value="rank1">4</option>
                    <option value="rank1">5</option>
                    <option value="rank1">6</option>
                    <option value="rank1">7</option>
                    <option value="rank1">8</option>
                    <option value="rank1">9</option>
                    <option value="rank1">10</option>
                </select>
                </div>
                <div className= {classes.body__bio}>
                    <form>
                        <textarea name="bio" rows="10" cols="50">
                        Leave review! Let us know how this album made you feel.
                        </textarea>
                    </form>
                </div>
                <div>
                    <Button as= {Link} to = "/sakamoto" className={classes.body__button}> save changes
                    </Button>
                </div>
            </body>
        </div>
    )
}

export default LeaveReview;