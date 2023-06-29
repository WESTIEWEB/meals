import axios from 'axios';

export const apiPost = async ( url: string, data: any ) => {
    if(!data) return  await axios.post( url );
    
    return await axios.post( url, data );
}

export const apiGet = async ( url: string ) => {
    return await axios.get( url );
}