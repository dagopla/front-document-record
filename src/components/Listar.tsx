
import { useDispatch, useSelector } from 'react-redux';
import { useToggle } from '../hooks/useToggle';
import { Documento } from '../interfaces/interfacesForm'
import { setfileNameSelect, setSelectField } from '../store/form/selectFieldSlice';
import { RootState } from '../store/store';
type Props={
    data: Documento;
}

export const Listar = ({data,}:Props) => {
    const{idSelect}=useSelector(((state:RootState)=>state.selectField));
    const {documentosIdList}=useSelector((state:RootState)=>state.documentosCargados)
    const dispatch=useDispatch();
    
    const handleList=()=>{
        
        dispatch(setSelectField(data.documentId))
    }
    
    
   
  return (
    <>
     <li onClick={handleList} 
     className={'border-b cursor-pointer text-clip py-2 text-justify px-2 text-sm transition-all '
     .concat((data.documentId===idSelect) ?'border-blue-600 border-b-8 ':'')
     .concat((documentosIdList.includes(data.documentId))?'bg-blue-300 text-palen-450':'')} >
      {(data.fileName==='')?'Sin Nombre':data.fileName}</li>

    </>
  )
}
