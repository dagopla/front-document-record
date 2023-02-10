import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from "@reduxjs/toolkit/dist/query"
import { Serie } from "../../../interfaces/interfacesForm"
import { useGetSeriesQuery } from "../../../store/apis/gedsysApi"
import { InputSelect } from "./InputSelect";
interface Props{
    useGetQuery:any;
    valueQuery?:string|number;
    label: string;
    name: string;
}

export const SelectDepend = ({useGetQuery,valueQuery='',...props}:Props) => {
    const {data,isLoading}=useGetQuery(valueQuery)
  return (
    <>
    {isLoading?<></>:<InputSelect label={props.label} name={props.name} data={data}/>}
    </>
  )
}
