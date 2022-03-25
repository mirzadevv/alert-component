import Alert from "./components/Alert";
function App() {
  return (
    <Alert message="Error message" duration={4000} type="error" closable />
  );
}

export default App;
