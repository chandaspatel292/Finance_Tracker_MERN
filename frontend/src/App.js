import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import HomePage from "./HomePage";
import Login from "./Components/Login/Login.page";
import PrivateRoute from "./Components/private-route/PrivateRoute.page";
import Signup from "./Components/Signup/Signup.page";

function App() {
  return (
    <BrowserRouter>
      {/* We are wrapping our whole app with UserProvider so that */}
      {/* our user is accessible through out the app from any page*/}
      <UserProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          {/* We are protecting our Home Page from unauthenticated */}
          {/* users by wrapping it with PrivateRoute here. */}
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
