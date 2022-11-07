import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import Navbar1 from '../Navbar'
import Row from 'react-bootstrap/Row'

export default function ClientReqForm() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const onSubmit = async (values) => {
    setError(null)
    const response = await axios
      .post('http://localhost:5000/api/v1/newClientRequest', values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message)
        alert(err.response.data.message)
      })
    if (response) {
      alert('Client Request Succesful')
      navigate('/Home')
    }
  }

  const formik = useFormik({
    initialValues: {
      recordNumber: '',
      clientName: '',
      eventType: '',
      description: '',
      expectedNumOfAttendees: '',
      plannedBudget: '',
      from: '',
      to: '',
      preferences: {
        decorations: '',
        parties: '',
        PhotosOrFilming: '',
        food: '',
        drinks: '',
        computerRelatedIssues: '',
      },
    },
    validateOnBlur: true,
    onSubmit,
  })

  return (
    <div className='container'>
      <Navbar1 />
      <div>
        <h1>Client Requirement Request</h1>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group as={Col}>
            <Form.Label>Record Number</Form.Label>
            <Form.Control
              name='recordNumber'
              type='number'
              placeholder='1234556'
              value={formik.values.recordNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Client Name</Form.Label>
            <Form.Control
              name='clientName'
              type='name'
              placeholder='Diana'
              value={formik.values.clientName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress1'>
            <Form.Label>Event Type</Form.Label>
            <Form.Control
              name='eventType'
              type='name'
              placeholder='Birthday'
              value={formik.values.eventType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name='description'
              type='text'
              placeholder='25th birthday'
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Expected Number Of Attendees</Form.Label>
            <Form.Control
              name='expectedNumOfAttendees'
              type='number'
              placeholder='25'
              value={formik.values.expectedNumOfAttendees}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Planned Budget</Form.Label>
            <Form.Control
              name='plannedBudget'
              type='number'
              placeholder='25'
              value={formik.values.plannedBudget}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
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

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Decorations</Form.Label>
            <Form.Control
              name='preferences.decorations'
              type='text'
              placeholder='flowers'
              value={formik.values.preferences.decorations}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Parties</Form.Label>
            <Form.Control
              name='preferences.parties'
              type='text'
              placeholder='NA'
              value={formik.values.preferences.parties}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>PhotosOrFilming</Form.Label>
            <Form.Control
              name='preferences.PhotosOrFilming'
              type='text'
              placeholder='NA'
              value={formik.values.preferences.PhotosOrFilming}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Food</Form.Label>
            <Form.Control
              name='preferences.food'
              type='text'
              placeholder='Vegan'
              value={formik.values.preferences.food}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Drinks</Form.Label>
            <Form.Control
              name='preferences.drinks'
              type='text'
              placeholder='NA'
              value={formik.values.preferences.drinks}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Computer Related Issues</Form.Label>
            <Form.Control
              name='preferences.computerRelatedIssues'
              type='text'
              placeholder='NA'
              value={formik.values.preferences.computerRelatedIssues}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>
          <Button variant='light' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}
