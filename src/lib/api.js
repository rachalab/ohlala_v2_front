/**
 * Central API fetcher for Oh lala!
 * Follows Next.js 15+ standards using the native fetch API.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_PATH;

/**
 * Generic API caller
 * @param {string} endpoint - The endpoint to call (e.g., '/content/node/1')
 * @param {Object} options - Standard fetch options + custom query params
 * @returns {Promise<any>}
 */
export async function apiFetch(endpoint, options = {}) {
  const { params = {}, ...fetchOptions } = options;

  // Build URL with query parameters
  const url = new URL(`${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`);
  console.log("obteniendo", url);
  // Append query parameters
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      url.searchParams.append(key, params[key]);
    }
  });

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url.toString(), {
      ...fetchOptions,
      headers: {
        ...defaultHeaders,
        ...fetchOptions.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    throw error;
  }
}

/**
 * Convenience methods for GET and POST
 */
export const api = {
  get: (endpoint, params = {}, options = {}) =>
    apiFetch(endpoint, { ...options, method: 'GET', params }),

  post: (endpoint, body = {}, options = {}) =>
    apiFetch(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) }),

  put: (endpoint, body = {}, options = {}) =>
    apiFetch(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) }),

  delete: (endpoint, options = {}) =>
    apiFetch(endpoint, { ...options, method: 'DELETE' }),
};
