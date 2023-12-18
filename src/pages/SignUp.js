import '../styles/form.css';

export const SignUp = () => {
	
	const BACKEND_ADDRESS = "http://localhost:8090";
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const requestData = {
			username: formData.get('username'),
			password: formData.get('password')
		};

		const response = await fetch(BACKEND_ADDRESS + "/sign/Up", {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestData)
		});

		if (response.ok) {
			let session_key = await response.text();
			sessionStorage.setItem("session_key", session_key);
		} else {
			alert("Server didn't respond");
		}
	}
	return (
		<div>
			<h2 class="form_header">Регистрация</h2>
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
					<button type="submit">Зарегистрироваться</button>
				</div>
			</form>
		</div>
	);
}
