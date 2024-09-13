import React from 'react';

export default function NewsArticle(props) {
  function getDate(date) {
    return new Date(date).toLocaleDateString();
  }

  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
      <div className="card">
        <img src={props.image ? props.image : "/download.png"} className="card-img-top" height="200px" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title ? props.title.slice(0, 340) : 'No title available'}</h5>
          <div className='d-flex justify-content-between'>
            <p><strong>Source: {props.source}</strong></p>
            <p>{getDate(props.date)}</p>
          </div>
          <p className="card-text">
            {props.description ? props.description.slice(0, 150).concat("...") : "No description available"}
          </p>
          <a href={props.url} className="btn btn-outline-dark backcolor text-light w-100" target='_blank' rel='noreferrer'>
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}
