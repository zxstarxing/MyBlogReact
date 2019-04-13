import React, { Component } from 'react'
import { Card, Button } from 'antd';
import TodoList from '../../components/todo/TodoList';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import TodoRouter from '../../contants/TodoRouter'

export default class Todo extends Component {
    constructor(props){
        super(props)
    }
    handleAddTodo = () => {
        this.props.history.push({pathname:TodoRouter.TODOADD})
    }
    render() {
        let AddButton = (<Button type="primary" onClick={()=>this.handleAddTodo()} >新增代办事项</Button>)
        return (
            <>
                <Card extra={AddButton}>
                    <TodoList />
                </Card>
            </>
        )
    }
}
