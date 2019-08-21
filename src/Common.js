import React, {useState, useCallback, useEffect} from 'react';

/**
 * Shows breadcrumb-style navigation.
 * 
 * @param {activePage} props 
 */
function TopNavbar(props) {
  
    return (
      <nav id="main-navigation" className="navbar navbar-expand fixed-top shadow-sm">
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
                  <a className="nav-link" href={window.location.href}>Photo Details<span className="sr-only">(current)</span></a>
              </li>
            : null}
          </ul>
         : null}
  
        </div>  
      </nav>
    );
  }

  export default TopNavbar;