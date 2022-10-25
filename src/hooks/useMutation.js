import axios from 'axios'

import { sanity } from '../config'

const { projectId, dataset, writeToken } = sanity;

export default async function useMutation(input) {
  const baseUrl = `https://${projectId}.api.sanity.io`;
  const version = 'v2022-10-24';
  const url = `${baseUrl}/${version}/data/mutate/${dataset}`;
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${writeToken}`
  }
  
  const payload = {
    mutations: [
      input
    ]
  }
  
  const axiosConfig = {
    headers,
    withCredentials: true
  }
  
  console.log(payload)
  console.log(headers)
  console.log(url)
  
  await axios.post(url, payload, axiosConfig).then((res) => console.log(res, 'reee'))
  .catch((e) => console.log(e, 'eee'))
}
