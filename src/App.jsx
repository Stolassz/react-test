import './App.css';
import {Header} from './components/Header';
import Home from './pages/Home';
import UserCard from './components/UserCard';

function App() {
  return (
    <>
    <Header 
    brand='Geração Tech 4.0'
    description='Sede Bezerra de Menezes'>
      <a href="#equipe">Equipe</a>
      <a href="#aprendizado">Aprendizado</a>

    </Header>

    <main className='container'>
      <Home/>

    </main>
    
    </>
  );
};

export default App;
