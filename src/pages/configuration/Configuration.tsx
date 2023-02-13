import { useState } from "react";
import { Link } from "react-router-dom";
import { DocumentsToLoad } from './DocumentsToLoad';


export const Configuration = () => {
    const [url, setUrl] = useState<string>('');
    
    const changeUrlQuery=()=>{
        
        localStorage.setItem("UrlGedsysApi", url);
        
    }
    
  return (
    <div className="flex flex-wrap">
    <div className="m-24   shadow-md shadow-palen-0 p-10">
      <form onSubmit={changeUrlQuery} className="flex flex-col">
        <h1>Ruta de la Api</h1>
        <input type="text" id="url" placeholder="http://localhost:8090/api" 
        className="my-5 border border-palen-200 bg-palen-0 h-9 rounded-sm p-2 text-palen-900" 
        value={url}
        onChange={(e)=>setUrl(e.target.value)}/>
        <button type="submit" className="btn-primary" >Elegir</button>
        <Link to="/" className='btn-primary bg-flamingo-300 text-center m-5'>Formulario</Link>
      </form>
    </div>
    <div  className="m-24  shadow-md shadow-palen-0 p-10">
      <DocumentsToLoad/>
    </div>
        
    </div>
  )
}
