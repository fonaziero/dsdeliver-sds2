import axios from "axios";


const API_URL = 'https://victor-sds.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}


export function onConfirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}