import React from "react";

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TasksPropsType[]
}

export function Todolist(props: TodolistPropsType) {

    const { title, tasks } = props;

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>

                {tasks.map((el, index) => {
                    return <li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                })}

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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}