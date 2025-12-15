import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../store/slices/userSlice";
import { selectIsLoggedIn } from "../store/selectors";

const Login = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const username = e.target.username.value;
		const email = e.target.email.value;
		if (!username || !email) return;
		// Dispatch login action here with username and email
		dispatch(setUser({ name: username, email: email }));
	};

	const handleLogout = () => {
		// Dispatch logout action here
		dispatch(logout());
	};

	return !isLoggedIn ? (
		<form onSubmit={handleSubmit}>
			<br />
			<input
				type='text'
				name='username'
				placeholder='username'
			/>
			<br />
			<input
				type='email'
				name='email'
				placeholder='email'
			/>
			<br />
			<button>Login</button>
		</form>
	) : (
		<button onClick={handleLogout}>Logout</button>
	);
};

export default Login;
