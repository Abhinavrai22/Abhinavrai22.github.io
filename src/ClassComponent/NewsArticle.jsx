import React, { Component } from 'react'

export default class NewsArticle extends Component {
  getDate(date) {
    return new Date(date).toLocaleDateString()
  }
  render() {
    return (
      <>
      <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
      <div class="card">
  <img src={this.props.pic?this.props.pic:"/download.png"} className="card-img-top" height="200px" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title?this.props.title.slice(0,340):""}</h5>
    <br/>
    <div className='d-flex justify-content-between'>
    <p><h3>Source:-{this.props.source}</h3></p>
    <p>{this.getDate(this.props.date)}</p>
    </div>
    <p className="card-text">{this.props.description?this.props.description.slice(0,150).concat("..."):""}</p>
    <a href={this.props.url} class="btn btn-outline-dark backcolor text-light w-100" target='_new' rel='noreferrer'>Read More...</a>
  </div>
</div>
</div>
      </>
    )
  }
}


