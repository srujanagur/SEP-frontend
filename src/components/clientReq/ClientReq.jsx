import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import { getClientRequests } from '../../redux/actions/clientReqAction'
import Navbar1 from '../Navbar'
import Row from 'react-bootstrap/Row'

export default function ClientReqView() {
  const { clientRequests, clientReqCount } = useSelector(
    (state) => state.clientRequestReducer
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getClientRequests())
  }, [dispatch])

  return (
    <div className='container'>
      <Navbar1 />
      <h1>Total Client Requests - {clientReqCount}</h1>
      <div>
        <Row xs={2} md={3} lg={3} className='g-4'>
          {clientRequests &&
            clientRequests.map((req) => {
              return (
                <Card>
                  <Card.Body>
                    <div>
                      <Card.Text>
                        Preferences :
                        <Card.Text>
                          Decorations: {req?.preferences?.decorations}
                        </Card.Text>
                        <Card.Text>
                          Parties: {req?.preferences?.parties}
                        </Card.Text>
                        <Card.Text>
                          Photos Or Filming:
                          {req?.preferences?.photosOrFilming}
                        </Card.Text>
                        <Card.Text>Food: {req?.preferences?.food}</Card.Text>
                        <Card.Text>
                          Drinks: {req?.preferences?.drinks}
                        </Card.Text>
                        <Card.Text>
                          Computer Related Issues:
                          {req?.preferences?.computerRelatedIssues}
                        </Card.Text>
                      </Card.Text>
                      <Card.Text>Record Number : {req?.recordNumber}</Card.Text>
                      <Card.Text>Client Name : {req?.clientName}</Card.Text>
                      <Card.Text>Description : {req?.description}</Card.Text>
                      <Card.Text>
                        Expected Number Of Attendees :{' '}
                        {req?.expectedNumOfAttendees}
                      </Card.Text>
                      <Card.Text>
                        Planned Budget : {req?.plannedBudget}
                      </Card.Text>
                      <Card.Text>EventType: {req?.eventType}</Card.Text>
                      <Card.Text>
                        From: {req?.from}
                        To: {req?.to}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              )
            })}
        </Row>
      </div>
    </div>
  )
}
