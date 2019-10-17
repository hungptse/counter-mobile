import { AsyncStorage } from "react-native";
import Base64 from "./base64"
export const GET = async (endpoint, params = {}, headers = {}) => {
   const token = await AsyncStorage.getItem("jwt_token");
   headers["Content-Type"] = "application/json";
   headers["Authorization"] = `Bearer ${token}`;
   return fetch(endpoint, {
      method: "GET",
      headers: headers
   }).then(res => res.json());
};

export const POST = async (endpoint, params = {}, headers = {}, body = {}) => {
   const token = await AsyncStorage.getItem("jwt_token");
   headers["Content-Type"] = "application/json";
   headers["Authorization"] = `Bearer ${token}`;
   return fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
   }).then(res => res.json());
};

export const PUT = async (endpoint, params = {}, headers = {}, body = {}) => {
   const token = await AsyncStorage.getItem("jwt_token");
   headers["Content-Type"] = "application/json";
   headers["Authorization"] = `Bearer ${token}`;
   return fetch(endpoint, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body)
   }).then(res => res.json());
};

export const DELETE = (endpoint, params = {}, headers = {}) => {
   return fetch(endpoint, {
      method: "DELETE",
      headers: headers
   });
};

export const UPLOAD = async data => {
   const form = new FormData();
   form.append("UPLOADCARE_PUB_KEY", "c707f3320aac10d335b9");
   let options = {
      headers: {
         "Content-Type": "multipart/form-data"
      },
      method: "POST",
      body: form
   };
   generateBlob(`${data}`)
   //   options.body.append("file", );
//    const request = new XMLHttpRequest();
//    request.open("POST", "https://upload.uploadcare.com/base");
//    request.send(form);
// return request;
      const res = await fetch("https://upload.uploadcare.com/base", options);
       return await res.json();
};
export const generateBlob = base64URL => fetch(base64URL)
    .then(response => response.blob())
    .then(response => console.log('Your blob is' + response));