const dotenv = require('dotenv').config();
import axios from 'axios';


const apiUrl = process.env.API_URL || "https://apipre.pagoplux.com/intv1/" ;
const username = process.env.ID_CLIENTE || "id_cliente";  
const password = process.env.CLIENTE_PASSWORD|| "cliente_password";


export const getTransactionById = async (idTransaction: string): Promise<any> => {
    try {
        console.log(username, password, apiUrl)
        console.log(idTransaction)
        const response = await axios.get(`${apiUrl}integrations/getTransactionByIdStateResource?idTransaction=${idTransaction}`, {
            auth: {
                username: username,
                password: password  
            }
        });
      
        console.log(response.data,'response')
        return response.data;
    } catch (error) {
        console.error('Error fetching transaction:', error);
        throw error;
    }
};
