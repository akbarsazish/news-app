import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

export function NewsList() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=45dd2940771a41ec90568a20e58c4244'
        )
        console.log(response.data.articles)
        setNews(response.data.articles)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getArticle()
  }, [])

  useEffect(() => {
    // Send articles in batches...

    const sendNewsBatch = async (batch) => {
      try {
        if (batch.length > 0) {
          const response = await axios.post(
            'http://127.0.0.1:8000/api/createNews',
            { articles: batch },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          console.log(response.data)
        }
      } catch (error) {
        console.error('There was some error', error)
      }
    }

    // Batch size (adjust as needed)
    const batchSize = 10

    // Split the array into batches
    for (let i = 0; i < news.length; i += batchSize) {
      const batch = news.slice(i, i + batchSize)
      sendNewsBatch(batch)
    }
  }, [news])
  return (
    <div>
      {/* {news.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        )
      })} */}
    </div>
  )
}
