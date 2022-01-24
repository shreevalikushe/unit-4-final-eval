import "./App.css";
import { AllRoutes } from "./components/AllRoutes";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <AllRoutes />
    </div>
  );
}

export default App;
