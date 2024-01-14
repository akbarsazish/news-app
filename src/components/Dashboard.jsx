import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export function Dashboard () {
  const {params} = useParams();
  const [news, setNews] = useState('')

  
  async function fetchData() {
      let url = 'https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=a186bd39-09ff-432c-a22b-1c69cb8f295c';
      try {
          const response = await axios.get(url);
          console.log(response.data);
      } catch (error) {
          console.error('Error:', error);
      }
  }
  
  fetchData();
  

  


//   const apiKey = '45dd2940771a41ec90568a20e58c4244'
//   const url = `https://newsapi.org/v2/everything?q=Apple&from=2024-01-05&sortBy=popularity&apiKey=${apiKey}`

//  useEffect(()=>{
//   axios.get(url).then((respons)=>{
//     setNews(respons.data.articles)
//   })

//  }, [])

//  useEffect(()=>{
//   axios.post('http://192.168.10.21:8000/api/createNews', {news}).then((respons)=>{
//   }).catch((error)=>{
//     console.log(error)
//   })

//  }, [])
 
  return (
    <>
     <h1> Hello </h1>
    </>
  )
}

