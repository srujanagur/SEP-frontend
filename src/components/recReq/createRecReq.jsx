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

export default function RecReqForm() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
const onSubmit = async (values) => {
    setError(null)
    const response = await axios
      .post('http://localhost:5000/api/v1/newRecReq', values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message)
        alert(err.response.data.message)
      })
    if (response) {
      alert('Recruitment Request Succesful')
      navigate('/Home')
    }
  }

  const formik = useFormik({
    initialValues: {
      contractType: '',
      RequestingDepartment: '',
      yearsOfExperience: '',
      jobTitle: '',
      jobDescription: '',
    },
    validateOnBlur: true,
    onSubmit,
  })

  return (
    <div className='container'>
      <Navbar1 />
      <div>
        <h1>Recruitment Request</h1>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group as={Col}>
            <Form.Label>Contract Type</Form.Label>
            <Form.Control
              name='contractType'
              type='name'
              placeholder='Contract'
              value={formik.values.contractType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>RequestingDepartment</Form.Label>
            <Form.Control
              name='RequestingDepartment'
              type='name'
              placeholder='Services'
              value={formik.values.RequestingDepartment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress1'>
            <Form.Label>Years Of Experience</Form.Label>
            <Form.Control
              name='yearsOfExperience'
              type='number'
              placeholder='5'
              value={formik.values.yearsOfExperience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              name='jobTitle'
              type='text'
              placeholder='Head chef'
              value={formik.values.jobTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              name='jobDescription'
              type='text'
              placeholder='Should know all asian cuisines'
              value={formik.values.jobDescription}
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
