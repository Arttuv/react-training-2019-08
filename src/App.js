import React, {useState, useCallback, useEffect} from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './App.css';
import { photos } from "./photos";
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
  const [fetchedPhotos, setFetchedPhotos] = useState(photos);
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

  /**
   * useEffect-hook for background data fetch.
   */
  useEffect(() => {
   const fetchPhotos = async() => {
    fetch(props.photoURL + '?_page=' + page + '&limit=10')
    .then(response => {
      var parse = require('parse-link-header');
      var links = parse(response.headers.get('Link'));
      console.log(typeof(links));
      console.log(links);
      console.log(links['next']);
      setPagination(links);
      return response.json();
    })
    .then((data) => { 
        var converted = data.map(item => {
          var newObject = {};
          newObject['src'] = item.url;
          newObject['width'] = 1;
          newObject['height'] = 1;
          return newObject;
        });
        console.log(data);
        console.log(converted);
        setFetchedPhotos(converted);
    })
  };

  fetchPhotos();

  }, [page]);

  return (
    <div>
      <Gallery photos={fetchedPhotos} onClick={openLightbox} />
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
        <ul className="pagination justify-content-center">
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
        </ul>
        : null}
      </nav>
  );
}

function PaginationNext(props) {

}

export default App;
