import axios, { AxiosResponse } from 'axios';

export async function getAPI<T>(url: string): Promise<T> {
    const response =  await axios.get<T>(url)
    return response.data;
}

export async function postAPI<T>(url: string, body: T): Promise<AxiosResponse> {
    const response = await axios.post(url, body);
    return response;
}

export async function deleteAPI(url: string): Promise<AxiosResponse> {
    const response = await axios.delete(url);
    return response;
}
