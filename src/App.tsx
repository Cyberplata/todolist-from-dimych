import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

// C - Creat
// R - Read
// U - Update
// D - Delete

export type FilterValuesType = 'All' | 'Active' | 'Completed'

function App() {

    const [tasks, setTasks] = useState<TasksPropsType[]>([
        { id: v1(), title: "CSS&HTML", isDone: true},
        { id: v1(), title: "JS", isDone: true},
        { id: v1(), title: "React", isDone: false},
        { id: v1(), title: "Redux", isDone: false},
        { id: v1(), title: "Rest API", isDone: false}
    ]);
    const [valueFilter, setValueFilter] = useState<FilterValuesType>('All')

    const removeTask = (valueId: string) => {
        const newTask = tasks.filter(t => t.id !== valueId)
        setTasks(newTask)
        // console.log('hello')
    }

    const addTask = (title: string) => {
        let newTask = {
            id: v1(),
            title: title,
            isDone: true
        }
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find( t => t.id === taskId );
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks]);
    }

    let tasksForTodolist = tasks;
    if (valueFilter === "Active") {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }
    if (valueFilter === "Completed") {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }

    const changeFilter = (value: FilterValuesType) => {
        // console.log('hi!!!')
        setValueFilter(value)
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      valueFilter={valueFilter}
            />
        </div>
    );
}


export default App;


