import React, {useState, useCallback, useEffect} from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" render ={(props)=> <GlorifiedGallery {...props} photoURL={'https://jsonplaceholder.typicode.com/photos/'} />} />
    </Router>
    );
}

function GlorifiedGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [fetchedPhotos, setFetchedPhotos] = useState(null);
  const [pagination, setPagination] = useState(null);
  const[ page, setPage] = useState(1);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const nextPage = () => {
    setPage(page + 1);
  }

  const previousPage = () => {
    setPage(page - 1);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  /**
   * useEffect-hook for background data fetch.
   */
  useEffect(() => {
   const fetchPhotos = async() => {
    fetch(props.photoURL + '?_page=' + page + '&limit=12')
    .then(response => {
      var parse = require('parse-link-header');
      var links = parse(response.headers.get('Link'));
      setPagination(links);
      return response.json();
    })
    .then((data) => { 
        var converted = data.map(item => {
          var newObject = {};
          newObject['src'] = item.url;
          var size = getRandomInt(3) + 1;
          newObject['width'] = size;
          newObject['height'] = size;
          return newObject;
        });
        console.log(data);
        console.log(converted);
        //(fetchedPhotos == null) ? setFetchedPhotos(converted) : setFetchedPhotos(fetchedPhotos.push(converted));
        if(fetchedPhotos == null) {
          setFetchedPhotos(converted);
        } else {
          setFetchedPhotos(fetchedPhotos.concat(converted));
        }
        //setFetchedPhotos(fetchPhotos);
    })
  };

  fetchPhotos();

  }, [page]);

  return (
    <div>
      {fetchedPhotos != null ? (
      <Gallery photos={fetchedPhotos} onClick={openLightbox} />
      ) : null}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={fetchedPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      
      <SimplePagination pagination={pagination} nextPage={nextPage} previousPage={previousPage} />

    </div>
  );
}

function SimplePagination(props) {
  return (  
    <nav>
      {props.pagination != null ?

        <div className="container-fluid w-100 d-flex justify-content-center">
          
          {props.pagination.hasOwnProperty('next') ? 
            <button type="button" className="btn btn btn-outline-primary align-middle" onClick={props.nextPage}>
              <img src="./arrow_down.png"/>
            </button>
            :
            <button type="button" className="btn btn btn-outline-primary disabled">
              <img src="./arrow_down.png"/>
            </button>}
        </div>

        /*<ul className="pagination justify-content-center">
          {props.pagination.hasOwnProperty('prev') ? 
              <li className="page-item"><a className="page-link" onClick={props.previousPage} tabIndex="-1">Previous</a></li> :
              <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">Previous</a></li>
          }
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          {props.pagination.hasOwnProperty('next') ? 
              <li className="page-item"><a className="page-link" onClick={props.nextPage} tabIndex="-1">Next</a></li> :
              <li className="page-item disabled"><a className="page-link" tabIndex="-1">Next</a></li>
          }
        </ul>*/
        : null}
      </nav>
  );
}

function PaginationNext(props) {

}

export default App;
