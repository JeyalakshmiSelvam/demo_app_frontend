import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login  from './component/Login/Login';
import Employee from './component/EmployeeCreate/employee'
import EmployeeList from './component/EmployeeList/employeelist';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/employeeList' element={< EmployeeList />}></Route>
        <Route exact path='/employee' element={< Employee />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
