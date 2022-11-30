import React from 'react';
import "./login.css";


class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {email :'',password:''};
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange= this.handleChange.bind(this)
    }

    handleLogin(event) {
        alert("An essay was submitted")
        event.preventDefault();
        console.log("ev/ent",this.state) // Here we have to call the backend API and based on the response render the home page

        
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
                    {/* <button onClick={this.handleLogin}> Login</button>  */}
                    <input type='submit' value = 'Login'/>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Login;