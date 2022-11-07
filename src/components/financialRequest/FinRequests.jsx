import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFinancialRequests } from '../../redux/actions/finReqAction'
import Navbar1 from '../Navbar'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default function FinancialView() {
  const { finRequests, finReqCount } = useSelector(
    (state) => state.finReqReducer
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFinancialRequests())
  }, [dispatch])
  console.log(finRequests)

  return (
    <div className='container'>
      <Navbar1 />
      <h4>Total Financial Requests - {finReqCount}</h4>
      <div className='financial-view'>
        <Row xs={2} md={3} lg={3} className='g-4'>
          {finRequests &&
            finRequests.map((req) => (
              <Card className='eachCard'>
                <Card.Body>
                  <div>
                    <Card.Text>
                      RequestingDepartment: {req.RequestingDepartment}
                    </Card.Text>
                    <Card.Text>
                      projectReference: {req?.projectReference}
                    </Card.Text>
                    <Card.Text>requiredAmount: {req?.requiredAmount}</Card.Text>
                    <Card.Text>reason: {req?.reason}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            ))}
        </Row>
      </div>
    </div>
  )
}
