// export const BASE_URL = "https://swd-backend.hangnoidiachauau.com/api";
export const BASE_URL = "http://192.168.1.8:4000/api"

export const STORE_LIST_ENDPOINT = `${BASE_URL}/store`;
export const HISTORY_LIST_ENDPOINT = `${BASE_URL}/counter_time`
export const LOGIN_ENDPOINT = `${BASE_URL}/auth/login`;
export const CHANGE_PASSWORD_ENDPOINT = `${BASE_URL}/auth/password`;
export const NOTIFICATION_ENDPOINT = `${BASE_URL}/notification`;
export const GET_USER_ENDPOINT = `${BASE_URL}/user/profile`;
export const UPDATE_USER = `${BASE_URL}/user`;
export const CREATE_COUNTER_TIME = `${BASE_URL}/counter_time`;
export const USER_STORE_ENDPOINT = `${BASE_URL}/user_store`;
export const GET_COUNTER_BY_TYPE_STORE_ID = `${BASE_URL}/counter/store_type`;
export const GET_USER_STORE_BY_USER_ID = `${BASE_URL}/user_store/user_id`;
export const GET_COUNTER_TIME_BY_TIME = `${BASE_URL}/counter_time/max`;

export const CURRENT_INVOICE_ENDPOINT = `${BASE_URL}/invoice/current`;
export const ADD_INVOICE_ENDPOINT = `${BASE_URL}/invoice`;

export const GET_ACTIVE_PRICE_LIST_ENDPOINT = `${BASE_URL}/active_price_list/active`;

export const GET_COUNTER_TYPE = `${BASE_URL}/counter_type`;

export const GET_PRICE_DETAIL = `${BASE_URL}/price_detail/detail`;

