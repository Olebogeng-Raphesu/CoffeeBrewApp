import React, { useState, useEffect } from 'react';
import './BrewForm.css';

const methods = [
    "French Press",
    "Pour Over",
    "Aeropress",
    "Espresso",
    "Cold Brew",
    "Drip",
    "Other"
];

function StarRating({ value, onChange }) {
    return (
        <div className="star-rating mb-3">
            {[1,2,3,4,5].map(star => (
                <span
                    key={star}
                    className={`star ${star <= value ? 'star-filled' : ''}`}
                    onClick={() => onChange(star)}
                    role="button"
                    aria-label={`Rate ${star} stars`}
                >★</span>
            ))}
        </div>
    );
}

const initialForm = {
    name: '',
    beanType: '',
    method: '',
    coffeeGrams: '',
    waterGrams: '',
    rating: 0,
    notes: ''
};

function BrewForm({ onSubmit, initialData, onCancel }) {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState('');

    useEffect(() => {
        if (initialData) setForm({ ...initialForm, ...initialData });
        else setForm(initialForm);
    }, [initialData]);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    function handleRating(r) {
        setForm(f => ({ ...f, rating: r }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { name, beanType, method, coffeeGrams, waterGrams, rating } = form;
        if (!name || !beanType || !method || !coffeeGrams || !waterGrams || !rating) {
            setError('All fields except notes are required.');
            return;
        }
        setError('');
        onSubmit({
            ...form,
            coffeeGrams: Number(form.coffeeGrams),
            waterGrams: Number(form.waterGrams),
            rating: Number(form.rating)
        });
        setForm(initialForm);
    }

    return (
        <div className="brewform-modal p-3">
            {/* Navbar */}
            <div className="brewform-navbar d-flex justify-content-between align-items-center mb-3">
                <button className="btn btn-link brewform-back" onClick={onCancel}>&larr; Back</button>
                <button
                    className="btn brewform-save"
                    onClick={handleSubmit}
                >
                    Save Brew
                </button>
            </div>
            {/* Form Title */}
            <h3 className="accent-title mb-3">{initialData ? "Edit Brew" : "Add New Brew"}</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" className="form-control" value={form.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Bean</label>
                    <input name="beanType" className="form-control" value={form.beanType} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Method</label>
                    <select name="method" className="form-select" value={form.method} onChange={handleChange}>
                        <option value="">Select method</option>
                        {methods.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Coffee (g)</label>
                    <input name="coffeeGrams" type="number" className="form-control" value={form.coffeeGrams} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Water (g)</label>
                    <input name="waterGrams" type="number" className="form-control" value={form.waterGrams} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <StarRating value={form.rating} onChange={handleRating} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Notes</label>
                    <textarea name="notes" className="form-control" value={form.notes} onChange={handleChange} />
                </div>
                {error && <div className="text-danger mb-2">{error}</div>}
                <div className="d-flex gap-2">
                    <button
                        type="submit"
                        className="btn brewform-save"
                    >
                        Save
                    </button>
                    <button type="button" className="btn brewform-cancel" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BrewForm;