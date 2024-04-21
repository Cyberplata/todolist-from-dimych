import React from "react";

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TasksPropsType[]
    removeTask: (valueId: number) => void
    filteredState: (value: string) => void
}

export function Todolist(props: TodolistPropsType) {

    const { title, tasks, removeTask, filteredState } = props;

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

                {/*<li>*/}
                {/*    <input type="checkbox" checked={tasks[0].isDone}/>*/}
                {/*    <span>{tasks[0].title}</span>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <input type="checkbox" checked={tasks[1].isDone}/>*/}
                {/*    <span>{tasks[1].title}</span>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <input type="checkbox" checked={props.tasks[2].isDone}/>*/}
                {/*    <span>{props.tasks[2].title}</span>*/}
                {/*</li>*/}
            </ul>
            <div>
                <button onClick={() => {filteredState("All")}}>All</button>
                <button onClick={() => {filteredState("Active")}}>Active</button>
                <button onClick={() => {filteredState("Completed")}}>Completed</button>
            </div>
        </div>
    )
}