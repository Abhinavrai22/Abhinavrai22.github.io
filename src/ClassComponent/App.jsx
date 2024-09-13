import React, { Component } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from  './Home'
import Footer from './Footer'
import NewsArticle from './NewsArticle'
export default class App extends Component {
  constructor(){
    super()
    this.state ={
      language:"hi",
      search:""
  }
}
changeLanguage=(data)=>{
  this.setState({language: data})
}
changeSearch=(data)=>{
  this.setState({search : data})
}
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}></Navbar>
      <Routes>
      <Route path="/all" element={<Home q='All'language={this.state.language} search={this.state.search}/>}/>
      <Route path="/science" element={<Home q='Science' language={this.state.language} search={this.state.search}/>} />
      <Route path="/sports" element={<Home q='Sports'language={this.state.language} search={this.state.search}/>}/>
      <Route path="/business" element={<Home q='Business' language={this.state.language} search={this.state.search}/>}/>
      <Route path="/technology" element={<Home q='Technology' language={this.state.language} search={this.state.search}/>}/>
      <Route path="/medical" element={<Home q='Medical' language={this.state.language} search={this.state.search}/>}/>
      <Route path="/bollywood" element={<Home q='Bollywood' language={this.state.language} search={this.state.search}/>} />
      <Route path="/music" element={<Home q='Music' language={this.state.language} search={this.state.search}/>} />
      <Route path="/crime" element={<Home q='Crime' language={this.state.language} search={this.state.search}/>} />
      <Route path="/hollywood" element={<Home q='Hollywood' language={this.state.language} search={this.state.search}/>} />
      <Route path="/weather" element={<Home q='Weather' language={this.state.language} search={this.state.search}/>} />
      <Route path="/jokes" element={<Home q='Jokes' language={this.state.language} search={this.state.search}/>} />
      </Routes>
      <NewsArticle/>
      <Footer/>
      </BrowserRouter>
      </>
    )
  }
}


