export function callApi(method: string, url: string, path: string, data?: any) {
  return fetch(url + '/api' + path, {
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method,
  }).then(res => res.json())
}