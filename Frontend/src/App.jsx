import {BrowserRouter, Route, Routes} from "react-router-dom"

import "./App.css"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"

function App() {
	return (
		
			<BrowserRouter>

				<Routes>
					{/* <Route path='/' element={<Home />} /> */}
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />

					{/* <Route path='*' element={<NotFound />} /> */}
				</Routes>
			</BrowserRouter>
	)
}

export default App
