import React, {useState, useCallback, useEffect} from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {FaAngleDoubleDown, FaShareSquare, FaInfo} from "react-icons/fa";
import { Link } from "react-router-dom";
import TopNavbar from "../Common";

const responseLinkParse = require('parse-link-header');

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
    const [error, setError] = useState(null);
  
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
      .catch(error => {
          console.error('Error:', error)
          setError(error);
      })
        
      
    };
  
    fetchPhotos();
  
    }, [page, setFetchedPhotos]);
  
    return (
      <div>
        <TopNavbar activePage='photos'/>
        <main role="main" className="container">
          {fetchedPhotos != null ? <Gallery photos={fetchedPhotos} direction={"row"} onClick={openLightbox} /> : <h1>Loading...</h1>}
          {error != null ? 
            <div className="bg-danger">
            < h2 class="bg-danger">Error: {error.name}</h2> 
            <p>{error.message}</p>
            </div>
          : null}
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
              <button type="button" className="btn btn btn-outline-primary align-middle button-with-margin shadow-sm" onClick={props.nextPage}>
                <FaAngleDoubleDown />
              </button>
              :
              <button type="button" className="btn btn btn-outline-primary disabled button-with-margin shadow-sm">
                <FaAngleDoubleDown />
              </button>}
          </div>
          : null}
        </nav>
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
      
        <button type="button" className="button-with-margin btn btn btn-outline-primary align-middle shadow-sm" onClick={() => {
          window.open(currentView.src)}}>
          <FaShareSquare />
        </button>
       
  
        <Link to={"/photo/" + currentView.id} className="btn button-with-margin btn-outline-primary shadow-sm"><FaInfo/></Link>
  
      </div>);
  }
  

  export default GlorifiedGallery;