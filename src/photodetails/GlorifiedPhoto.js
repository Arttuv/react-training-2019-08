import React, {useState, useEffect} from 'react';
import TopNavbar from "../common/Common";

/**
 * Component to show a single photo with detailed info. Should get the 
 * id of the photo as a parameter.
 * @param {props.mathc.params.id} props 
 */
function GlorifiedPhoto(props) {
    const [photoDetails, setPhotoDetails] = useState(null);
    const [error, setError] = useState(null);
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
       .catch(error => {
         console.error('Error:', error);
         setError(error);
       });
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
          {error != null ? 
            <div className="bg-danger">
            < h2 class="bg-danger">Error: {error.name}</h2> 
            <p>{error.message}</p>
            </div>
          : null}
  
        </div>
    );
  }

  export default GlorifiedPhoto;