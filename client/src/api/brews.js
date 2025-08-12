const API_URL = '/api/brews';

export async function getBrews(method) {
    const url = method ? `${API_URL}?method=${encodeURIComponent(method)}` : API_URL;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch brews');
    return res.json();
}

export async function createBrew(brew) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(brew),
    });
    if (!res.ok) throw new Error('Failed to create brew');
    return res.json();
}

export async function updateBrew(id, brew) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(brew),
    });
    if (!res.ok) throw new Error('Failed to update brew');
    return res.json();
}

export async function deleteBrew(id) {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete brew');
}