
import './App.css';
import './components/Styles/Main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Todo from './components/pages/Todo';
import Contact from './components/pages/Contact';
import AuthLayout from "./components/layouts/AuthLayout";
import MainLayout from "./components/layouts/MainLayout";
function App() {
  return (
    <BrowserRouter>
       <div className='App'>
        <Routes>
              <Route element= {<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='todo' element={<Todo />} />
              <Route path='contact' element= {<Contact />}/>
             </Route>
        </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
