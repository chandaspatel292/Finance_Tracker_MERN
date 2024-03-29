import { Button, TextField, Card } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // As explained in the Login page.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // As explained in the Login page.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  };

  // As explained in the Login page.
  const onSubmit = async () => {
    try {
      const user = await emailPasswordSignup(form.email, form.password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#eeeeee",
      }}
    >
      <h1 style={{ padding: "2rem" }}>Finance Tracker</h1>
      <Card>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "300px",
            margin: "auto",
            padding: "2rem",
          }}
        >
          <h1>Signup</h1>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={form.email}
            onInput={onFormInputChange}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={form.password}
            onInput={onFormInputChange}
            style={{ marginBottom: "1rem" }}
          />
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Signup
          </Button>
          <p>
            Have an account already? <Link to="/login">Login</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
