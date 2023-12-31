import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
        </Routes>
    );
}

export default App;
