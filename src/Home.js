import record from './assets/record.png'
import classes from './styles/Home.module.scss'
import NavbarO from './assets/NavbarO.js'
import Albums from './Albums'

function Home (){
    return(
        <div>
            <NavbarO></NavbarO>
            <header className= {classes.header}>
                <img src={record} className= {classes.header__img} alt="logo"/>
                <h1 className= {classes.header__title}> welcome user! search for albums! </h1>
                <img src={record} className= {classes.header__img} alt="logo"/>
            </header>
            <body className = {classes.body}>
                <div>
                    <input className = {classes.body__search} type="text" placeholder="Search.."></input> 
                </div>
                <div>
                    <h1 className= {classes.header__title}> sort by ranking: </h1>
                    <input type="checkbox" id="0" value="0"></input>
                    <label for="0"> 0 </label>
                    <input type="checkbox" id="1" value="1"></input>
                    <label for="1"> 1</label>
                    <input type="checkbox" id="2" value="2"></input>
                    <label for="2"> 2</label>
                    <input type="checkbox" id="3" value="3"></input>
                    <label for="3"> 3</label>
                    <input type="checkbox" id="4" value="4"></input>
                    <label for="4"> 4</label>
                    <input type="checkbox" id="5" value="5"></input>
                    <label for="5"> 5</label>
                    <input type="checkbox" id="6" value="6"></input>
                    <label for="6"> 6</label>
                    <input type="checkbox" id="7" value="7"></input>
                    <label for="7"> 7</label>
                    <input type="checkbox" id="8" value="8"></input>
                    <label for="8"> 8</label>
                    <input type="checkbox" id="9" value="9"></input>
                    <label for="9"> 9</label>
                    <input type="checkbox" id="10" value="10"></input>
                    <label for="10"> 10</label>
                </div>
                
                <div className = {classes.grid}>
                    <Albums></Albums>
                </div>
            </body>
        </div>
    );
}

export default Home;
