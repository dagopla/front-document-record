import axios from "axios";
import { useState } from 'react';

export const DocumentsToLoad = () => {
    const [statusRequest, setStatusRequest] = useState<number>(0)
    const handleRequestDocumentsToLoad = async () => {
        try {
            const response = await axios.get(`${localStorage.getItem("UrlGedsysApi")!}/documentos/cargar`,);
            console.log(response);
            setStatusRequest(response.status);
        } catch (error) {
            console.error(error);
        }
    }

    let messageStatusResquest=<></>;
    if (statusRequest===200) {
        messageStatusResquest=<>
        <h2> <b>No</b> Hubo cambios en los documentos pendientes.</h2>
        <small>No se agregaron documentos.</small>
        </>
    }
    if(statusRequest===201){
        messageStatusResquest=<>
        <h2>Hubo cambios en los documentos pendientes.</h2>
        <small>Se agregaron documentos.</small>
        </>
    }

    return (<>
        <h1 className="text-3xl">Documentos por Cargar</h1>
        <br />
        <button className="btn-primary m-5" onClick={handleRequestDocumentsToLoad}>Documentos por cargar</button>
        <br />
        {messageStatusResquest}
    </>

    )
}