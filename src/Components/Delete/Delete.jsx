import imgDelete from "../../assets/delete.svg";
import propTypes from "prop-types";
const Delete = ({ removeAll }) => {
	return (
		<div>
			<img
				style={{ width: "25px", position: "absolute", top: "70px" }}
				onClick={removeAll}
				src={imgDelete}
				alt="@"
			/>
		</div>
	);
};
Delete.propTypes = {
	removeAll: propTypes.func,
};
export default Delete;
