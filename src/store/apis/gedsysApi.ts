import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Seccion, UsuarioActivo, Serie, SubSerie, TipoDocumental, Entidad, Documento, PostRequest } from '../../interfaces/interfacesForm';
export const gedsysApi=createApi({
    reducerPath:'gedsysApi',
    baseQuery: fetchBaseQuery({ baseUrl: localStorage.getItem("UrlGedsysApi")! }),
    endpoints: (builder) => ({
        getUsuariosActivos: builder.query<UsuarioActivo[], string>({
          query: () => `/users`,
        }),
        getSecciones: builder.query<Seccion[],string>({
          query: () => `/secciones`,
        }),
        getSeries: builder.query<Serie[], number>({
          query: (idSeccion) => `/series/${idSeccion}`,
        }),
        getSubseries: builder.query<SubSerie[], number>({
          query: (idSerie) => `/subseries/${idSerie}`,
        }),
        getTiposDocumentales: builder.query<TipoDocumental[], string>({
          query: () => `/tipos-documentales`,
        }),
        getEntidades: builder.query<Entidad[], string>({
          query: () => `/entidades`,
        }),
        getDocumentos: builder.query<Documento[], string>({
          query: () => `/documentos/cargados`,
          
        }),
        getDocumentosPendientes: builder.query<Documento[], string>({
          query: () => `/documentos/pendientes`,
        }),
        
        postDocumentoRegistrar: builder.mutation<any, any>({
          query: (body) => ({
            url: `/documentos/registrar`,
            method: 'POST',
            body,
          }),
          
        }),
    }),
})
export const{
    useGetDocumentosPendientesQuery,
    useGetEntidadesQuery,
    useGetDocumentosQuery,
    useGetSeccionesQuery,
    useGetSeriesQuery,
    useGetSubseriesQuery,
    useGetTiposDocumentalesQuery,
    useGetUsuariosActivosQuery,
 
}=gedsysApi