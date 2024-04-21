import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";

function App() {

    const [tasks, setTasks] = useState<TasksPropsType[]>([
        { id: 1, title: "CSS&HTML", isDone: true},
        { id: 2, title: "JS", isDone: true},
        { id: 3, title: "React", isDone: false},
        { id: 4, title: "Redux", isDone: false}
    ])

    const removeTask = (valueId: number) => {
        debugger
        let newTask = tasks.filter(t => t.id !== valueId)

        setTasks(newTask)
        console.log('hello')
    }


    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasks}
                      removeTask={removeTask}
            />
            {/*<Todolist title={"Movies"} tasks={tasks2}/>*/}
            {/*<Todolist title={"Songs"} tasks={tasks3}/>*/}
        </div>
    );
}


export default App;


