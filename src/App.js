import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {
const [user, setUser] = useState(null);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => {
      setUser(json)
    })
}, [])

  return (
    <div>
      <h2>Get User Data</h2>
      <div className="user">
        {user && <>
          User ID: {user.id} <br />
          User Name: {user.username}<br />
          Name: {user.name}          
        </>}
      </div>
    </div>
  );
}
