// export default function Navbar(props) {
// export default function Navbar({title,about= "My About"}) {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     {/* <a className="navbar-brand" href="#">{props.title}</a> */}
//                     <a className="navbar-brand" href="#">{title}</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 {/* <a className="nav-link" aria-current="page" href="#">{props.about}</a> */}
//                                 <a className="nav-link" aria-current="page" href="#">{about}</a>
//                             </li>
    
//                         </ul>
//                         <form className="d-flex" role="search">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// function MyNavbar(props) {
function MyNavbar({title, about = "My About page"}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{about}</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;