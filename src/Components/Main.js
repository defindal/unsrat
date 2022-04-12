import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import UserList from './Users/List';
import Login from './Login/Index';
import { Container } from 'react-bootstrap'
class Main extends Component{
    render(){
        return(
            
          
            <Container fluid>
            <Routes>
                    <Route path='/list' element={<UserList />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
          </Container>
        )
    }
}

export default Main;