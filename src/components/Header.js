import React from 'react';
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { graphql, useStaticQuery } from "gatsby"
import MercedesLogo from '../images/mercedes-benz-mb-vector-logo-400x400.png'


function Header() {
    const GET_ALL_CARS_FOR_HEADER = useStaticQuery(graphql`
    query GetAllCarsForHeader {
        allStrapiCarClasses {
            nodes {
                Name
                RouteName
                Order
                cars {
                DisplayName
                RouteName
                }
            }
        }
    }
`);
    const all_car_list = GET_ALL_CARS_FOR_HEADER.allStrapiCarClasses.nodes
    return (
        <Navbar bg="dark" expand="md" sticky="top" variant='dark'>
            <Container className='align-items-center'>
            <Navbar.Brand href="#home" className='p-0 m-0'>
            <Link to='/' className='text-white'>
                <img
                    src={MercedesLogo}
                    className="align-top"
                    alt="Mercedes Logo"
                    width='60'
                    height='60'
                />
            </Link>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-right" style={{ flex: 1, fontFamily: 'Lato, sans-serif'}}>
                    <Nav.Link className='mx-2 hover-link'><Link to='/' className='text-white' style={{ textDecoration: 'none' }}><b>TRANG CHỦ</b></Link></Nav.Link>
                    <NavDropdown title={<span className='text-white ml-2 '><b>CÁC DÒNG XE MERCEDES-BENZ</b></span>} className='hover-link' id="basic-nav-dropdown" alignleft="true" fluid='true'>
                        {
                            all_car_list.map((item, i) => {
                                    return (
                                        <Container key={item.Name} className='text-right'>
                                            <NavDropdown.Item  as="button" variant="primary"><Link to={`/loai-xe/${item.RouteName}`} className='text-secondary' style={{ textDecoration: 'none' }}><b>{item.Name}</b></Link></NavDropdown.Item>
                                                {/*   (item.cars !== null) &&
                                                    item.cars.map((car, i) => {
                                                        return (
                                                            <NavDropdown.Item key={car.DisplayName} className="underline"><Link to={`/xe/${car.RouteName}`} className='text-dark' style={{ textDecoration: 'none' }}>{car.DisplayName}</Link></NavDropdown.Item>
                                                            
                                                        );
                                                    })
                                                */}
                                            <NavDropdown.Divider/>
                                        </Container>
                                    );
                            })
                        }
                    </NavDropdown>
                    <Nav.Link className='mx-2 hover-link'><Link to='/BaoGiaXe' className='text-white' style={{ textDecoration: 'none' }}><b>NHẬN BÁO GIÁ XE</b></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
