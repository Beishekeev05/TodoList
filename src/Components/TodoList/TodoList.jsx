import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import css from "./TodoList.module.css";
const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const addTask = (text) => {
		const isInclude = tasks.some((task) => task.text === text);
		if (isInclude) {
			alert("Данная задача уже имеется");
			return;
		}
		if (text.trim() !== "") {
			const newTask = {
				id: Math.floor(Math.random() * 99999),
				text: text,
			};
			setTasks((prev) => [...prev, newTask]);
			console.log(tasks);
		} else {
			alert("Напишите что ни-будь !!! :)");
		}
	};
	const removeTask = (id) => {
		setTasks((prev) => prev.filter((item) => item.id !== id));
	};
	const removeAll = () => {
		setTasks([]);
	};

	return (
		<div className={css.block}>
			<h1>Список дел</h1>
			<div className={css.inpitBlock}>
				<TaskInput removeAll={removeAll} onAddTask={addTask} />
			</div>
			<div className={css.taskblock}>
				<TaskList tasks={tasks} onRemove={removeTask} />
			</div>
		</div>
	);
};
export default TodoList;
