import axios from "axios";


export const POST_FORM = "POST_FORM";
export const FETCH_FORM = "FETCH_FORM";

export function createClientForm(props) {
    console.log(props, "THE PROPS");

    //const request = axios.post(/CONNECT TO FIREBASE/, props);

    const request = {id: 12, message: "WORKING!"};
    return {
        type: POST_FORM,
        payload: request
    };

}

export function fetchForm(id) {
    //const request = axios.get();

    const request = {id: 12, message: "HERE BE FORM"};

    return {
        type: FETCH_FORM,
        payload: request
    };
}






export const UPDATE_COUNT = "UPDATE_COUNT";

export function updateCount() {
    return {
        type: UPDATE_COUNT
    };
}