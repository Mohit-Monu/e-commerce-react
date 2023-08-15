import { useContext, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import AuthContext from "../../store/Auth-context";
import { useNavigate } from 'react-router-dom';
function ContactUs(props) {
  const navigate = useNavigate();
  const AuthCtx=useContext(AuthContext)
  const nameRef=useRef('')
  const emailRef=useRef('')
  const phoneRef=useRef('')
  const [showForm,setShowForm]= useState(true)

  function formControlHandler(e){
  if(AuthCtx.isLoggedIn){
    e.preventDefault()
    const obj={
      name:nameRef.current.value,
      email:emailRef.current.value,
      phone:phoneRef.current.value
    }
    props.OnFormSubmit(obj)
    setShowForm(false)
  }else{
    navigate("/login")
  }
  }
  return (
    <>
    {!showForm && <Alert variant="success">
      <Alert.Heading>Requested successfully submited</Alert.Heading>
      <p>
        you have successfully submited you information you will now get the call from our end it uswally takes upto 3 working days 
      </p>
      <hr />
      <p className="mb-0">
        <b>Thank you for your Information</b>
      </p>
    </Alert>}
      {showForm && <Container className=" pb-3 pt-3 mt-5 rounded shadow">
        <form onSubmit={formControlHandler}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="name@example.com"
            required
            ref={nameRef}
          />
          <label  htmlFor="floatingInputCustom">Name</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingPasswordCustom"
            type="text"
            placeholder="name@example.com"
            required
            ref={emailRef}
          />
          <label htmlFor="floatingPasswordCustom">Email address</label>
        </Form.Floating>
        <Form.Floating >
          <Form.Control
            id="floatingPasswordCustom"
            type="number"
            placeholder="Password"
            required
            ref={phoneRef}
          />
          <label htmlFor="floatingPasswordCustom">Phone number</label>
        </Form.Floating>
        <div className="d-grid gap-2">
        <Button type="submit" className="btn mt-3" >Submit</Button>
        </div>
        </form>
      </Container>}
    </>
  );
}

export default ContactUs;
