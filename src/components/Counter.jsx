import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
} from "../store/slices/counterSlice";
import {
	selectCounterValue,
	selectIsLoggedIn,
	selectUserEmail,
	selectUserName,
} from "../store/selectors";
import Login from "./Login";

const Counter = () => {
	// const count = useSelector((state) => state.counter.value);
	const count = useSelector(selectCounterValue);
	const username = useSelector(selectUserName);
	const email = useSelector(selectUserEmail);
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const dispatch = useDispatch();
	return (
		<div>
			{isLoggedIn ? (
				<h2>
					Welcome, {username}! Your email is {email}.
				</h2>
			) : (
				<h2>Please log in to see your information.</h2>
			)}
			<h1>Counter: {count}</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<button onClick={() => dispatch(incrementByAmount(5))}>
				Increment by 5
			</button>
			<Login />
		</div>
	);
};

export default Counter;
