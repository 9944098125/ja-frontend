import "./App.css";
import BaseRoutes from "./Routing/BaseRoutes";
import store from "./Redux/Store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BaseRoutes />
    </Provider>
  );
}

export default App;
