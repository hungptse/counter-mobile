export const GET = (endpoint, params = {}, headers = {}) => {
    return fetch(endpoint, {
        method : 'GET',
        headers : headers,
    });
};

export const POST = (endpoint, params = {}, headers = {}) => {
    return fetch(endpoint, {
        method : 'POST',
        headers : headers,
    });
};

export const PUT = (endpoint, params = {}, headers = {}) => {
    return fetch(endpoint, {
        method : 'PUT',
        headers : headers,
    });
};


export const DELETE = (endpoint, params = {}, headers = {}) => {
    return fetch(endpoint, {
        method : 'DELETE',
        headers : headers,
    });
};
