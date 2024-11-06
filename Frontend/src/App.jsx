import {BrowserRouter, Route, Routes} from "react-router-dom"

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import "./App.css"
import Login from "./Components/Login/Login"
import Signin from "./Components/Signin/Signin"
import Home from "./Pages/Home/Home"

function App() {
	return (
		<>
			<ToastContainer autoClose={2000} limit={3} theme='dark' />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signin' element={<Signin />} />

					{/* <Route path='*' element={<NotFound />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
