export const TopPanel = () => {
	const BACKEND_ADDRESS = "http://localhost:8090";
	
	return (
		<div class="top-panel">
		<div class="top-panel__left">
			<img
					class="top-panel__left__img"
					src="./user.svg"
					alt="">
			<a
					href="./api/user"
					class="top-panel__left__name">
					!usename!
			</a>
		</div>
		<div class="top-panel__right">
			<a href="" class="top-panel__right__btn">На главную</a>
				<a href="login" class="top-panel__right__btn">Войти</a>
				<a href="sign/Up" class="top-panel__right__btn">Регистрация</a>
			{% endif %}
		</div>
</div>
	);
}
