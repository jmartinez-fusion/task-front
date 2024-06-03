// pages/index.js
"use client";  // Marca este archivo como Client Component

import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from '@/componentes/TaskForm';
import TaskList from '@/componentes/TaskList';


export default function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, [tasks]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3001');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async (title, description) => {
        try {
            const response = await axios.post('http://localhost:3001/tasks', { title, description });
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div className="container">
            <h1>Que hagoooo</h1>
            <TaskForm addTask={addTask} />
            <h2>Ponete a hacer</h2>
            <TaskList tasks={tasks} />
        </div>
    );
}
