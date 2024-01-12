import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export function Dashboard () {
  const {params} = useParams();
  const [news, setNews] = useState('')


const options = {
  method: 'GET',
  url: 'https://google-news-api1.p.rapidapi.com/search',
  params: {
    language: '<REQUIRED>'
  },
  headers: {
    'X-RapidAPI-Key': '137494cab9msh33a37a92275f6ebp15d6bfjsn893894bf8f50',
    'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
  }
};

try {
	const response =  axios.request(options);
	console.log("new api ", response.data);
} catch (error) {
	console.error(error);
}


  const apiKey = '45dd2940771a41ec90568a20e58c4244'
  const url = `https://newsapi.org/v2/everything?q=Apple&from=2024-01-05&sortBy=popularity&apiKey=${apiKey}`

 useEffect(()=>{
  axios.get(url).then((respons)=>{
    setNews(respons.data.articles)
  })

 }, [])

 useEffect(()=>{
  axios.post('http://192.168.10.21:8000/api/createNews', {news}).then((respons)=>{
  }).catch((error)=>{
    console.log(error)
  })

 }, [])
 
 console.log(news)
  return (
    <>
   
    </>
  )
}

