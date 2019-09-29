import { AsyncStorage } from 'react-native';

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

export const PUT = async (endpoint, params = {}, headers = {}, body = {}) => {
    const token = await AsyncStorage.getItem('jwt_token');
    headers["Content-Type"] = "Application/json";
    headers["Authorization"] = `Bearer ${token}`;
    return fetch(endpoint, {
        method : 'PUT',
        headers : headers,
        body : JSON.stringify(body)
    }).then(res => res.json());;
};


export const DELETE = (endpoint, params = {}, headers = {}) => {
    return fetch(endpoint, {
        method : 'DELETE',
        headers : headers,
    });
};
