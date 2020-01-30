import React from 'react';
import Axios from 'axios';


class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }

    handleSubmit = e => {
        e.preventDefault();
        
        Axios
            .post('http://localhost:4000/api/auth/login', this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                this.props.history.push('/users');
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1>login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        name='username'
                        id='username'
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Username'
                        />
                        <br/>
                        <input
                        name='password'
                        id='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Password'
                        />
                        <br/>
                        <div>
                            <button type='submit'>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default Login;