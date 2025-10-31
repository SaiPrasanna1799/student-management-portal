import Body from "./Components/Body";
import { StudentsProvider } from "./Components/StudentsContext";

function App() {
  return (
    <div className="App">
      <StudentsProvider>
      <Body />
    </StudentsProvider>
    </div>
  );
}

export default App;
