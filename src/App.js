import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [users, setUsers] = useState([]);

  const loadUser = async () => {
     const response = await fetch('https://reqres.in/api/users?page=2');
    // const response = await fetch('https://24pullrequests.com/users.json');
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div>
      <div className="header">
        <h1 className="title_header">L G M    t a s k      2</h1>
        <button className="btn_header" onClick={loadUser}>
          Get
        </button>
      </div>
      <div className="users-space">
        {users.map(({ id, email, first_name, avatar }) => (
          <div className="card" style={{ width: '200px' }}>
            <div className="main">
              <img className="img-1" src={avatar} />
              <div className="body_card">
                <h5 className="id_card" key={id}>
                  ID: {id}
                </h5>
                <h5
                  className="title_card"
                  key={id}
                >{`${first_name}`}</h5>
                <p className="text_card" key={id}>
                  {email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
