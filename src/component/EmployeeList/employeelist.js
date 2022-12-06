import React from "react";

class EmployeeList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            employees:[],
            DataisLoaded: false
        }
    }
    componentDidMount(){
        let token = sessionStorage.getItem('userAccessToken')
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'authorization': token
            },
        };
        fetch("http://localhost:3030/employee", requestOptions)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    employees: json.data,
                    DataisLoaded: true
                });
            })
    }

    render(){
        const {employees, DataisLoaded}= this.state
        if(!DataisLoaded) return <div><h5>No Data Found</h5> </div>
        return(
            <div>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Higher Education</th>
                        <th>Designation</th>
                    </tr>
                
                    {employees.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.firstName}</td>
                                <td>{val.lastName}</td>
                                <td>{val.email}</td>
                                <td>{val.phoneNumber}</td>
                                <td>{val.gender}</td>
                                <td>{val.city}</td>
                                <td>{val.higherEducation}</td>
                                <td>{val.designation}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
} 

export default EmployeeList