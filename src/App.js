import React, {useState, useCallback, useEffect} from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './App.css';
import { BrowserRouter, HashRouter, Switch, Route, Link } from "react-router-dom";
import {FaAngleDoubleDown, FaLink, FaShareSquare, FaInfo} from "react-icons/fa";

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

function TopNavbar(props) {
  
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href="#">PhotoApp</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">

      {(props.activePage) ? 
      <ul className="navbar-nav mr-auto">
          
          {props.activePage=='photos' ? 
            <li className="nav-item active">
                <a className="nav-link" href="#">Photos <span className="sr-only">(current)</span></a>
            </li>
          : 
          <li className="nav-item">
                <a className="nav-link" href="#">Photos <span className="sr-only">(current)</span></a>
            </li>
          }
          
          {props.activePage=='photo' ? 
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

function GlorifiedPhoto(props) {

  const [id, setId] = useState(null);
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);

  const [photoDetails, setPhotoDetails] = useState(null);
  
  /**
   * useEffect-hook for background data fetch.
   */
  console.log("Glorified photo");
  console.log(props);
  
  useEffect(() => {
    const getPhotoInfo = async() => {
     fetch('https://jsonplaceholder.typicode.com/photos/' + props.match.params.id)
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
        setId(newObject.id);
        setUrl(newObject.url);
        setTitle(newObject.title);
        
     })
   };

   getPhotoInfo();

  }, []);
 
  return (
      <div>
        <TopNavbar activePage="photo"/>
        
        {photoDetails != null ? (

          <main role="main" className="container h100">
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

        ) : null}
      </div>
  );
}

const NewCustomFooter = ({ currentView, modalProps }) => {

  return (
    <div className="container-fluid w-100 d-flex justify-content-center text-center">
    
      <button type="button" className="btn btn btn-outline-primary align-middle" onClick={() => {
        console.log(currentView);
        console.log(modalProps);
        window.open(currentView.src)}}>
        <FaShareSquare />
      </button>
     

      <Link to={"/photo/" + currentView.id} className="btn btn-outline-primary"><FaInfo/></Link>

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
    fetch('https://jsonplaceholder.typicode.com/photos/' + '?_page=' + page + '&limit=12')
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
          newObject['albumid'] = item.albumid;
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
      <TopNavbar activePage='photos'/>
      <main role="main" className="container">
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
      </main>
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
