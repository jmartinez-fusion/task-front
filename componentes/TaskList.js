import React from 'react';
import axios from 'axios';

export default function TaskList({ tasks, setTasks }) {
    // Función para borrar una tarea
    const deleteTask = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3001/tasks/${id}`);
            if (response.status === 200) {
                // Si la tarea se eliminó correctamente, actualiza la lista de tareas
                setTasks(tasks.filter(task => task.id !== id));
            } else {
                console.error('Error deleting task:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div id="tasksContainer">
            {tasks.map(task => (
                <div key={task.id} className="task">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
