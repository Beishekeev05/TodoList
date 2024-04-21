import propTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import css from "./TaskList.module.css";
const TaskList = ({ tasks, onRemove }) => {
	return (
		<ul className={css.block}>
			{tasks.map((item) => (
				<TaskItem
					key={item.id}
					item={item}
					onRemove={() => onRemove(item.id)}
				/>
			))}
		</ul>
	);
};
TaskList.propTypes = {
	tasks: propTypes.array,
	onRemove: propTypes.func,
};
export default TaskList;
