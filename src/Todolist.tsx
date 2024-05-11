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
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: TodolistPropsType) {
    const {title, tasks, removeTask, changeFilter, addTask, changeTaskStatus} = props;

    // UI
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    // Handlers
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onChangeButtonHandler = () => {
        if (newTaskTitle.trim() !== '') {
            addTask(newTaskTitle.trim())
            setNewTaskTitle('')
        } else {
            setError("Title is required")
        }

    }
    const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onChangeButtonHandler()
        }
    }
    const onClickAllHandler = () => changeFilter('All')
    const onClickActiveHandler = () => changeFilter('Active')
    const onClickCompletedHandler = () => changeFilter('Completed')

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeInputHandler}
                       onKeyDown={onKeyDownAddTaskHandler}
                       className={error ? "error" : ""}
                />
                <button onClick={onChangeButtonHandler}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>

            <ul>
                {
                    tasks.map(t => {
                        const onRemoveHandler = () => removeTask(t.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(t.id, e.currentTarget.checked)

                        return <li key={t.id}>
                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={t.isDone}
                            />
                            <span>{t.title}</span>
                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button onClick={onClickAllHandler}>All</button>
                <button onClick={onClickActiveHandler}>Active</button>
                <button onClick={onClickCompletedHandler}>Completed</button>
            </div>
        </div>
    )
}