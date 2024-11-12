import LoginButton from './components/auth/LoginButton';
import LogoutButton from './components/auth/LogoutButton';
import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { createActor } from '../../declarations/backend';
import './App.css';


function App() {


  const { isAuthenticated, identity } = useContext(AuthContext);
  
  let canisterId = process.env.CANISTER_ID_BACKEND //REACT_APP_BACKEND_CANISTER_ID;

  let backend = createActor(canisterId, {
    agentOptions: {
      identity: identity,
      host: "http://localhost:4943",
    },
  });


  const [greeting, setGreeting] = useState('');
      
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;

    if(!isAuthenticated){
      alert("Por favor, usted debe loguearse primero para ejecutar esta funcion");
      return;
    }

    backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    })
    // .catch((error) => {
    //   console.error("Error:", error);
    //   setGreeting("A ocurrido un error, por favor contactese con el Administrador del proyecto");
    // });
    
    return false;
  }




  
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        
      </header>
      <main>
            
            <br />
            <img src="/logo2.svg" alt="DFINITY logo" />
            <br />
            <br />
              <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="name">Enter your name: &nbsp;</label>
                <input id="name" alt="Name" type="text" />
                <button type="submit">Click Me!</button>
              </form>
            <section id="greeting">{greeting}</section>
      </main>
    </div>
  );




}

export default App;
