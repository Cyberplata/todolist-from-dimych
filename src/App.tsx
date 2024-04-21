import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";

type FilteredPropsType = 'All' | 'Active' | 'Completed'

function App() {

    const [tasks, setTasks] = useState<TasksPropsType[]>([
        { id: 1, title: "CSS&HTML", isDone: true},
        { id: 2, title: "JS", isDone: true},
        { id: 3, title: "React", isDone: false},
        { id: 4, title: "Redux", isDone: false}
    ])

    const removeTask = (valueId: number) => {
        const newTask = tasks.filter(t => t.id !== valueId)

        setTasks(newTask)
        console.log('hello')
    }

    const [valueFilter, setValueFilter] = useState<FilteredPropsType>('All')

    const filteredState = (valueButton: string) => {
        let newFilteredTasks;

        if (valueFilter === valueButton) {
            newFilteredTasks = valueFilter;
        }

        setValueFilter(valueFilter)
        console.log('Hi!!!!!')
    }


    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasks}
                      removeTask={removeTask}
                      filteredState={filteredState}
            />
            {/*<Todolist title={"Movies"} tasks={tasks2}/>*/}
            {/*<Todolist title={"Songs"} tasks={tasks3}/>*/}
        </div>
    );
}


export default App;


