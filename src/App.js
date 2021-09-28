import logo from './media/Logo.png';
import './styles/App.css';
import siames from './media/raza siames.jpg';
import bengala from './media/raza bengala.jpg';
import esfinge from './media/raza esfinge.jpg';




function App() {
  return (
    <div className="App">
        <header>
        <ul className="navbar">  
            <li>
                <img src={logo} alt="logo" className="logo"/>
            </li>
            <li>
                <button className="button mainbutton">Nuevo Post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza"/>  
                    <i className="fas fa-search button iconobusqueda" ></i>
                </div>
            </li>     
            <li>
                <button className="button mainbutton secondarybutton">Iniciar Sesion</button>
            </li>
            <li>
            <button className ="button mainbutton" > Registro </button>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1 className="navbar">Razas de Gatos</h1>
            <ul className="contenedortarjetas">
                <li className= "tarjeta">
                    <div className="contenedorimagen">  
                        <img src={siames} alt="raza siames"/>                         
                    </div>
                    <span className ="titulotarjeta">Siames</span>  
                </li>               
                <li className="tarjeta">
                    <div  className="contenedorimagen">
                        <img src={bengala} alt="Raza bengala"/>                        
                    </div>
                    <span className ="titulotarjeta">Bengala</span>                    
                </li>               
                <li className="tarjeta">
                    <div className="contenedorimagen">
                        <img src={esfinge} alt="Raza Esfinge"/>
                    </div>
                    <span className ="titulotarjeta">Esfinge</span> 
                </li>               
            </ul>  

        </section>
        <section></section>
    </main>
    <footer>


    </footer>
    </div>
  );
}

export default App;
