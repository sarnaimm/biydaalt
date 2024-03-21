import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Students from './Students';
import Newstudent from './Newstudent';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Students />}></Route>
          <Route path='/create' element={<Newstudent/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
