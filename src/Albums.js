import {CardGroup, Card, Button} from 'react-bootstrap';
import sakamoto from './assets/sakamoto.jpg';
import cte from './assets/cte.jpg';
import ok from './assets/ok.png';
import beatles from './assets/beatles.jpg';
import strokes from './assets/isthisit.jpg';
import {Link} from 'react-router-dom';
import classes from './styles/Albums.module.scss'


const Albums = () => {
    return <CardGroup>
        <CardGroup>    
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {sakamoto} />
            <Card.Body>
                <Card.Title className = {classes.price}>Thousand Knives of Ruichi Sakamoto</Card.Title>
                <Button as= {Link} to = "/sakamoto" className= {classes.button}> About </Button>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {cte} />
            <Card.Body>
                <Card.Title className = {classes.price}>Melophobia</Card.Title>
                <Button as= {Link} to = "/sakamoto" className= {classes.button}> About </Button>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img className = {classes.card_img} variant="top" src={strokes} />
            <Card.Body>
                <Card.Title className = {classes.price}>Is This It</Card.Title>
                <Button as= {Link} to = "/sakamoto" className= {classes.button}> About </Button>
            </Card.Body>
            </Card>
        </CardGroup>
        <CardGroup>
        <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {ok} />
            <Card.Body>
            <Card.Title className = {classes.price}>OK Computer</Card.Title>
            <Button as= {Link} to = "/sakamoto" className= {classes.button}> About </Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img className = {classes.card_img} variant="top" src={beatles} />
            <Card.Body>
            <Card.Title className = {classes.price}>Abbey Road</Card.Title>
            <Button as= {Link} to = "/sakamoto" className= {classes.button}> About </Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img className = {classes.card_img} variant="top" src= {sakamoto} />
            <Card.Body>
                <Card.Title className = {classes.price}>Thousand Knives of Ruichi Sakamoto</Card.Title>
                <Button as= {Link} to = "/sakamoto" className= {classes.button}> About </Button>
            </Card.Body>
            </Card>
        </CardGroup>
    </CardGroup>
};

export default Albums;