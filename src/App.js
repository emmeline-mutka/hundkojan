import './App.css';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Welcome from './components/Welcome';
import DogsList from './components/DogsList';
import InfoDog from './components/InfoDog';
import bannerImg from './img/husky-banner.jpg';

function App() {

  const [getDogs, setGetDogs] = useState([]);

  const GetData = async () => {

    let url = `https://api.jsonbin.io/b/6087ced8f6655022c46cff44/1`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      if (data) {
        setGetDogs(data);
      } console.log('Found the dogs', getDogs);
    } catch {
      console.log('No dogs here');
    }
  }

  useEffect(() => {
    GetData()
  }, []);

  return (

    <div className="app-container">
      <header className="App-header">
          <div className="husky-banner">
            <img src={bannerImg} alt="dog" />
          </div>
          <div className="header-title">
            <Link to="/welcome"><button>Hundkojan</button></Link>
          </div>
      </header>
      <main>
        <div className="App">
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/welcome">
                <Welcome />
              </Route>
              <Route path="/dogslist">
                <DogsList getDogs={getDogs} />
              </Route>
              <Route path="/infodog/:chipNumber">
                <InfoDog />
              </Route>
            </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
