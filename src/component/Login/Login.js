import React from 'react';
import "./login.css";
import {postRequest} from './../../apiServices/apiFunction'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {email :'',password:'', strategy:'local'};
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange= this.handleChange.bind(this)
    }

    async handleLogin(event) {
        alert("An essay was submitted")
        event.preventDefault();
        await postRequest("/authentication",this.state)
            .then(response=>{
                console.log("response",response)
                if(!response.accessToken){
                    alert('Invalid credentials')
                    
                } 
                else {
                    sessionStorage.setItem('userAccessToken', response.accessToken);
                    window.location.href='home'
                }
            })
            .catch(err=>{
                this.setState({ output: err})
            })
        
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return (
            <div className='Login-Wrapper'> 
                <div><h1>Employee Login</h1></div>
                <div>
                    <form onSubmit={this.handleLogin}>
                    <label >Email</label>
                    <input type="text" name= 'email' value ={this.state.email} onChange={this.handleChange}/><br></br>
                    <label >Password</label>
                    <input type="password" name ='password' value ={ this.state.password} onChange={this.handleChange} /><br></br>
                    <input type='submit' value = 'Login' onClick={this.handleNavigate}/>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Login;