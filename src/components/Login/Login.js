import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useContext, useRef } from "react";
import AuthContext from "../../store/Auth-context";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const EmailRef = useRef();
  const PasswordRef = useRef();
  async function LoginHandler(e) {
    e.preventDefault();
    const obj = {
      email: EmailRef.current.value,
      password: PasswordRef.current.value,
      returnSecureToken: true,
    };
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      } else {
        AuthCtx.login(data.idToken);
        localStorage.setItem("email",EmailRef.current.value)
        navigate("/home");
      }
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
      <div style={{ textAlign: "center", color: "blue" }}>
        <h1>Login</h1>
      </div>
      <div className="container mt-4 rounded shadow pt-4 pb-4">
        <form onSubmit={LoginHandler}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              ref={EmailRef}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              ref={PasswordRef}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          <div className="d-grid gap-2">
            <Button type="submit" className="btn mt-3">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
