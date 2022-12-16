import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =({title, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(!show);

    
    return(
        <div className="card text-center mb-3" onClick={handleShow}>
            <div className="card-body">
              <img className="card-img-top" alt = "backdrop" src={API_IMG+poster_path} />
              <div className="card-body" >
                  <Modal show={show} onHide={handleShow}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" alt='poster' style={{width:'14rem',float:'right'}}src={API_IMG+poster_path} />
                      <h3>{title}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleShow}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MovieBox;