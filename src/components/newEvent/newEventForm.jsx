import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import Navbar1 from '../Navbar'

export default function NewEventForm() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const onSubmit = async (values) => {
    setError(null)
    const response = await axios
      .post('http://localhost:5000/api/v1/newEvent', values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message)
        alert(err.response.data.message)
      })
    if (response) {
      alert('New Event Request Succesful')
      navigate('/Home')
    }
  }

  const formik = useFormik({
    initialValues: {
      recordNumber: '',
      clientName: '',
      eventType: '',
      from: '',
      to: '',
      expectedNumOfAttendees: '',
      preferences: {
        decorations: false,
        parties: false,
        photosOrFilming: false,
        food: false,
        drinks: false,
      },
      expectedBudget: '',
    },
    validateOnBlur: false,
    onSubmit,
  })

  return (
    <div className='container'>
      <Navbar1></Navbar1>
      <h1>New EventForm</h1>
      <Form className='new-event-form' onSubmit={formik.handleSubmit}>
        <Form.Group
          as={Row}
          className='mb-3'
          controlId='formHorizontalPassword'
        >
          <Form.Label column sm={2}>
            Record number
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name='recordNumber'
              type='number'
              placeholder='12345'
              value={formik.values.recordNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className='mb-3'
          controlId='formHorizontalPassword'
        >
          <Form.Label column sm={2}>
            Client name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type='name'
              name='clientName'
              placeholder='enter name'
              value={formik.values.clientName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
          <Form.Label column sm={2}>
            Event type
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type='name'
              name='eventType'
              placeholder='Birthday'
              value={formik.values.eventType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
          <Row>
            <Col>
              <Form.Label column sm={2}>
                From
              </Form.Label>
              <Form.Control
                type='date'
                name='from'
                value={formik.values.from}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Col>
            <Col>
              <Form.Label column sm={2}>
                To
              </Form.Label>
              <Form.Control
                type='date'
                name='to'
                value={formik.values.to}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
          <Form.Label column sm={4}>
            Expected number of attendees:
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type='number'
              placeholder='500'
              name='expectedNumOfAttendees'
              value={formik.values.expectedNumOfAttendees}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
          <Form.Label column sm={4}>
            Expected budget:
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type='number'
              placeholder='5000'
              name='expectedBudget'
              value={formik.values.expectedBudget}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Col>
        </Form.Group>
        <Button variant='light' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
