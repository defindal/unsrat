import React, { Component } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allUsers: []
        }
    }

    

    getAll() {
        const token = JSON.parse(localStorage.getItem('token'));
        axios.get("http://localhost:8089/v1/users",{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then((response) => {
                console.log(response)
                this.setState({
                    allUsers: response.data.results
                })
            })
    }

    componentDidMount = () => {
        this.getAll();
    }

    render() {
        const { allUsers } = this.state;
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers && allUsers.map((user, idx) => {
                            return (
                                <tr>
                                    <td>{ idx+=1}</td>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td> {user.role} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default UserList;