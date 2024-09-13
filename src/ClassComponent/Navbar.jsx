import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:""
    }
  }
  getData(e){
   this.setState({search: e.target.value})
  }
  postData=(e)=>{
   e.preventDefault()
   this.props.changeSearch(this.state.search)
  }
   render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg backcolor">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="#">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  fw-semibold active" aria-current="page" to="/all" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/science" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/sports" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/business" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/technology" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/medical" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Medical</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/bollywood" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Bollywood</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/music" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Music</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/crime" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Crime</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fw-semibold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item fw-semibold" to="/hollywood" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Hollywood</Link></li>
            <li><Link className="dropdown-item fw-semibold" to="/weather" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Weather</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item fw-semibold" to="/jokes" onClick={()=>{this.props.changeSearch("")
          this.setState({search:""})}}>Jokes</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fw-semibold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </Link>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item fw-semibold"  onClick={()=>this.props.changeLanguage('hi')}>Hindi</button></li>
            <li><button className="dropdown-item fw-semibold"  onClick={()=>this.props.changeLanguage("en")}>English</button></li>
            </ul>
          </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>this.postData(e)}>
        <input className="form-control me-2" type="search" placeholder="Search" name='search' onChange={(e)=>this.getData(e)} aria-label="Search" value={this.state.search}/>
        <button className="btn btn-outline-light" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
  }
}

