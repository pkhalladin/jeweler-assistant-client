import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { api } from "../index.js";

export default function LayoutPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            setCategories(await api.get("/category"));
        }

        fetchCategories();
    }, []);

    return (
        <div className="layout-container">
            <aside className="sidebar">
                <h2>Categories</h2>
                <ul className="category-list">
                    {categories.map(c => (
                        <li key={c.id}>
                            <Link to={`/category/${c.id}`}>
                                {c.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <div className="main-content">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">💫 Jeweler Assistant</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <main>
                    <Outlet />
                </main>

                <footer>
                    <p>&copy; 2025 Gall Anonim</p>
                </footer>
            </div>
        </div>
    );
}
