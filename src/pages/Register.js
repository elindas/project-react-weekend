import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './register.css'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { username, email, password } = this.state;
        const user = {
            username: username,
            email: email,
            password: password,
        }

        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("status", true)

        this.props.history.push("/signin")
    }


    render() {

        return (
            <div>
                <div className="wrapper">
                    <div className="signin-form">
                        
                        <h2 className="form-title">Sign Up</h2>
                        
                        <Form className="form-signin" onSubmit={this.handleSubmit}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                <Label for="exampleUsername" className="mr-sm-2">Name</Label>
                                <Input className="form-control" type="text" name="username" id="exampleName" placeholder="input username"
                                    onChange={this.handleChange}
                                    value={this.state.username} />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                <Input className="form-control" type="email" name="email" id="exampleEmail" placeholder="input email"
                                    onChange={this.handleChange}
                                    value={this.state.email} />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                <Input className="form-control" type="password" name="password" id="examplePassword" placeholder="input password"
                                    onChange={this.handleChange}
                                    value={this.state.password} />
                            </FormGroup>
                            <br />
                            <Button className="btn btn-lg btn-primary btn-block" >Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>

        )
    }

}

export default withRouter(Register)