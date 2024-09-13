import React, { Component } from 'react'
import NewsArticle from './NewsArticle'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Home extends Component {
  constructor(){
    super()
    this.state ={
        articles:[],
        totalResults:0,
        page:1
}
  }
 async getAPIdata(){
  var response
  this.setState({page :this.state.page+1})
  if(this.props.search)
    response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&pageSize=12&page=${this.state.page}&language=${this.props.language}&apiKey=96c79d42d3d34c6f9731c16de49aac6e`)
  else
  response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&language=${this.props.language}&apiKey=96c79d42d3d34c6f9731c16de49aac6e`)
  
    response = await response.json()
    this.setState({articles: response.articles,
      totalResults: response.totalResults})
  }
  fetchData= async()=>{
    this.setState({page:this.state.page+1})
    let response=await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&language=${this.props.language}&apiKey=96c79d42d3d34c6f9731c16de49aac6e`)
    response = await response.json()
    this.setState({
      articles: this.state.articles.concat(response.articles)})
  }

  componentDidMount () {
    this.getAPIdata()
  }
  componentDidUpdate(old){
    if (this.props !== old)
    this.getAPIdata()
  }
  render() {
    return (
      <><h5 className='backcolor text-center text-light p-1 my-1'>{this.props.search ?this.props.search : this.props.q} News Articles</h5>
      <div className='container-fluid'>
        <InfiniteScroll
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.fetchData}
  hasMore={this.state.articles.length < this.state.totalResults}
  loader={<div className='w-100 text-center'><div className="spinner-border text-danger" style={{height:"100px"}} role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>}>
        <div className='row'>
          {this.state.articles.map((item,index)=>{
            return <NewsArticle key={index}
            pic={item.urlToImage}
            title={item.title}
            description={item.description}
            date={item.publishedAt}
            source={item.source.name}
            url= {item.url}
            />
})}
          
         
        </div>
        </InfiniteScroll>
      </div>
      </>
    )
  }
}
