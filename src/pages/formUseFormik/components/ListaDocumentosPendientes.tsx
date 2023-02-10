
import { Listar } from '../../../components/Listar';
import { useGetDocumentosPendientesQuery, useGetDocumentosQuery } from '../../../store/apis/gedsysApi';
import { useDispatch, useSelector } from 'react-redux';
import { setDocumentoId } from '../../../store/form/postRequestSlice';
import { RootState } from '../../../store/store';
import { setfileNameSelect } from '../../../store/form/selectFieldSlice';


export const ListaDocumentosPendientes = () => {
    const {data:documentos=[],isLoading:isDocumentsLoading} =useGetDocumentosPendientesQuery('gedsysApi',{ refetchOnFocus: true });
    const{idSelect}=useSelector(((state:RootState)=>state.selectField));
    
    const dispath=useDispatch();
    const selectDocument=()=>{
      dispath(setDocumentoId(idSelect));
      dispath(setfileNameSelect(documentos.filter(d=>d.documentId===idSelect)[0].fileName));
    }
    
  return (
    <>
        <br />
        <h1 className='text-lg text-center'>Documentos Pendientes</h1>
        <br />
        {isDocumentsLoading 
        ? <h3>Cargando...</h3> 
        : <ul className=' h-1/3 w-64 overflow-auto border rounded-lg'>
          {documentos.map(doc=><Listar key={doc.documentId} data={doc} />)} 
        </ul>}
        <button className='btn-primary m-6' onClick={selectDocument} >Seleccionar Documento</button>
    </>
  )
}
