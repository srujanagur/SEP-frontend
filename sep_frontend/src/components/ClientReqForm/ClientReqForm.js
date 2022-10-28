import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, FieldArray } from "formik";
import { useSelector } from "react-redux";

import { createEvent } from "../../redux/actions/clientActions";
import { clearErrors } from "../../redux/actions/userActions";

import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";

export default function ClientReqForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, success } = useSelector(
    (state) => state.clientReducer.clientrequest
  );
  // const [recordNumber, setRecordNumber] = useState(0);
  // const [clientName, setClientName] = useState("");
  // const [eventType, setEventType] = useState("");
  // const [description, setDescription] = useState("");
  // const [expectedNumOfAttendees, setExpectedNumOfAttendees] = useState(0);
  // const [plannedBudget, setPlannedBudget] = useState(0);
  // const [from, setFrom] = useState();
  // const [to, setTo] = useState();
  // const [preferences, setPreferences] = useState([]);

  // const [formData, setFormData] = useState({
  //   recordNumber: "",
  //   clientName: "",
  //   eventType: "",
  //   description: "",
  //   expectedNumOfAttendees: "",
  //   plannedBudget: "",
  //   from: "",
  //   to: "",
  //   preferences: {
  //     decorations: "",
  //     parties: "",
  //     PhotosOrFilming: "",
  //     food: "",
  //     drinks: "",
  //     computerRelatedIssues: "",
  //   },
  // });
  // const clientDataChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    if (success) {
      navigate("/dashboard");
      dispatch({ type: "NEW_CLIENT_RESET" });
    }
  }, [dispatch, error, navigate, success]);

  // useEffect(() => {
  //   if (error) {
  //     dispatch(clearErrors());
  //   }
  //   if (success) {
  //     navigate("/");
  //     dispatch(createEvent(formData));
  //   }
  // }, [dispatch, error, navigate, success, formData]);

  const initialValues = {
    recordNumber: "",
    clientName: "",
    eventType: "",
    description: "",
    expectedNumOfAttendees: "",
    plannedBudget: "",
    from: "",
    to: "",
    preferences: {
      decorations: "",
      parties: "",
      PhotosOrFilming: "",
      food: "",
      drinks: "",
      computerRelatedIssues: "",
    },
  };

  // const [data, setData] = useState({
  //   recordNumber: 0,
  //   clientName: "",
  //   eventType: "",
  //   description: "",
  //   expectedNumOfAttendees: 0,
  //   plannedBudget: 0,
  //   from: "",
  //   to: "",
  //   preferences: {
  //     decorations: "",
  //     parties: "",
  //     PhotosOrFilming: "",
  //     food: "",
  //     drinks: "",
  //     computerRelatedIssues: "",
  //   },
  // });
  // const {
  //   recordNumber,
  //   clientName,
  //   eventType,
  //   description,
  //   expectedNumOfAttendees,
  //   plannedBudget,
  //   from,
  //   to,
  //   preferences: {
  //     decorations,
  //     parties,
  //     PhotosOrFilming,
  //     food,
  //     drinks,
  //     computerRelatedIssues,
  //   },
  // } = data;
  // const clientRequestFormSubmit = (e) => {
  //   e.preventDefault();
  //   const myForm = new FormData();
  //   myForm.set("recordNumber", recordNumber);
  //   myForm.set("clientName", clientName);
  //   myForm.set("eventType", eventType);
  //   myForm.set("description", description);
  //   myForm.set("expectedNumOfAttendees", expectedNumOfAttendees);
  //   myForm.set("plannedBudget", plannedBudget);
  //   myForm.set("from", from);
  //   myForm.set("to", to);
  //   myForm.set("decorations", decorations);
  //   myForm.set("parties", parties);
  //   myForm.set("PhotosOrFilming", PhotosOrFilming);
  //   myForm.set("food", food);
  //   myForm.set("drinks", drinks);

  //   myForm.set("computerRelatedIssues", computerRelatedIssues);
  //   dispatch(createEvent(myForm));
  // };
  // // Taking input
  // const clientDataChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  return (
    <div>
      <h1>Client Request Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <Form className="new-event-form" encType="multipart/form-data">
            <Container className="container">
              <Row>
                <Col sm={6}>
                  <label htmlFor="Client Record Number">
                    Client Record Number:
                    <Field
                      label="Record Number"
                      type="text"
                      name="recordNumber"
                      placeholder="Record Number"
                    />
                  </label>
                </Col>
                <Col sm={6}>
                  <label htmlFor=" Expected Num Of Attendees">
                    Expected Num Of Attendees
                    <Field
                      type="number"
                      name="expectedNumOfAttendees"
                      placeholder="Expected Num Of Attendees"
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <label htmlFor="Client Name">
                    Client Name
                    <Field
                      type="text"
                      name="clientName"
                      placeholder="Client Name"
                    />
                  </label>
                </Col>
                <Col sm={6}>
                  <label htmlFor="Planned Budget">
                    Planned Budget
                    <Field
                      type="text"
                      name="plannedBudget"
                      placeholder="Planned Budget"
                    />
                  </label>
                </Col>
              </Row>
              <Col sm={6}>
                <label htmlFor="Event Type">
                  eventType
                  <Field
                    type="text"
                    name="eventType"
                    placeholder="Event Type"
                  />
                </label>
              </Col>

              <Col sm={6}>
                <label htmlFor="Description">
                  Description
                  <Field
                    type="text"
                    name="description"
                    placeholder="Description"
                  />
                </label>
              </Col>

              <Row>
                <Col sm={6}>
                  <label htmlFor="from">
                    from
                    <Field type="date" name="from" />
                  </label>
                </Col>
                <Col sm={6}>
                  <label htmlFor="to">
                    to
                    <Field type="date" name="to" />
                  </label>
                </Col>
              </Row>

              {/* <Col sm={4}>
                <FieldArray name="preferences" />
                {() => (
                  <>
                    <p>preferences</p>
                    {values.preferences.map(item,index) => (
                      <Field type="number" name="price" placeholder="Price" />
                    ))}
                  </>
                )}
              </Col> */}
              <Row>
                <Col sm={6}>
                  <label htmlFor="Decorations">
                    Decorations
                    <Field
                      height="50"
                      type="text"
                      name="preferences.decorations"
                      placeholder="Decorations"
                    />
                  </label>
                </Col>
                <Col sm={6}>
                  <label htmlFor="food">
                    food
                    <Field
                      type="text"
                      name="preferences.food"
                      placeholder="food"
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <label htmlFor="PhotosOrFilming">
                    PhotosOrFilming
                    <Field
                      type="text"
                      name="preferences.PhotosOrFilming"
                      placeholder="PhotosOrFilming"
                    />
                  </label>
                </Col>
                <Col sm={6}>
                  <label htmlFor="Parties">
                    Parties
                    <Field
                      type="text"
                      name="preferences.parties"
                      placeholder="Parties"
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <label htmlFor="drinks">
                    drinks
                    <Field
                      type="text"
                      name="preferences.drinks"
                      placeholder="drinks"
                    />
                  </label>
                </Col>
                <Col sm={6}>
                  <label htmlFor="computerRelatedIssues">
                    computerRelatedIssues
                    <Field
                      type="text"
                      name="preferences.computerRelatedIssues"
                      placeholder="computerRelatedIssues"
                    />
                  </label>
                </Col>
              </Row>
              <Button variant="light" width="50" type="submit">
                submit
                {/* <Link to="/Home">submit</Link> */}
              </Button>
            </Container>
          </Form>
        )}
      </Formik>
    </div>
  );
}
