import React from 'react';
import "./home.css";
import Sidebar from './sidebar';
// import EmployeeCreation from '../EmployeeCreate/employee';
// import Routes from "./../../App";


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    // render(){
    //     return(
    //         <div>
    //             <div className ='Left'>
    //                 <h4 style ={{paddingLeft:40}}>Employee Portal</h4>
    //                 <ul className='Ullist'>
    //                 <li className='listItem'><a href='/employee' className='linkStyle' >Employee creation</a></li>
    //                 <li className='listItem'><a href='/employeeList' className='linkStyle' >Employee List</a></li>
    //                 </ul>
    //             </div>
    //             <div className ='Right'>content display here</div>
    //         </div>
    //     )
    // }

    render(){
        return (
            <div>
                <div style={{display: "flex"}}>
                    <Sidebar/>
                    <div>
                        {/* <EmployeeCreation /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;