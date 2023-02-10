import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password'|'number'|'date';
    placeholder?: string;
    [x: string]: any;
}


export const InputText = ( { label, ...props }: Props ) => {

    const [ field ] = useField(props)

    return (
        <>
            <label className='label-primary' htmlFor={ props.id || props.name }>{ label }</label>
            <input className='border border-palen-200 bg-palen-0 h-9 rounded-sm p-2 text-palen-900' { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" className='text-flamingo-500' />
        </>
    )
}