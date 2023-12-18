import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';

export const MyRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<MainPage />} />
				<Route path="sign/Up" element={<SignUp />} />
				<Route path="login" exact element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}
