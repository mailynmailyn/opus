import album from './assets/sakamoto.jpg'
import classes from './styles/SakamotoReview.module.scss'
import NavbarO from './assets/NavbarO.js'
import {CardGroup, Card, Button} from 'react-bootstrap';
import record from './assets/record.png';

function SakamotoReviews() {
    return (
        <div>
        <NavbarO></NavbarO>
        <body className = {classes.body}>
            <div className = {classes.body}>
            <div className = {classes.grid}>
                <div className = {classes.card}>
                    <img src={album} className = {classes.card__img} alt="album cover"/>
                    <br></br>
                    <h2 className = {classes.body__subtitle}> Overall Rating: 10/10</h2>
                </div>
                <div>
                    <h1 className = {classes.body__title}> REVIEWS: Thousand Knives of Ryuichi Sakamoto </h1>
                    <h2 className = {classes.body__subtitle}> Ryuichi Sakamoto </h2>
                    <br></br>
                    <div className = {classes.scrollGrid}>
                        <Card>
                            <Card.Body>
                            <Card.Title className = {classes.price}>user</Card.Title>
                            <Card.Text>
                                This was a great album! I really liked all the tracks.
                            </Card.Text>
                            <Card.Text>
                                Rating: 10/10
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title className = {classes.price}>user</Card.Title>
                            <Card.Text>
                                This was a great album! I really liked all the tracks.
                            </Card.Text>
                            <Card.Text>
                                Rating: 10/10
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title className = {classes.price}>user</Card.Title>
                            <Card.Text>
                                This was a great album! I really liked all the tracks.
                            </Card.Text>
                            <Card.Text>
                                Rating: 10/10
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title className = {classes.price}>user</Card.Title>
                            <Card.Text>
                                This was a great album! I really liked all the tracks.
                            </Card.Text>
                            <Card.Text>
                                Rating: 10/10
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title className = {classes.price}>user</Card.Title>
                            <Card.Text>
                                This was a great album! I really liked all the tracks.
                            </Card.Text>
                            <Card.Text>
                                Rating: 10/10
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title className = {classes.price}>user</Card.Title>
                            <Card.Text>
                                This was a great album! I really liked all the tracks.
                            </Card.Text>
                            <Card.Text>
                                Rating: 10/10
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title className = {classes.price}>user</Card.Title>
                            <Card.Text>
                                This was a great album! I really liked all the tracks.
                            </Card.Text>
                            <Card.Text>
                                Rating: 10/10
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </div>
                </div>
            </div>
            </div>
            
        </body>
    </div>
    );
  }
  
  export default SakamotoReviews;