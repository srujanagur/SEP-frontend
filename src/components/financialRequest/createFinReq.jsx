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

export default function FinReqForm() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const validationSchema = yup.object({
    RequestingDepartment: yup.string().required(),
    projectReference: yup.string().required(),
    requiredAmount: yup.number().required(),
    reason: yup.string().required(),
  })

  const onSubmit = async (values) => {
    setError(null)
    const response = await axios
      .post('http://localhost:5000/api/v1/newFinancialRequest', values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message)
        alert(err.response.data.message)
      })
    if (response) {
      alert('Financial Request Succesful')
      navigate('/Home')
    }
  }

  const formik = useFormik({
    initialValues: {
      RequestingDepartment: '',
      projectReference: '',
      requiredAmount: '',
      reason: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  })

  return (
    <div className='container'>
      <Navbar1 />
      <div>
        <h1>Financial Request</h1>
        <Form onSubmit={formik.handleSubmit}>
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

          <Form.Group as={Col}>
            <Form.Label>Project Reference ID</Form.Label>
            <Form.Control
              name='projectReference'
              type='name'
              placeholder='b2345'
              value={formik.values.projectReference}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress1'>
            <Form.Label>Required Amount</Form.Label>
            <Form.Control
              name='requiredAmount'
              type='number'
              placeholder='5000'
              value={formik.values.requiredAmount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Reason</Form.Label>
            <Form.Control
              name='reason'
              type='text'
              placeholder='increase in prices'
              value={formik.values.reason}
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
