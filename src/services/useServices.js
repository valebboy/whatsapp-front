import axios from 'axios';
import { useState } from 'react';



export const useServices = () => {

    const [isLoading, setIsLoading] = useState(false);

    const urlApi = '/api/';

    const enviarMensaje = (payload) => {

        setIsLoading(true);


        const request = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            url: urlApi,
            data: payload
        }



        let result = axios(request)
            .then(response => {
                console.log('servicio responde: ', response.data);
                setIsLoading(false);
                return response.data;
            })
            .catch((error) => {
                setIsLoading(false);
                console.error('servicio error: ', error);
                return error.response;
            });
        return result;
    };

    return {
        enviarMensaje,
        isLoading
    }
}
