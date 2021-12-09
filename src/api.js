const apiUrl = 'http://localhost:3333'

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

const requestApi = (url, method = 'GET', extra = {}) => {
  const options = { method, headers, ...extra }
  return fetch(url, options).then(res => res.json())
}

export const getTasks = () => requestApi(`${apiUrl}/tasks`)

export const postTask = task => {
  requestApi(`${apiUrl}/tasks`, 'POST', { body: JSON.stringify(task) })
}
