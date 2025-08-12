import React, { useEffect, useState } from 'react';
import { getBrews, createBrew, updateBrew, deleteBrew } from './api/brews';
import BrewList from './components/BrewList';
import BrewForm from './components/BrewForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [brews, setBrews] = useState([]);
    const [filterMethod, setFilterMethod] = useState('');
    const [editingBrew, setEditingBrew] = useState(null);

    useEffect(() => {
        document.title = `Brews: ${brews.length}`;
    }, [brews.length]);

    async function fetchBrews() {
    try {
        const data = await getBrews();
        setBrews(data);
    } catch (err) {
        alert(err.message);
    }
}

useEffect(() => {
    fetchBrews();
}, []);
    // Filter brews based on filterMethod
    const filteredBrews = filterMethod
        ? brews.filter(b => b.method === filterMethod)
        : brews;

    async function handleCreate(brew) {
        await createBrew(brew);
        fetchBrews();
    }

    async function handleUpdate(id, brew) {
        await updateBrew(id, brew);
        setEditingBrew(null);
        fetchBrews();
    }

    async function handleDelete(id) {
        await deleteBrew(id);
        fetchBrews();
    }

    // Unique brew methods for dropdown
    const brewMethods = Array.from(new Set(brews.map(b => b.method))).filter(Boolean);

    return (
        <div className="bg-main min-vh-100 d-flex flex-column">
            {/* Navbar */}
            <nav className="navbar navbar-dark px-4" style={{ background: "#212121" }}>
                <span className="navbar-brand accent-title">☕ BrewLog</span>
                <button
                    className="btn"
                    style={{ background: "#FF7043", color: "#fff", borderRadius: "50px", boxShadow: "0 2px 8px #FF704366" }}
                    onClick={() => setEditingBrew({})}
                >
                    + Add Brew
                </button>
            </nav>

            {/* Main Content */}
            <div className="container flex-grow-1 py-4">

                {/* Page Title */}
                <h1 className="mb-4 accent-title" style={{ color: "#000000ff" }}>
                    Coffee Log Brews: {brews.length}
                </h1>
                {/* FilterBar */}
                <div className="d-flex align-items-center mb-3">
                    <label className="form-label mb-0 me-2" htmlFor="methodFilter">Filter by Method:</label>
                    <select
                        id="methodFilter"
                        className="form-select w-auto"
                        value={filterMethod}
                        onChange={e => setFilterMethod(e.target.value)}
                    >
                        <option value="">All</option>
                        {brewMethods.map(method => (
                            <option key={method} value={method}>{method}</option>
                        ))}
                    </select>
                </div>

                

                {/* Brew Form (modal style) */}
                {editingBrew !== null && (
                    <div className="modal-backdrop show" style={{ zIndex: 1040 }} onClick={() => setEditingBrew(null)} />
                )}
                <div className={`modal ${editingBrew !== null ? "d-block" : ""}`} tabIndex="-1" style={{ background: "rgba(33,33,33,0.8)", zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-3" style={{ borderRadius: 16 }}>
                            <BrewForm
                                onSubmit={editingBrew && editingBrew.id ? (brew) => handleUpdate(editingBrew.id, brew) : handleCreate}
                                initialData={editingBrew && editingBrew.id ? editingBrew : undefined}
                                onCancel={() => setEditingBrew(null)}
                            />
                        </div>
                    </div>
                </div>

                {/* Brew Cards */}
                <BrewList
                    brews={filteredBrews}
                    onEdit={setEditingBrew}
                    onDelete={handleDelete}
                    onAdd={() => setEditingBrew({})}
                />
            </div>

            {/* Footer */}
            <footer className="text-center py-3" style={{ background: "#212121", color: "#A8E6CF" }}>
                <small>
                    &copy; {new Date().getFullYear()} BrewLog &mdash; <a href="https://github.com/" style={{ color: "#FF7043" }}>GitHub</a>
                </small>
            </footer>
        </div>
    );
}

export default App;