import React from 'react'
import './newsitem.css'
const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className='news-app'>
      <div className='news-item'>
        <img className='new-img' src={urlToImage} alt={title} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default NewsItem
