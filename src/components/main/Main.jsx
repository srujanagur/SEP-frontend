import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Main() {
  return (
    <div class='container'>
      <Container fluid='md'>
        <div class='alert alert-success' role='alert'>
          <h4 class='alert-heading'>SEP BUSINESS</h4>
          <p>Hello!!! Welcome!</p>
          <p class='mb-0'>
            Only Administration manager will be able to register other
            employees.
          </p>
          <Row className='justify-content-md-center'>
            <Link to='/Login'>Login</Link>
          </Row>
          <Row className='justify-content-md-center'>
            <Link to='/Register'>Register</Link>
          </Row>
        </div>
      </Container>
    </div>
  )
}
