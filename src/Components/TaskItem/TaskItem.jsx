import propTypes from "prop-types";
import "./AllCssStyle.css";
import { useState } from "react";

const TaskItem = ({ item, onRemove }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	return (
		<li className={isChecked === true ? "falseLiteg" : "liteg"}>
			<p className={isChecked === true ? "truePText" : "falsePText"}>
				{item.text}
			</p>
			<div className="rightBlock">
				<input
					type="checkbox"
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
				<button className="buttonBlock" onClick={onRemove}>
					Удалить
				</button>
			</div>
		</li>
	);
};

TaskItem.propTypes = {
	item: propTypes.object.isRequired,
	onRemove: propTypes.func,
	onCheck: propTypes.func,
};

export default TaskItem;
