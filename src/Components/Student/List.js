import React, {Component} from 'react'
import axios from 'axios'
import {Table, Button} from 'react-bootstrap'

class StudentList extends Component{

    constructor(props){
        super(props);
        this.state = {
            allStudents : []
        }
    }
    getAll(){
        axios.get("http://localhost:8089/students")
        .then((response) => {
            this.setState({
                allStudents : response.data
            })
        })
    }

    componentDidMount = () => {
        this.getAll();
    }

    render(){
        const{ allStudents} = this.state;
        return(
            <Table responsive>
                <thead>
                    <tr>
                        <th> NIM </th>
                        <th> Nama </th>
                        <th> Email  </th>
                    </tr>
                </thead>
                <tbody>
                    {allStudents && allStudents.map((student, idx) => {
                        return(
                            <tr>
                                <td> {student.NIM} </td>
                                <td> {student.Nama} </td>
                                <td> {student.Email} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default StudentList;