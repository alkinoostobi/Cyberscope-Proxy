import axios from 'axios';

export async function fetchData(endpoint) {
    try {
        const response = await axios.get(`http://localhost:8081/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        throw new Error(`Failed to fetch ${endpoint}`);
    }
}