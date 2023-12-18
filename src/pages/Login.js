import '../styles/form.css';

export const Login = () => {
	const BACKEND_ADDRESS = "http://localhost:8090";
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const requestData = {
			username: formData.get('username'),
			password: formData.get('password')
		};

		const response = await fetch(BACKEND_ADDRESS + "/login", {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestData)
		});

		if (response.ok) {
			let key = await response.text();
			sessionStorage.setItem("session_key", key);
		} else {
			alert("not ok");
		}
	}
	return (
		<div>
			<h2 class="form_header">Вход</h2>
			<form onSubmit={handleSubmit} class="form">
				<div>
					<label htmlFor="username">Имя пользователя:</label>
					<input type="text" id="username" name="username" />
				</div>
				<div>
					<label htmlFor="password">Пароль:</label>
					<input type="password" id="password" name="password" />
				</div>
				<div>
					<button type="submit">Войти</button>
					<a href="sign/Up">Ещё не зарегестрированы?</a>
				</div>
			</form>
		</div>
	);
}
