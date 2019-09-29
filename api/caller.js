export const GET = (endpoint, params = {}, headers = {}) => {
    return fetch(endpoint, {
        method : 'GET',
        headers : headers,
    });
};

export const POST = (endpoint, params = {}, headers = {}, body = {}) => {
    headers["Content-Type"] = "Application/json"
    return fetch(endpoint, {
        method : 'POST',
        headers : headers,
        body : JSON.stringify(body)
    }).then(res => res.json());
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
