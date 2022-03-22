import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  {/*
	declaration of variables for later use
  */}
  const [data, setData] = React.useState(null);






  {/*
	unused example for simple GET request on /cpp
  */}
/*	
  React.useEffect(() => {
    fetch("/CPP")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
*/	





  {/*
	example of POST request send to the backend on /Default
	should be moved to seperate file later
	the []-braces can contain dependencies on which change this call is done
  */}
  React.useEffect(() => {
	const options = {
		method: `POST`,
		headers: {"Content-Type": `application/json`},
		body: JSON.stringify({message: `request`})
	}
	fetch(`/Default`, options)
	  .then((res) => res.json())
	  .then((data) => setData(data.message));
  }, []);
 





  {/*
	"HTML" structure of the SPA that is shown by the frontend
  */}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
      <body>
	  {/*<p>{!data ? "Loading..." : data}</p>*/}
      </body>
    </div>
  );
}

export default App;
