import Login from './components/login/Login'

function App({ authLogin }) {
  return (
    <div className="App">
      <Login authLogin={authLogin}/>
    </div>
  );
}

export default App;
