import "./App.css";

function App() {
  let name = "My App"
  let className = "App-header"
  console.log("App")
  return (
    <div className='App'>
      <div className={className}>{name}</div>
      <Demo />
    </div>
  );
}

function Demo() {
  console.log("Demo")
  return (
    <div className='App'>
      <div className='App-header'>Demo</div>
    </div>
  );
}

export default App;
