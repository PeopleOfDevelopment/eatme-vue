import axios, { AxiosRequestConfig } from 'axios'
import { toRaw, unref } from 'vue'

const _axios = axios.create({
  baseURL: 'localhost:7070',
  withCredentials: true,
})

/**
 * GET 요청을 한다.
 * @param url `string` 요청할 url 경로
 * @param data ? `any` 요청할 데이터
 * @param config ? `AxiosRequestConfig` axios의 request 옵션
 *
 * @return
 * ```
 * Promise<{
 *   data: any,
 *   [key: string]: any
 * }>
 * ```
 */
async function get(url: string, data?: any, config?: AxiosRequestConfig) {
  const plainData = toRaw(unref(data)) || {}
  if (plainData) {
    url +=
      '?' +
      Object.keys(plainData)
        .map(function (k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(plainData[k])
        })
        .join('&')
  }
  return (await response(url, undefined, config, true))?.data
}

/**
 * POST 요청을 한다.
 * @param url `string` 요청할 url 경로
 * @param data ? `any` 요청할 데이터
 * @param config ? `AxiosRequestConfig`
 *
 * @return
 * ```
 * {
 *   data: T,
 *   [key: string]: any
 * }
 * ```
 */
async function post(url: string, data?: any, config?: AxiosRequestConfig) {
  const plainData = toRaw(unref(data)) || {}
  
  return (await response(url, plainData, config))?.data
}

async function response(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
  isGetMethod?: boolean
) {
  if (typeof url !== 'string') throw 'http 사용시 url은 string 이어야 합니다.'
  data = toRaw(unref(data))
  let result
  if (isGetMethod) {
    result = await _axios.get(url, config)
  } else {
    result = await _axios.post(url, data, config)
  }
  return result
}

export default { get, post, response }