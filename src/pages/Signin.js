import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './register.css'

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            // isLogin: false
        }
    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        console.log('user', user);

        let login = JSON.parse(localStorage.getItem('user'));
        console.log('login', login);



        if (user.email === login.email && user.password === login.password) {
            this.props.history.push("/todolist")
            localStorage.setItem('status', true);
            console.log('masuk');
        } else {
            alert('email and password wrong');
        }
    };



    render() {
        console.log('state', this.state);
        return (
            <div>
                <div className="wrapper">
                    <div className="signin-form">
                    <h2 className="form-title">Sign in</h2>
                        <Form className="form-signin" onSubmit={this.handleSubmit}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                <Input className="form-control" type="email" name="email" id="exampleEmail" placeholder="input email" autoComplete="current-email"
                                    onChange={this.handleChange}
                                    value={this.state.email} />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                <Input className="form-control" type="password" name="password" id="examplePassword" autoComplete="current-password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    placeholder="input password"/>
                            </FormGroup>
                            <br />
                            <Button className="btn btn-lg btn-primary btn-block">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Signin)