import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}

export const InputTextArea = ({ label, ...props }: Props ) => {
    const [ field ] = useField(props)
  return (
    <>
            <label className='label-primary text-palen-0' htmlFor={ props.id || props.name }>{ label }</label>
            <br />
            <textarea cols={70} rows={2} className={'border p-2 border-palen-100 text-justif bg-palen-50 text-palen-900 text-sm rounded-md text-justify hover:bg-blue-100'} 
            { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" className='text-flamingo-500' />
        </>
  )
}
