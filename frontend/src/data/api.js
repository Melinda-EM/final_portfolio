export const API_URL = import.meta.env.VITE_API_URL

export const apiClient = {
    async get(endpoint) {
        const response = await fetch(`${API_URL}${endpoint}`);
        return response.json();
    },

    async post(endpoint, data) {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
}