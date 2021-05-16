import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import Pagefour from './Pagefour';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testcar from './Testcar'
import Testeasing from './Testeasing';
import Switchtry from './Switchtry';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Pageone></Pageone>
      <Pagetwo></Pagetwo>
      <Pagethree></Pagethree>
      <Pagefour></Pagefour>
      {/* <Switchtry></Switchtry> */}
      {/* <Testcar></Testcar> */}
      {/* <Testeasing></Testeasing> */}
    </div>
  );
}

export default App;
