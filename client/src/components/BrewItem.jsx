import React from 'react';
import './BrewItem.css';

const BrewItem = ({ brew, onEdit, onDelete }) => {
    return (
        <div className="brew-card d-flex flex-column justify-content-between mb-3 shadow">
            <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="mb-0" >{brew.name}</h3>
                    <span className="badge bg-dark text-light">{brew.method}</span>
                </div>
                <div className="mb-1" >
                    {"★".repeat(brew.rating)}{"☆".repeat(5 - brew.rating)}
                </div>
                <div className="mb-1 text-secondary" style={{ fontSize: "0.95rem" }}>
                    <strong>Bean:</strong> {brew.beanType}
                </div>
                <div className="mb-1 text-secondary" style={{ fontSize: "0.95rem" }}>
                    <strong>Coffee:</strong> {brew.coffeeGrams}g &nbsp; | &nbsp;
                    <strong>Water:</strong> {brew.waterGrams}g
                </div>
                {brew.notes && (
                    <div className="mb-2" >
                        <strong>Notes:</strong> {brew.notes}
                    </div>
                )}
                <div className="mb-2" >
                    {brew.createdAt && (
                        <>Logged: {new Date(brew.createdAt).toLocaleDateString()}</>
                    )}
                </div>
            </div>
            <div className="d-flex gap-2 mt-2">
                <button
                    className="btn"
                    onClick={() => onEdit(brew)}
                >
                    🖉 Edit
                </button>
                <button
                    className="btn"
                    onClick={() => onDelete(brew.id)}
                >
                    🗑 Delete
                </button>
            </div>
        </div>
    );
};

export default BrewItem;