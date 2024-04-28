import React from "react";
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
}

export function Todolist(props: TodolistPropsType) {

    const { title, tasks, removeTask, changeFilter } = props;

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
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
                <button onClick={() => {changeFilter("All")}}>All</button>
                <button onClick={() => {changeFilter("Active")}}>Active</button>
                <button onClick={() => {changeFilter("Completed")}}>Completed</button>
            </div>
        </div>
    )
}