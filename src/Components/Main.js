import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import StudentList from './Student/List';

class Main extends Component{
    render(){
        return(
            <main>
                <Routes>
                    <Route path='/list' element={<StudentList />} />
                </Routes>
            </main>
        )
    }
}

export default Main;