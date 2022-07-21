import album from './assets/sakamoto.jpg'
import classes from './styles/Sakamoto.module.scss'
import NavbarO from './assets/NavbarO.js'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Sakamoto() {
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
                    <h1 className = {classes.body__title}> Thousand Knives of Ryuichi Sakamoto </h1>
                    <h2 className = {classes.body__subtitle}> Ryuichi Sakamoto </h2>
                    <br></br>
                    <h3 className = {classes.body__bio}>Sakamoto released his first solo album Thousand Knives of Ryūichi Sakamoto in mid-1978 with the help of Hideki Matsutake—Hosono also contributed to the song "Thousand Knives". The album experimented with different styles, such as "Thousand Knives" and "The End of Asia"—in which electronic music was fused with traditional Japanese music—while "Grasshoppers" is a more minimalistic piano song. The album was recorded from April to July 1978 with a variety of electronic musical instruments. </h3>
                    <div className = {classes.buttonGrid}>
                        <Button as= {Link} to = "/sakamotoreviews"> see reviews </Button>
                        <Button as= {Link} to = "/leavereview"> leave a review </Button>
                        <Button as= {Link} to = "/profile"> add to favourites </Button>
                    </div>
                </div>
            </div>
            </div>
            
        </body>
    </div>
    );
  }
  
  export default Sakamoto;