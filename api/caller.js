import { AsyncStorage } from 'react-native';

export const GET = async (endpoint, params = {}, headers = {}) => {
    const token = await AsyncStorage.getItem('jwt_token');
    headers["Content-Type"] = "application/json";
    headers["Authorization"] = `Bearer ${token}`;
    return fetch(endpoint, {
        method : 'GET',
        headers : headers,
    }).then(res => res.json());
};

export const POST = async (endpoint, params = {}, headers = {}, body = {}) => {
    headers["Content-Type"] = "application/json"
    return fetch(endpoint, {
        method : 'POST',
        headers : headers,
        body : JSON.stringify(body)
    }).then(res => res.json());
};

export const PUT = async (endpoint, params = {}, headers = {}, body = {}) => {
    const token = await AsyncStorage.getItem('jwt_token'); 
    headers["Content-Type"] = "application/json";
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
