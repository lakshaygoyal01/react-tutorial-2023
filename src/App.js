import "./App.css";

function App() {
  let name = "ReactApp"
  let className = "App-header"
  console.log("App")
  return (
    <div className='App'>
      <div className={className}>{name}
      <Demo />
      </div>
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
