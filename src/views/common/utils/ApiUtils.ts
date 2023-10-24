import axios from "axios"
export class ApiUtils {
  async post<T>(url?: string, condData?: any, header?: any) {
    if(!url) {
      throw 'url이 빈값입니다.'
    }
  
    try{
      const response = await axios.post(url, condData, header)
      return response.data
    }catch(e) {
      console.error('query error', e)
    }
  }
}