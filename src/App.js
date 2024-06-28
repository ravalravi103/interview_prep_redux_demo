import { React } from 'react'
import { Provider } from "react-redux"
import { store } from "./Redux/Store/store"
import CounterComponent from "./Counter/counterComponement"
function App() {
  return (
    <Provider store={store}>
      <CounterComponent></CounterComponent>
    </Provider>
  );
}

export default App;
