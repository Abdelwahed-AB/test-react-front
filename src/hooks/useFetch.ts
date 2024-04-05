import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosConfig";

const useFetch = (url: string, options:{params :any} = null)=>{
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        (async function(){
            try{
                setLoading(true);
                const response = await axiosInstance.get(url, options);
                setData(response.data);
            }catch(err :any){
                setErr(err);
            }finally{
                setLoading(false);
            }
        })();
    }, [url]);

    return {data, loading, err};
};

export default useFetch;