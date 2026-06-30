const BASE_URL = 'http://localhost:5000/api';
/**
 * Perform login API request
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<object>} response data
 */
export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }
  return data;
}

/**
 * Perform signup API request
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<object>} response data
 */
export async function signup(name, email, password) {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Signup failed');
  }
  return data;
}
