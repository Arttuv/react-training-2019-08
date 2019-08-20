import React, {useState, useCallback, useEffect} from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import {FaAngleDoubleDown, FaShareSquare, FaInfo} from "react-icons/fa";
import './App.css';

const responseLinkParse = require('parse-link-header');

function App() {
  return (
    <HashRouter basename="/">
      <Switch >
        <Route exact path="/" component={GlorifiedGallery} />
        <Route path="/photo/:id" component={GlorifiedPhoto}/>
      </Switch>
    </HashRouter>
    );
}

/**
 * Shows breadcrumb-style navigation.
 * 
 * @param {activePage} props 
 */
function TopNavbar(props) {
  
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href="#">PhotoApp</a>
      
      <div>

      {(props.activePage) ? 
      <ul className="navbar-nav">
          
          {props.activePage==='photos' ? 
            <li className="nav-item active">
                <a className="nav-link" href="#">Photos <span className="sr-only">(current)</span></a>
            </li>
          : 
          <li className="nav-item">
                <a className="nav-link" href="#">Photos <span className="sr-only">(current)</span></a>
            </li>
          }
          
          {props.activePage==='photo' ? 
            <li className="nav-item active">
                <a className="nav-link" href="#">Photo Details<span className="sr-only">(current)</span></a>
            </li>
          : null}
        </ul>
       : null}

      </div>  
    </nav>
  );
}

/**
 * Component to show a single photo with detailed info. Should get the 
 * id of the photo as a parameter.
 * @param {props.mathc.params.id} props 
 */
function GlorifiedPhoto(props) {
  const [photoDetails, setPhotoDetails] = useState(null);
  
  /**
   * useEffect-hook for background data fetch.
   */
  useEffect(() => {
    const getPhotoInfo = async() => {
     fetch('https://jsonplaceholder.typicode.com/photos/' + props.match.params.id)
     .then(response => {
       return response.json();
     })
     .then((data) => { 
        var newObject = {};
        newObject.id = data['id'];
        newObject.url = data['url'];
        newObject.title = data['title'];
        setPhotoDetails(newObject);
     })
     .catch(error => console.error('Error:', error));
   };

   getPhotoInfo();

  }, [setPhotoDetails, props.match.params.id]);
 
  return (
      <div>
        <TopNavbar activePage="photo"/>
        
        {photoDetails != null ? (

          <main role="main" className="container photo-details">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-8">
                  <img src={photoDetails.url} className="card-img" alt={photoDetails.title} />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">{photoDetails.title}</h5>
                    <p className="card-text">Link to <a href={photoDetails.url}>original</a></p>
                    <p className="card-text">Link to <a href={window.location.href}>details view</a></p>
                    <p className="card-text"><small className="text-muted">Photo-id: {photoDetails.id}</small></p>
                  </div>
                </div>
              </div>
            </div>

          </main>

        ) : <h1>Loading...</h1>}
      </div>
  );
}

/**
 * Footer to be used in lightbox view.
 * 
 * @param {currentView, } param0 
 */
const LightboxFooter = ({ currentView, modalProps }) => {

  return (
    <div className="container-fluid w-100 d-flex justify-content-center text-center">
    
      <button type="button" className="btn btn btn-outline-primary align-middle" onClick={() => {
        window.open(currentView.src)}}>
        <FaShareSquare />
      </button>
     

      <Link to={"/photo/" + currentView.id} className="btn btn-outline-primary"><FaInfo/></Link>

    </div>);
}

/**
 * Gallery view.
 * 
 * @param {} props 
 */
function GlorifiedGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [fetchedPhotos, setFetchedPhotos] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [fetchingData, setFetchingData] = useState(false);

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
    setFetchingData(true);
    fetch('https://jsonplaceholder.typicode.com/photos/' + '?_page=' + page + '&limit=12')
    .then(response => {
      
      var links = responseLinkParse(response.headers.get('Link'));
      setPagination(links);
      return response.json();
    })
    .then((data) => { 
        var converted = data.map(item => {
          var newObject = {};
          newObject['src'] = item.url;
          var width = getRandomInt(1) + 1;
          var height = getRandomInt(1) + 1;

          newObject.width = width;
          newObject.height = height;
          newObject.title = item.title;
          newObject.id = item.id;
          newObject.albumid = item.albumid;
          return newObject;
        });

        if(fetchedPhotos) {
          setFetchedPhotos(fetchedPhotos.concat(converted));
        } else {
          setFetchedPhotos(converted);
        }
        setFetchingData(false);
    })
    .catch(error => console.error('Error:', error));
  };

  fetchPhotos();

  }, [page, setFetchedPhotos]);

  return (
    <div>
      <TopNavbar activePage='photos'/>
      <main role="main" className="container">
        {fetchedPhotos != null ? <Gallery photos={fetchedPhotos} direction={"row"} onClick={openLightbox} /> : <h1>Loading...</h1>}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                components={{Footer: LightboxFooter}}
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
        {!fetchingData ? <SimplePagination pagination={pagination} nextPage={nextPage} previousPage={previousPage} /> : null }
      </main>
    </div>
  );
}

/**
 * Simple pagination to be used to fetch new photos.
 * 
 * Must be given a function which does the fetching.
 * 
 * @param {props.nextPage} props 
 */
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

export default App;
