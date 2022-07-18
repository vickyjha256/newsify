import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="container my-3">
      <div className="card">
        <img style={{ height: '230px' }} src={imageUrl ? imageUrl : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text"> {description} </p>
          <p className="card-text"><b className="text-muted">Source: {author}</b></p>
          <p style={{ fontWeight: 'bolder' }} className="card-text"><small>Last updated: {new Date(date).toUTCString()}</small></p>
          <a style={{width: "100%"}} href={newsUrl} rel="noreferrer" target="_blank" id="readmore" className="btn btn-sm btn-success">Read in Detail</a>
        </div>
      </div>
    </div>
  )
}
export default NewsItem