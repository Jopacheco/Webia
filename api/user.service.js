import API_URL from './config.js'

export async function createUser(data) {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}