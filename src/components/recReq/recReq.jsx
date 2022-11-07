import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { getRecruiementRequests } from '../../redux/actions/recReqAction'
import Navbar1 from '../Navbar'
import Row from 'react-bootstrap/Row'

export default function RecReqView() {
  const { recReqs, recReqCount } = useSelector((state) => state.recReqReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecruiementRequests())
  }, [dispatch])
  console.log(recReqs)

  return (
    <div className='container'>
      <Navbar1 />
      <h1>Total Recruitement Requests - {recReqCount}</h1>
      <div>
        <Row xs={2} md={3} lg={3} className='g-4'>
          {recReqs &&
            recReqs.map((req) => {
              return (
                <Card>
                  <Card.Body>
                    <div>
                      <Card.Text>Contract Type : {req.contractType}</Card.Text>
                      <Card.Text>
                        Requesting Department: {req.RequestingDepartment}
                      </Card.Text>
                      <Card.Text>
                        Years Of Experience: {req.yearsOfExperience}
                      </Card.Text>
                      <Card.Text>Job Title: {req.jobTitle}</Card.Text>
                      <Card.Text>
                        Job Description: {req.jobDescription}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              )
            })}
        </Row>
      </div>
      <Link className='link' to='/Home'>
        Home
      </Link>
    </div>
  )
}
