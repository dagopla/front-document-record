import { useSelector } from 'react-redux';
import { Listar } from '../../../components/Listar';
import { RootState } from '../../../store/store';

export const ListaDocumentosRegistrados = () => {
    const{documentList}=useSelector((state:RootState)=>state.documentosCargados)
  return (
    <div>
        <h1 className='text-lg  text-center'>
            Documentos Cargados</h1>
        <br />
        <ul className=' h-40 overflow-auto'>
          {documentList.map(doc=><li key={doc}  className="">{doc}</li>)} 
        </ul>
    </div>
  )
}
