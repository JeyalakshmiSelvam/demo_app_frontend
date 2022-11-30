import React from 'react';
import "./login.css";

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {};
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(event) {
        alert("An essay was submitted")
        event.preventDefault();
    }
    

    render(){
        return (
            <div className='Login-Wrapper'> 
                <div><h1>Login</h1></div>
                <div>
                    <form>
                    <label >Email</label>
                    <input type="text" name= 'email'></input><br></br>
                    <label >Password</label>
                    <input type="password" name ='password'></input><br></br>
                    <button onClick={handleLogin}> Login</button>
                    </form>
                </div>
                
            </div>
        )
    }
    

    
}

// function Login(){
//     // return <h1>Sample Try </h1> 

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('submitted')
//         console.log('The Submit was clicked.');
//       }
//     return (
//         <div className='Login-Wrapper'>
        
//              <h1>Login</h1>
//              <form>
//                 <label >Email</label>
//                 <input type="text" name= 'email'></input><br></br>
//                 <label >Password</label>
//                 <input type="password" name ='password'></input><br></br>
//                 <input type="submit" onClick={handleSubmit}/>
//              </form>
//         </div>
//     )
// }


export default Login;