import React, { useEffect } from 'react'
import Navbar1 from '../Navbar'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../../redux/actions/eventAction'
import { clearErrors } from '../../redux/actions/eventAction'
import {
  approveEvent,
  rejectEvent,
} from '../../redux/actions/approveOrRejectAction'

const ApprovedEvents = () => {
  const { approvedEvents } = useSelector((state) => state.eventsReducer)
  const { error } = useSelector((state) => state.eventReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getEvents())
  }, [dispatch, error])

  return (
    <div className='container'>
      <Navbar1 />
      <div style={{ padding: '1%' }}>
        <Row xs={2} md={3} lg={3} className='g-4'>
          {approvedEvents &&
            approvedEvents.map((event) => (
              <Col>
                <Card>
                  <Card.Body style={{ textAlign: 'left' }}>
                    <Card.Title>{event.clientName}</Card.Title>
                    <Card.Text>Event Type: {event.eventType}</Card.Text>
                    <Card.Text>From: {event.from}</Card.Text>
                    <Card.Text>To: {event.to}</Card.Text>
                    <Card.Text>
                      Expected number of Attendees -
                      {event.expectedNumOfAttendees}
                    </Card.Text>
                    Preferences
                    <Card.Text>
                      Decorations -
                      {event.preferences.decorations.toString === true
                        ? 'Yes'
                        : 'NA'}
                    </Card.Text>
                    <Card.Text>
                      Parties -{' '}
                      {event.preferences.parties === true ? 'Yes' : 'NA'}
                    </Card.Text>
                    <Card.Text>
                      Photos Or Filming -
                      {event.preferences.PhotosOrFilming === true
                        ? 'Yes'
                        : 'NA'}
                    </Card.Text>
                    <Card.Text>
                      Food - {event.preferences.food === true ? 'Yes' : 'NA'}
                    </Card.Text>
                    <Card.Text>
                      Drinks -{event.preferences.drinks === true ? 'Yes' : 'NA'}
                    </Card.Text>
                    <Card.Text>
                      Computer Related Issues -
                      {event.preferences.computerRelatedIssues === true
                        ? 'Yes'
                        : 'NA'}
                    </Card.Text>
                    <Card.Text>
                      Expected Budget - {event.expectedBudget}
                    </Card.Text>
                    <Button onClick={() => dispatch(approveEvent(event))}>
                      Approve
                    </Button>
                    <Button onClick={() => dispatch(rejectEvent(event))}>
                      Reject
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  )
}

export default ApprovedEvents
