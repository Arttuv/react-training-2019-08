import React, {useState, useCallback, useEffect} from 'react';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './App.css';
import { photos } from "./photos";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [fetchedPhotos, setFetchedPhotos] = useState(photos);
  const [pagination, setPagination] = useState(null);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
   const fetchPhotos = async() => {
    fetch('https://jsonplaceholder.typicode.com/photos/?_page=1&limit=10')
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

  }, []);

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
      
      <SimplePagination pagination={pagination} />

    </div>
  );
}

function GlorifiedGallery(props) {

}

function SimplePagination(props) {
  return (  
    <nav>
      {props.pagination != null ?
        <ul className="pagination justify-content-center">
          {props.pagination.hasOwnProperty('previous') ? 
              <li className="page-item"><a className="page-link" href={props.pagination['previous'].url} tabIndex="-1">Previous</a></li> :
              <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">Previous</a></li>
          }
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          {props.pagination.hasOwnProperty('next') ? 
              <li className="page-item"><a className="page-link" href={props.pagination['next'].url} tabIndex="-1">Next</a></li> :
              <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">Next</a></li>
          }
        </ul>
        : null}
      </nav>
  );
}

function PaginationNext(props) {

}

export default App;
