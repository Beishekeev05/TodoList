import propTypes from "prop-types";
import css from "./TaskInput.module.css";

import Delete from "../Delete/Delete";

const TaskInput = ({ onAddTask, removeAll }) => {
	const onFinish = (event) => {
		event.preventDefault();

		const input = event.target.label;

		const inputValue = input.value;

		onAddTask(inputValue);

		input.value = "";
	};

	return (
		<form className={css.formInput} onSubmit={onFinish}>
			<div className={css.inputBlock}>
				<input type="text" name="label" />
				<button className={css.buttonCreate} type="submit">
					+
				</button>
				<Delete removeAll={removeAll} />
			</div>
		</form>
	);
};
TaskInput.propTypes = {
	onAddTask: propTypes.func,
	removeAll: propTypes.func,
};
export default TaskInput;
