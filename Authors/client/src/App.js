import './App.css';
import { Router } from '@reach/router';
import MainPage from './components/MainPage';
import DisplayFormPage from './components/DisplayFormPage';
function App() {
  return (
    <div className="App">
     <Router>
       <MainPage path="/"/>
       <DisplayFormPage path="/form"/>
     </Router>
    </div>
  );
}

export default App;
