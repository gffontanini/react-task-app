import { useState, useContext } from "react";
import { TaskContext } from "./context/taskContext";

function TaskForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const { createTask } = useContext(TaskContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask({ title, description });
		setTitle("");
		setDescription("");
	};

	return (
		<div className="max-w-md mx-auto">
			<form
				onSubmit={handleSubmit}
				className="bg-gray-800 p-10 mb-4 rounded-md"
			>
				<h1 className="text-2xl font-bold text-white mb-3">
					Crea tu tarea
				</h1>
				<input
					placeholder="Escribe tu tarea"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					className="bg-slate-300 p-3 w-full mb-2"
				/>
				<textarea
					placeholder="Escribe la descripción de la tarea"
					onChange={(e) => setDescription(e.target.value)}
					value={description}
					className="bg-slate-300 p-3 w-full mb-2"
				></textarea>
				<button className="bg-gray-300 text-black px-2 py-1 rounded-md mt-4 hover:bg-green-300">
					Guardar
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
