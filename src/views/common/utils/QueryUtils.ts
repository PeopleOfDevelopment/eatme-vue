import http from "./http"
export class QueryUtils {
  async query<T>(url?: string, condData?: any) {
    if(!url) {
      throw 'url이 빈값입니다.'
    }
  
    try{
      const response = await http.post(url, condData)
      return response.data
    }catch(e) {
      console.error('query error', e)
    }
  }
}