import React,{useState,useEffect} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';

const APIKEY = process.env.REACT_APP_API_URL


function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  useEffect(() => {
    console.log(APIKEY)
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>
          
            <Form className="d-flex centre" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="primary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Please try again with different keywords</h2>
      )}
    </div>   
    </>
   
  );
}

export default App;
