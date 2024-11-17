import '../../styles/Tasks.css';
import { VscTrash } from 'react-icons/vsc';

export default function Tasks({ id, text, onDelete }) {
	return (
		<li className='task'>
			{id}. {text}
			<button className='del-btn' onClick={() => onDelete(id)}>
				<VscTrash className='del-btn' />
			</button>
		</li>
	);
}
