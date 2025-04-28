import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LayoutPage from "../pages/LayoutPage";
import ContactPage from "../pages/ContactPage";

export default function ApplicationComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route index element={<HomePage />} />
                    <Route path="Contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
