import { Outlet } from "react-router-dom";
import DevTinderLogin from "./components/Auth/login";
import { useSelector } from "react-redux";
import Signup from "./components/Auth/signup";
function App() {
  const user = useSelector((store) => store.user);

  return (
    <>
      {user && <Outlet />}
      {!user && <DevTinderLogin />}
      {!user && <Signup />}
    </>
  );
}

export default App;
