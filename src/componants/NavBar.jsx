import { Navbar ,Container,Nav} from "react-bootstrap"
//import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
export function NavBar(){
  // const result= useSelector((state)=>state.counterSlice);
  // let {count} =result;
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link'  to='/products'>Products</NavLink>
            <NavLink  className='nav-link' to='*'>Login</NavLink>
             <NavLink  className='nav-link' to='/counter'>Counter</NavLink>
             <NavLink  className='nav-link' to='/counterToolkit'>CounterToolkit</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}