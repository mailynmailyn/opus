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
                
                <div className = {classes.grid}>
                    <Albums></Albums>
                </div>
            </body>
        </div>
    );
}

export default Home;
