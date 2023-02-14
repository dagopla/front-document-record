import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from '@reduxjs/toolkit/dist/query';
import { ErrorMessage, useField } from 'formik';
type Info={
    id:string|number;
    nombre:string
}
interface Props {
    label: string;
    name: string;
    data?:Info[]
    placeholder?: string;
    [x: string|number]: any;
}


export const InputSelect = ( { label, ...props }: Props ) => {
    
    const [ field ] = useField(props)

    return (
        <>
            <label className='label-primary' htmlFor={ props.id || props.name }>{ label }</label>
            <select { ...field } { ...props } className='text-palen-900 border
             border-palen-200 bg-palen-0 h-9 rounded-sm p-2'
             >
                {props.name==="tipo"?<></>:<option value='0' >Na</option>}
                {props.data?.map((d:any)=>
                <option key={d.id} className=' h-9'  value={d.id}>{d.nombre}</option>)}
            </select>
            <ErrorMessage name={ props.name } component="span" className=' text-flamingo-500' />
        </>
    )
}