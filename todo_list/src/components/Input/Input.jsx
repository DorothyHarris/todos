import { useState } from 'react';
import '../../styles/Input.css';
import Tasks from '../Tasks/Tasks';

export default function Input() {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	const handleButton = e => {
		e.preventDefault();
		if (task.trim()) {
			const newTask = { id: tasks.length + 1, text: task };
			setTasks(prevState => [...prevState, newTask]);
			setTask('');
		}
	};

	const onDelete = id => {
		const filteredTasks = tasks.filter(task => task.id !== id);
		const renumberedTasks = filteredTasks.map((task, index) => ({
			id: index + 1,
			text: task.text,
		}));
		setTasks(renumberedTasks);
	};

	return (
		<div className='container'>
			<h1 className='header'>Todo List</h1>
			<form onSubmit={handleButton}>
				<div className='input-border'>
					<input
						value={task}
						className='input'
						type='text'
						placeholder='Добавь задание'
						onChange={e => setTask(e.target.value)}
					/>
					<button className='add-btn input' type='submit'>
						Добавить
					</button>
				</div>
			</form>
			<ul>
				{tasks.length > 0
					? tasks.map(task => (
							<Tasks
								key={task.id}
								id={task.id}
								text={task.text}
								onDelete={onDelete}
							/>
					  ))
					: null}
			</ul>
		</div>
	);
}
