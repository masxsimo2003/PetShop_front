import { ReactDOM } from 'react-router-dom';
import '../styles/MainPage.css';
import logo from '../images/logo.png';

export const MainPage = () => {
	var session_key = sessionStorage.getItem("session_key");
	if (session_key) {
		const panel__right = ReactDOM.createRoot(
			document.getElementById('panel__right')
		);
		const element = 
			<div class="panel__right">
				<a href="sign/Up">Регистрация</a>
				<a href="login">Вход</a>
			</div>;
		panel__right.render(element);
	}
	return (
		<>
			<div class="panel">
				<div class="panel__left">
					<img src={logo} alt="logo" class="panel__left__logo" href="home"/>
				</div>
				<div class="panel__right">
					<a href="sign/Up">Регистрация</a>
					<a href="login">Вход</a>
				</div>;
			</div>
			<div class="background">
				<div class="hello">
					Добро пожаловать на страницу "Виртуальный Зоомагизин" разработанный командой студентов в следующем составе:
				</div>
				<div class="menu">	
					<ul class="list__names">
						<li>Верещагин Николай</li>
						<li>Франус Максим</li>
						<li>Эскендаров Артур</li>
						<li>Туров Егор</li>
						<li>Кислов Даниил</li>
						<li>Чорноштан Александра</li>
					</ul>
					<ul class="list__groups">
						<li>N33452</li>
						<li>N33461</li>
						<li>N33461</li>
						<li>N33461</li>
						<li>M33351</li>
						<li>N33481</li>
					</ul>
					<ul class="list__isu">
						<li>336158</li>
						<li>334269</li>
						<li>334595</li>
						<li>334415</li>
						<li>334891</li>
						<li>339026</li>
					</ul>
				</div>
			</div>
		</>
	);
}
