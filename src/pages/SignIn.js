import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
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

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("status", true);
    };
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="signin-form">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <label for="exampleEmail" className="mr-sm-2">
                                Email
                            </label>
                            <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="something@idk.cool"
                            onChange={this.handleChange}
                            value={this.state.email}
                            />
                        </FormGroup>

                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <label for="examplePassword" className="mr-sm-2">
                                password
                            </label>
                            <Input
                            type="Password"
                            name="Password"
                            id="examplePassword"
                            placeholder="don't tell!"
                            onChange={this.handleChange}
                            value={this.state.password}
                            />
                        </FormGroup>
                        <br/>
                        <button>Submit</button>                    
                    </Form>
                </div>
            </div>
        );
    }
}

