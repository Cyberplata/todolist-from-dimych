import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TasksPropsType[]
    removeTask: (valueId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: TodolistPropsType) {

    const {title, tasks, removeTask, changeFilter, addTask} = props;

    // UI
    const [newTaskTitle, setNewTaskTitle] = useState('')

    // Handlers
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onChangeButtonHandler = () => {
        addTask(newTaskTitle)
        setNewTaskTitle('')
    }
    const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onChangeButtonHandler()
        }
        // console.log(e)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeInputHandler}
                       onKeyDown={onKeyDownAddTaskHandler}
                />
                <button onClick={onChangeButtonHandler}>+</button>
            </div>

            <ul>
                {
                    tasks.map(t => <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => removeTask(t.id)}>x</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={() => {
                    changeFilter("All")
                }}>All
                </button>
                <button onClick={() => {
                    changeFilter("Active")
                }}>Active
                </button>
                <button onClick={() => {
                    changeFilter("Completed")
                }}>Completed
                </button>
            </div>
        </div>
    )
}