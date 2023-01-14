const api = (() => {
    const BASE_URL = 'https://test.employee.tokoweb.xyz/api';

    async function _fetchWithAuth(url, options = {}) {
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${getAccessToken()}`,
            },
        });
    }

    function putAccessToken(token) {
        localStorage.setItem('accessToken', token);
    }

    function getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    async function login({ email, password }) {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (!status) {
            throw new Error(message);
        }

        const { data } = responseJson;

        return data;
    }

    async function logout() {
        const response = await _fetchWithAuth(`${BASE_URL}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (!status) {
            throw new Error(message);
        }

        const { data } = responseJson;

        return data;
    }

    async function getAllProducts() {
        const response = await _fetchWithAuth(`${BASE_URL}/product`);

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (!status) {
            throw new Error(message);
        }

        const { data } = responseJson;

        return data;
    }


    async function getProduct(product_id) {
        const response = await _fetchWithAuth(`${BASE_URL}/product/show?product_id=${product_id}`);

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (!status) {
            throw new Error(message);
        }

        const { data } = responseJson;

        return data;
    }

    async function addProduct({ name, price }) {
        const response = await _fetchWithAuth(`${BASE_URL}/product/store`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                price,
            }),
        });

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (!status) {
            throw new Error(message);
        }

        const { data } = responseJson;

        return data;
    }

    async function updateProduct({ product_id, name, price }) {
        const response = await _fetchWithAuth(`${BASE_URL}/product/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_id,
                name,
                price,
            }),
        });

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (!status) {
            throw new Error(message);
        }

        const { data } = responseJson;

        return data;
    }

    async function deleteProduct(product_id) {
        const response = await _fetchWithAuth(`${BASE_URL}/product/${product_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (!status) {
            throw new Error(message);
        }

        return message;
    }

    return {
        login,
        logout,
        getAllProducts,
        getProduct,
        addProduct,
        updateProduct,
        deleteProduct,
        putAccessToken
    };
})();

export default api;
