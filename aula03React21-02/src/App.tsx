import './App.css';
import Header from './componentes/Header';
import ComponenteTeste from './componentes/ComponenteTeste';
import ComponenteExArrow from './componentes/ComponenteExArrow';
import Footer from './componentes/Footer';
import reactLogo from './assets/react.svg';

function App(){

const paragrafoEstilo = {
    color: 'darkgrey',
    fontSize: '14px',
    margin: '10px',
    AlignText: 'center',
}

    return (
        <>
            <Header></Header>
            <div>
                <img src={reactLogo} className="logo" alt="Vite logo" />
            </div>
            
            <h1>Aula 21-02</h1>
            <h2>Jhoe Yoshio Kochi Hashimoto</h2>
            <p style={paragrafoEstilo}>Lorem, ipsum dolor.<br/></p>
            

            <h2 style={{fontSize: '18px', color:'black', textAlign: 'center'}}>Extilizando com CSS Inline</h2>
            <p style={paragrafoEstilo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ab.</p>
            <p className='exemplo01'>Lorem ipsum dolor sit.</p>
            <p className='exemplo01'>Lorem, ipsum.</p>
            <hr/>
               

       
            
            <ComponenteTeste></ComponenteTeste>
            <ComponenteExArrow></ComponenteExArrow>
            <Footer></Footer>
        </>


            



    )
}

export default App;
