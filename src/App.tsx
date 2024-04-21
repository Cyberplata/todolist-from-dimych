import React from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";

function App() {

    const tasks1: TasksPropsType[] = [
        { id: 1, title: "CSS&HTML", isDone: true},
        { id: 2, title: "JS", isDone: true},
        { id: 3, title: "React", isDone: false},
        { id: 4, title: "Redux", isDone: false}
    ]

    const tasks2: TasksPropsType[] = [
        { id: 1, title: "Terminator", isDone: true},
        { id: 2, title: "XXX", isDone: false},
        // { id: 3, title: "Shutter Island", isDone: true}
    ]

    const tasks3: TasksPropsType[] = [
        { id: 1, title: "Happy song", isDone: true},
        { id: 2, title: "Love", isDone: false},
        { id: 3, title: "Good bby", isDone: true},
        { id: 4, title: "Bad gay", isDone: true}
    ]

    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasks1}/>
            <Todolist title={"Movies"} tasks={tasks2}/>
            <Todolist title={"Songs"} tasks={tasks3}/>
        </div>
    );
}


export default App;


