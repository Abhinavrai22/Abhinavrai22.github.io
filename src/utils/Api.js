import axios from "axios";
import store from '../store';
import Urls from "../config/apiEndpoints";

const instance = axios.create({
    baseURL: Urls.baseUrl,
    headers: {
        'Authorization': `Bearer ${store.getState().auth.token ?? ''}` // Ensure 'Bearer' prefix if needed
    }
});

// Generic function for logging and handling response/error
const handleResponse = (response) => {
    return response.data; // Return only data to simplify
};

const handleError = (error) => {
    if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error response:", error.response);
    } else if (error.request) {
        // No response was received
        console.error("No response received:", error.request);
    } else {
        // Something else happened
        console.error("Error:", error.message);
    }
    throw error;
};

const Api = {
    get: async ({ url, contentType = 'application/json', show = 1, withCredentials = true }) => {
        try {
            const response = await instance({
                url,
                method: 'GET',
                headers: {
                    'Content-Type': contentType
                },
                withCredentials
            });
            return handleResponse(response);
        } catch (error) {
            return handleError(error);
        }
    },
    post: async ({ url, contentType = 'application/json', data, show = 1, withCredentials = true }) => {
        try {
            const response = await instance({
                url,
                data,
                method: 'POST',
                headers: {
                    'Content-Type': contentType
                },
                withCredentials
            });
            return handleResponse(response);
        } catch (error) {
            return handleError(error);
        }
    },
    delete: async ({ url, data, contentType = 'application/json', show = 1, withCredentials = true }) => {
        try {
            const response = await instance({
                url,
                data,
                method: 'DELETE',
                headers: {
                    'Content-Type': contentType
                },
                withCredentials
            });
            return handleResponse(response);
        } catch (error) {
            return handleError(error);
        }
    },
    patch: async ({ url, data, contentType = 'application/json', show = 1, withCredentials = true }) => {
        try {
            const response = await instance({
                url,
                data,
                method: 'PATCH',
                headers: {
                    'Content-Type': contentType
                },
                withCredentials
            });
            return handleResponse(response);
        } catch (error) {
            return handleError(error);
        }
    },
    put: async ({ url, data, contentType = 'application/json', show = 1, withCredentials = true }) => {
        try {
            const response = await instance({
                url,
                data,
                method: 'PUT',
                headers: {
                    'Content-Type': contentType
                },
                withCredentials
            });
            return handleResponse(response);
        } catch (error) {
            return handleError(error);
        }
    }
};

export default Api;
