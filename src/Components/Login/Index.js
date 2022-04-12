import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button, Row, Col } from 'react-bootstrap'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.getLogin = this.getLogin.bind(this);
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({ [name]: value });

    }

    getLogin(event) {
        event.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post("http://localhost:8089/v1/auth/login", data)
            .then((response) => {
                if (response.data.tokens.access.token) {
                    localStorage.setItem("token", JSON.stringify(response.data.tokens.access.token));
                }
                // console.log(response.data.tokens.access.token);
                // console.log(JSON.parse(localStorage.getItem('token')));
            })

    }

    render() {
        return (
            <>
                <Row style={{ marginTop: "30px" }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.getLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </>
        )
    }
}

export default Login;