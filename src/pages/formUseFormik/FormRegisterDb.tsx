import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { Formik, Form, } from 'formik';

import { InputSelect } from './components/InputSelect';
import { useGetEntidadesQuery, useGetSeccionesQuery, useGetSeriesQuery, useGetSubseriesQuery, useGetTiposDocumentalesQuery, useGetUsuariosActivosQuery } from '../../store/apis/gedsysApi';

import * as Yup from 'yup';
import { SelectDepend } from './components/SelectDepend';
import { InputText } from './components/InputText';
import { InputTextArea } from './components/InputTextArea';
import { ListaDocumentosPendientes } from './components/ListaDocumentosPendientes';
import { useObjectPost } from './hooks/useObjectPost';
import { setDocumentoId, setResetAll, setSaveAll } from '../../store/form/postRequestSlice';
import { Link } from 'react-router-dom';
import { setDocumentosCargados, setDocumentosCargadosIds } from '../../store/form/documentosCargados';
import { ListaDocumentosRegistrados } from './components/ListaDocumentosRegistrados';
import { usePostDoc } from '../../store/apis/usePostDoc';

export const FormRegisterDb = () => {
  const { documentId: docCargado } = useSelector((state: RootState) => state.postRequest);
  const { idSelect,fileNameSelect } = useSelector((state: RootState) => state.selectField);

  const { data: secciones = [] } = useGetSeccionesQuery('');
  const { data: usuarios = [] } = useGetUsuariosActivosQuery('');
  const { data: entidades = [] } = useGetEntidadesQuery('');
  let reloadListDocument=true
  const dispatch = useDispatch();


  return (<>
    <div className='flex flex-col w-72 h-screen  fixed  overflow-auto '>
      
      <Formik
        initialValues={{
          documentId: 0,
          radicado: '',
          tipo: '',
          radicador: '0',
          seccion: '0',
          serie: '0',
          subserie: '0',
          tipoDocumental: '0',
          destinatario: '0',
          remitente: '0',
          folios: '0',
          fecha: '',
          asunto: '',
          nombreRemitente: ''
        }}
        onSubmit={(values, { setSubmitting,resetForm }) => {
          setSubmitting(true);
          reloadListDocument=false;
          if (confirm("¿Estás seguro de que deseas realizar esta acción?")) {
            values.documentId=docCargado!;
            values.tipo==='envio'
            ?values.nombreRemitente=usuarios.filter(u=>u.id===parseInt(values.remitente))[0].nombre
            :values.nombreRemitente=entidades.filter(e=>e.id===parseInt(values.remitente))[0].nombre
            const { resultPost } = useObjectPost(values);
            console.log(resultPost);
            usePostDoc(resultPost);
            setTimeout(() => {
              alert(`-- DATOS ENVIADOS -- `);
              resetForm();
              dispatch(setDocumentosCargados(fileNameSelect))
              dispatch(setDocumentosCargadosIds(docCargado!))
              dispatch(setResetAll());
            }, 1000);
          }
          setSubmitting(false);
            

          
        }}
        validationSchema={Yup.object({
          tipo: Yup.string()
            .notOneOf(['0'], 'Requerido')
            .required('Requerido'),
          radicado: Yup.string()
            .required('Requerido'),
          // radicador: Yup.string()
          //   .notOneOf(['0'],'Requerido')
          //   .required('Requerido'),
          folios: Yup.number()
            .notOneOf([0], 'Requerido')
            .required('Requerido'),
          fecha: Yup.string()
            .notOneOf([''], 'Requerido')
            .required('Requerido'),
          asunto: Yup.string()
            .max(2500, 'Debe de tener 15 caracteres o menos')
            .notOneOf([''], 'Requerido')
            .required('Requerido'),




        })
        }

      >
        {(formik) => (
          <Form className='flex flex-col w-64 mt-5 px-3 '>
            <InputText
              label='Radicado' name='radicado' type='text' />

            <InputSelect
              label="Tipo"
              name="tipo"
              data={[{ id: 'envio', nombre: 'Envio' },
              { id: 'recepcion', nombre: 'Recepción' }]} />

            <SelectDepend
              label="Radicado Por"
              name='radicador'
              useGetQuery={useGetUsuariosActivosQuery}
            />

            <InputSelect label="Seccion" name="seccion" data={secciones} />

            {formik.getFieldProps('seccion').value != '0'
              ?
              <SelectDepend label="Serie" name="serie" useGetQuery={useGetSeriesQuery} valueQuery={formik.getFieldProps('seccion').value} />
              : <></>}

            {formik.getFieldProps('serie').value != '0' ?
              <SelectDepend label="SubSerie" name="subserie" useGetQuery={useGetSubseriesQuery} valueQuery={formik.getFieldProps('serie').value} />
              : <></>}

            <SelectDepend
              label="Tipo Documental"
              name='tipoDocumental'
              useGetQuery={useGetTiposDocumentalesQuery}
            />
            
            {formik.getFieldProps('tipo').value==='envio' 
            ? <>
              <InputSelect
              label="Destinatario "
              name='destinatario'
              data={entidades}
            /><InputSelect
              label="Remitente"
              name='remitente'
              data={usuarios} /></>
              : <>
              <InputSelect
              label="Destinatario "
              name='destinatario'
              data={usuarios}
            /><InputSelect
              label="Remitente"
              name='remitente'
              data={entidades} /></>}

            <InputText
              label='Folios'
              name='folios'
              type='number'
            />
            <InputText
              label='Fecha'
              name='fecha'
              type='date'
            />
            <div className='fixed bottom-0 left-80 shadow-xl bg-palen-450 rounded-xl p-3'>
              <InputTextArea
                label='Asunto'
                name='asunto'
              />
            </div>

           
            <button type='button' className='btn-primary my-9' onClick={() => formik.resetForm()}>Limpiar</button>
            <button type="submit"
              className='btn-primary  disabled:bg-palen-200'
              disabled={(docCargado! === 0||docCargado != idSelect||formik.isSubmitting)?true:false} >Enviar</button>
            <Link to="/config" className='btn-primary bg-flamingo-300 text-center m-5'>configuración</Link>

          </Form>
        )}


      </Formik>
    </div>
    <div className='mx-5 fixed right-0 top-0 h-screen' >
      {reloadListDocument ?<ListaDocumentosPendientes />:<></>}
      <ListaDocumentosRegistrados/>
    </div>

    <div className='bg-palen-0 h-screen mx-72 shadow-lg shadow-palen-500' >
      {docCargado!>0?<iframe
        src={`${localStorage.getItem("UrlGedsysApi")}/documentos/preview/${docCargado}`}
        className='h-screen w-full'
        title="pdf-viewer"
        />
      :<></>}
      
    </div>
    
  </>


  )
}
