import { useSelector } from 'react-redux';
import { PostRequest } from '../../../interfaces/interfacesForm';
import { useGetUsuariosActivosQuery } from '../../../store/apis/gedsysApi';
import { RootState } from '../../../store/store';


export interface ResultForm{
    documentId:     number;
    radicado:       string;
    tipo:           string;
    radicador:      string;
    seccion:        string;
    serie:          string;
    subserie:       string;
    tipoDocumental: string;
    destinatario:   string;
    remitente:      string;
    folios:         string;
    fecha:          string;
    asunto:         string;
    nombreRemitente:string;
}
export const useObjectPost = (obj:ResultForm) => {
    const resultPost:PostRequest={
        documentId:    obj.documentId,
        radicado:      obj.radicado ,
        tipo:          obj.tipo,
        radicador:     parseInt(obj.radicador),
        seccion:       parseInt(obj.seccion) ,
        serie:         parseInt(obj.serie) ,
        subserie:      parseInt(obj.subserie) ,
        tipoDocumental:parseInt(obj.tipoDocumental) ,
        destinatario:  parseInt(obj.destinatario) ,
        remitente:     parseInt(obj.remitente) ,
        folios:        parseInt(obj.folios) ,
        fecha:         obj.fecha,
        asunto:        obj.asunto ,
        nombreRemitente: obj.nombreRemitente,
      }
  return {
    resultPost
  }
}
