import axios from 'axios';
import { PostRequest } from '../../interfaces/interfacesForm';

export const usePostDoc = async (documentoRegistro:PostRequest) => {
    const config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }
    try {
        const response = await axios.post<FormData>(`${localStorage.getItem("UrlGedsysApi")!}documentos/registrar`,
         documentoRegistro,
         config);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
}
