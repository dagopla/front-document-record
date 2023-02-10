export interface Documento {
    documentId:       number;
    fileName: string;
}

export interface Entidad {
    id:     number;
    nombre: string;
}
export interface TipoDocumental {
    id:     number;
    nombre: string;
}
export interface SubSerie {
    id:     number;
    nombre: string;
}
export interface Serie {
    id:     number;
    nombre: string;
}
export interface Seccion {
    id:     number;
    nombre: string;
}
export interface UsuarioActivo {
    id:     number;
    nombre: string;
}
export interface PostRequest {
    documentId?:     number;
    radicado:       string;
    tipo:           string;
    radicador:      number;
    seccion:        number;
    serie:          number;
    subserie:       number;
    tipoDocumental: number;
    destinatario:   number;
    remitente:      number;
    folios:         number;
    fecha:          string;
    asunto:         string;
    nombreRemitente:string;
}
export interface Asunto{
    asunto:string|null;
}