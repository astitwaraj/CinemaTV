import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Body />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
