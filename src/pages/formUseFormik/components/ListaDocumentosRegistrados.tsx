import { useSelector } from 'react-redux';
import { Listar } from '../../../components/Listar';
import { RootState } from '../../../store/store';

export const ListaDocumentosRegistrados = () => {
    const{documentList}=useSelector((state:RootState)=>state.documentosCargados)
  return (
    <div>
        <h1 className='text-lg  text-center'>
            Documentos Cargados</h1>
        <ul className='h-40 w-64 overflow-auto'>
          {documentList.map((doc,index)=><li key={index} 
           className="border-blue-400 rounded-md border my-1">{doc}</li>)} 
        </ul>
    </div>
  )
}
