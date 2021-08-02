import logo from './logo.svg';
import './App.css';
import Main from './components/views/Main';
import { Router } from '@reach/router';
import DisplayProducts from './components/views/DisplayProducts';
import Detail from './components/views/Detail';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <div className="App">
    <Router>
     <Main path="/"/>
   <DisplayProducts path="/AllProducts"/>    
   <Detail path="/products/:id"/>
   <EditProduct path="/products/edit/:id"/>
    </Router>  

    </div>
  );
}

export default App;
