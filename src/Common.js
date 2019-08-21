import React, {Link} from 'react';
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import "./Common.css";
/**
 * Shows breadcrumb-style navigation.
 * 
 * @param {activePage} props 
 */
function TopNavbar(props) {
  
    /*return (
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
      );*/
    return (
        <Navbar id="main-navigation" variant="light" fixed="top">
            <Container>
                <Row>
                    <Col>
                        <Navbar.Brand href="#">PhotoApp</Navbar.Brand>
                    </Col>
                    <Col>
                        <Nav>
                            {props.activePage==='photos' ? 
                                <a href="#" className="nav-link active-page-link" aria-selected="true">Photos</a>
                            : 
                                <a href="#" className="nav-link" aria-selected="false">Photos</a>
                            }
                            {props.activePage==='photo' ? 
                                <Nav.Link className="active-page-link" href={window.location.href}>Details</Nav.Link>
                            : null}
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
  }

  export default TopNavbar;