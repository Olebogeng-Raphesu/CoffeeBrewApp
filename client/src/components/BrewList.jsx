import React from 'react';
import './BrewList.css';
import BrewItem from './BrewItem';

const BrewList = ({ brews, onEdit, onDelete, onAdd }) => {
    if (!brews.length) {
        return (
            <div className="brewlist-empty text-center my-5">
                <h2 className="brewlist-empty-title mb-3">
                    No brews yet{' '}
                    <span role="img" aria-label="sad">
                        ☹️
                    </span>
                </h2>
                <button
                    className="brewlist-empty-btn btn"
                    onClick={onAdd}
                >
                    Add your first brew
                </button>
            </div>
        );
    }

    return (
        <div className="brew-list-vertical">
            {brews.map((brew) => (
                <BrewItem
                    key={brew.id}
                    brew={brew}
                    onEdit={() => onEdit(brew)}
                    onDelete={() => onDelete(brew.id)}
                />
            ))}
        </div>
    );
};

export default BrewList;