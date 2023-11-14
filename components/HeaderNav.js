"use client" 

import React,{Fragment} from "react";
import { Nav,Navbar,Container } from "react-bootstrap";
import Link from "next/link";
import './HeaderNav.css'
const HeaderNav=()=>{
    return(
        <Fragment>
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="bg-info" fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center me-auto" >
            <Link href="/home" className="m-2 link">Home</Link>
            <Link href="/todoform" className="m-2 link">Add Todo</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Fragment>
    )
}
export default HeaderNav