import './App.css';
import { Router } from '@reach/router';
import MainPage from './components/MainPage';
import DisplayFormPage from './components/DisplayFormPage';
import EditForm from './components/EditForm';
function App() {
  return (
    <div className="App">
     <Router>
       <MainPage path="/"/>
       <DisplayFormPage path="/form"/>
       <EditForm path="/edit/:id"/>
     </Router>
    </div>
  );
}

export default App;
