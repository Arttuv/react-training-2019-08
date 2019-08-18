import React, {useState, useCallback, useEffect} from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {FaShareSquare} from "react-icons/fa";
import {FaAngleDoubleDown} from "react-icons/fa";

function App() {
  return (
    <Router>
      <Route exact path="/" render ={(props)=> <GlorifiedGallery {...props} photoURL={'https://jsonplaceholder.typicode.com/photos/'} />} />
      <Route path="/photo" component={GlorifiedPhoto}/>

    </Router>
    );
}

function GlorifiedPhoto(props) {

  const [photoDetails, setPhotoDetails] = useState(null);
  /**
   * useEffect-hook for background data fetch.
   */
  console.log(props);
  useEffect(() => {
    const getPhotoInfo = async() => {
      const searchParams = new URLSearchParams(window.location.search);
     fetch('https://jsonplaceholder.typicode.com/photos/' + searchParams.get('id'))
     .then(response => {
       return response.json();
     })
     .then((data) => { 
        console.log(data);
        var newObject = {};
        newObject['id'] = data['id'];
        newObject['url'] = data['url'];
        newObject['title'] = data['title'];
        setPhotoDetails(newObject);
     })
   };

   getPhotoInfo();

  }, []);
 
  return (
    <div>
      <h1>Photo Details</h1>
      {photoDetails != null ? (
      <h1>{photoDetails.id}</h1>
      ) : null}
    </div>

  );
}

const NewCustomFooter = ({ currentView, modalProps }) => {

  return (
    <div className="container-fluid w-100 d-flex justify-content-center text-center">
      <span className="text-light">{currentView.title}</span>
      <button type="button" className="btn btn btn-outline-primary align-middle" onClick={() => {
        console.log(currentView);
        console.log(modalProps);
        window.open(currentView.src)}}>
        <FaShareSquare />
      </button>
      <Link to={{
        pathname: '/photo',
        state: {
          id: currentView.id
        }
      }}>Details</Link>
      <button type="button" onClick={() => {
        window.open("/photo?id=" + currentView.id);
      }}>Another details</button>
    </div>);
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
          newObject['title'] = item.title;
          newObject['id'] = item.id;
          newObject['albumId'] = item.albumId;
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
              components={{Footer: NewCustomFooter}}
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
              <FaAngleDoubleDown />
            </button>
            :
            <button type="button" className="btn btn btn-outline-primary disabled">
              <FaAngleDoubleDown />
            </button>}
        </div>
        : null}
      </nav>
  );
}

function PaginationNext(props) {

}

export default App;
