import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login  from './component/Login/Login';
import Employee from './component/EmployeeCreate/employee'
import EmployeeList from './component/EmployeeList/employeelist';
import Home from './component/Homepage/Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route  path='/'  exact element={< Login />}></Route>
          <Route path="/home" exact element={<Home />}/>
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/employeeList" element={<EmployeeList/>}/>
        </Routes>    
    </Router>
  );
}

export default App;
