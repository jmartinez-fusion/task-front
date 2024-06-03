import { useState } from 'react';

export default function TaskForm({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="descripcion"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            ></textarea>
            <button type="submit">eso vas a hacer?</button>
        </form>
    );
}
