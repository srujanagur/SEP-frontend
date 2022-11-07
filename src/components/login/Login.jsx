import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  const onSubmit = async (values) => {
    setError(null)
    const response = await axios
      .post('http://localhost:5000/api/v1/user/login', values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message)
        alert(err.response.data.message)
      })

    if (response) {
      alert('Login Succesfull')
      navigate('/Home')
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  })

  return (
    <div className='container'>
      <h1>Login form</h1>
      <Form className='login-form' onSubmit={formik.handleSubmit}>
        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>email</Form.Label>
          <Form.Control
            name='email'
            type='email'
            placeholder='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Button variant='light' type='submit'>
            Login
          </Button>
        </Form.Group>

        <div className='right'>
          <h6>
            If you are not Registered?<Link to='/Register'>Sign up</Link>
          </h6>
        </div>
      </Form>
    </div>
  )
}
