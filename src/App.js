import React from "react";
import "./App.css"
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import AddModal from "./Components/AddModal"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openmodal: false,
      modalimage:"",
      setShow: false,
      books: [],
      initialstate: "search your books here...",
      mySearch: ""
    };
  }

  componentDidMount() {
    
      fetch("https://api.jsonbin.io/b/5ea833484c87c3359a632938")
      .then(response=>response.json())
      .then(response=>{
        this.setState({
          books: response.books
        })
          
      })
      .catch(err=>console.log(err))
  }
  onChange = (e) => {
     this.setState({mySearch: e.target.value})
  }
  handleclick = (img) => {
    this.setState({modalimage: img, openmodal: true})
  }

  
  render() {
    
    
    const books = this.state.books.filter(book => {
      return book.title.toLowerCase().includes(this.state.mySearch.toLowerCase()) || book.description.toLowerCase().includes(this.state.mySearch.toLowerCase())})
      .map((book, index)=>{
      return (

        <div key={index}>
      <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={book.cover} alt="image" style = {{height:"400px", width:"300px"}}/>
                </div>
                <div className="flip-card-back">
                  <div>
                  <AddModal pic = {book.details} title = {book.title} />
                  </div>
                  <div>
                  <h1>{book.title}</h1>
                  <p>{book.description}</p>
                  <p>{book.language}</p>
                  </div>
                </div>
              </div>
              </div>
      </div>
      )
    })
      return (
        <div className="App">
          
          <div className="nav-custom">
          <Navbar id="nav-custom" bg="light" expand="lg">
          <Navbar.Brand id="nav-brand" href="#home">BOOKSTORE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onChange} />
              
            </Form>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <div className="flex">
        {books}
        </div>
        <footer>
          <p>&copy; 2020  | All Rights Reserved</p>
        </footer>
        </div>
      );
}
}
export default App