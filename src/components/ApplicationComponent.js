import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LayoutPage from "../pages/LayoutPage";
import ContactPage from "../pages/ContactPage";
import CategoryPage from "../pages/CategoryPage";

// TODO: Add a 404 page
// TODO: Add exception page
export default function ApplicationComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route index element={<HomePage />} />
                    <Route path="category/:id" element={<CategoryPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
