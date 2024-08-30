import { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

import "./Tasks.scss";

const Tasks = () => {
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://alexandre-task-list-a09bfaff88b6.herokuapp.com/tasks"
            );
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    const [tasks, setTasks] = useState([]);

    const deleteTask = () => {
        setTasks([""]);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <div className="tasks-container">
                <h2>Minhas Tarefa</h2>

                <div className="last-tasks">
                    <h3>Ultimas Tarefas</h3>
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted === false)
                            .map((lastTask) => (
                                <p>{lastTask.description}</p>
                            ))}
                    </div>
                </div>

                <div className="completed-tasks">
                    <h3>Tarefas Concluidas</h3>
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted)
                            .map((completedTasks) => (
                                <p>{completedTasks.description}</p>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;
