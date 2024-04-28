import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";

// C - Creat
// R - Read
// U - Update
// D - Delete

export type FilterValuesType = 'All' | 'Active' | 'Completed'

function App() {

    const [tasks, setTasks] = useState<TasksPropsType[]>([
        { id: 1, title: "CSS&HTML", isDone: true},
        { id: 2, title: "JS", isDone: true},
        { id: 3, title: "React", isDone: false},
        { id: 4, title: "Redux", isDone: false}
    ])

    const [valueFilter, setValueFilter] = useState<FilterValuesType>('All')

    const removeTask = (valueId: number) => {
        const newTask = tasks.filter(t => t.id !== valueId)

        setTasks(newTask)
        console.log('hello')
    }

    let tasksForTodolist = tasks;
    if (valueFilter === "Active") {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }
    if (valueFilter === "Completed") {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }

    const changeFilter = (value: FilterValuesType) => {
        console.log('hi!!!')
        setValueFilter(value)
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      // newFilteredTasks={newFilteredTasks}
                      // filteredState={filteredState}
            />
            {/*<Todolist title={"Movies"} tasks={tasks2}/>*/}
            {/*<Todolist title={"Songs"} tasks={tasks3}/>*/}
        </div>
    );
}


export default App;


