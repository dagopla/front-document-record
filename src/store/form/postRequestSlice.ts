import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  PostRequest } from '../../interfaces/interfacesForm';

const initialState:PostRequest= {
    documentId:     0,
    radicado:       '',
    tipo:           '',
    radicador:      0,
    seccion:        0,
    serie:          0,
    subserie:       0,
    tipoDocumental: 0,
    destinatario:   0,
    remitente:      0,
    folios:         0,
    fecha:          '',
    asunto:         '',
    nombreRemitente: ''
}

export const postRequestSlice = createSlice({
    name: 'postRequest',
    initialState
    ,
    reducers: {
    
        setSeccion:(state, action: PayloadAction<number>)=>{
            state.seccion=action.payload;
        },
        setSerie:(state, action: PayloadAction<number>)=>{
            state.serie=action.payload;
        },
        setSubSerie:(state, action: PayloadAction<number>)=>{
            state.subserie=action.payload;
        },
        setTipo:(state, action: PayloadAction<string>)=>{
            state.tipo=action.payload;
            
        },
        setRadicadoPor:(state, action: PayloadAction<number>)=>{
            state.radicador=action.payload;
        },
        setTipoDocumental:(state, action: PayloadAction<number>)=>{
            state.tipoDocumental=action.payload;
        },
        setDestinatario:(state, action: PayloadAction<number>)=>{
            state.destinatario=action.payload;
        },
        setRemitente:(state, action: PayloadAction<number>)=>{
            state.remitente=action.payload;
        },
        setFecha:(state, action: PayloadAction<string>)=>{
            state.fecha=action.payload;  
        },
        setFolio:(state, action: PayloadAction<number>)=>{
            state.folios=action.payload;
        },
        setRadicado:(state, action: PayloadAction<string>)=>{
            state.radicado=action.payload;
        },
        setAsunto:(state, action: PayloadAction<string>)=>{
            state.asunto=action.payload;
        },
        setDocumentoId:(state, action: PayloadAction<number>)=>{
            state.documentId=action.payload;
        },
        setSaveAll:(state, action: PayloadAction<PostRequest>)=>{
            state.asunto=action.payload.asunto;
            state.radicado=      action.payload.radicado;
            state.tipo=          action.payload.tipo;
            state.radicador=     action.payload.radicador;
            state.seccion=       action.payload.seccion;
            state.serie=         action.payload.serie;
            state.subserie=      action.payload.subserie;
            state.tipoDocumental=action.payload.tipoDocumental;
            state.destinatario=  action.payload.destinatario;
            state.remitente=     action.payload.remitente;
            state.folios=        action.payload.folios;
            state.fecha=         action.payload.fecha;
            
        },
        setResetAll:(state)=>{
            state.documentId=     0;
            state.radicado=       '';
            state.tipo=           '';
            state.radicador=      0;
            state.seccion=        0;
            state.serie=          0;
            state.subserie=       0;
            state.tipoDocumental= 0;
            state.destinatario=   0;
            state.remitente=      0;
            state.folios=         0;
            state.fecha=          '';
            state.asunto=         '';
            state.nombreRemitente= '';
        },
        

        
    }
});

// Action creators are generated for each case reducer function
export const { 
    setSeccion,
    setSerie,
    setSubSerie,
    setTipo,
    setRadicadoPor,
    setTipoDocumental,
    setDestinatario,
    setRemitente,
    setFecha,
    setFolio,
    setRadicado,
    setAsunto,
    setDocumentoId,
    setResetAll,
    setSaveAll


} = postRequestSlice.actions;