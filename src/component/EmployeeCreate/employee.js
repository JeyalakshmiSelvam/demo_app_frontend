import React from 'react';
import './employee.css'
import {postRequest} from './../../apiServices/apiFunction'
class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state = {firstName :'',lastName:'', email:'',phoneNumber:'',gender:'',city:'',higherEducation:'',designation:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(event) {
        alert("An essay was submitted")
        event.preventDefault();
        let token = sessionStorage.getItem('userAccessToken')

        await postRequest("/employee",this.state,token)
            .then(response=>{
                console.log("response",response)
                alert('Submitted Successfully')
            })
            .catch(err=>{
                return err;
            })
        
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return (
            <div className='Employeeform-Wrapper'>
                <div>Employee Creation Form</div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label >First Name</label>
                        <input type="text" name='firstName' value ={ this.state.firstName} onChange = {this.handleChange}/><br></br>
                        <label >Last Name</label>
                        <input type="text" name='lastName' value ={ this.state.lastName} onChange = {this.handleChange}/><br></br>
                        <label >Email</label>
                        <input type="text" name='email' value ={ this.state.email}  onChange = {this.handleChange}/><br></br>
                        <label >Phone Number</label>
                        <input type="text" name='phoneNumber' value ={ this.state.phoneNo} onChange = {this.handleChange} /><br></br>
                        <label >Gender</label>
                        <input type="text" name='gender' value ={ this.state.gender} onChange = {this.handleChange} /><br></br>
                        <label >City</label>
                        <input type="text" name='city' value ={ this.state.city} onChange = {this.handleChange} /><br></br>
                        <label >Higher Education</label>
                        <input type="text" name='higherEducation' value ={ this.state.higherEducation} onChange = {this.handleChange} /><br></br>
                        <label >Designation</label>
                        <input type="text" name='designation' value={this.state.designation} onChange = {this.handleChange}/><br></br>
                        <input type ='submit' value ='Submit Form'/>

                    </form>
                </div>
            </div>
               
        )
    }
}

export default Employee;