import React, { useState } from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
import './App.css';
// import { Component } from 'react';

const loaderCSS = css`
    margin-top: 500px;
    margin-left: 50%;
`

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async() => {
    setLoading(true);

    const response = await fetch ("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUsers(jsonresponse);
 
    setLoading(false);
  }


  return (
    <>
    <div className="container">
        <nav>
         <h1>LGMVIP</h1>
         <button onClick={loadUsers}>Get Users</button>
        </nav>

        {loading ? (<BeatLoader css={loaderCSS} size={24} color='#4d004d' loading/>):(loadUsers)}
         

        <div className="container-fluid mt-5">
          <div className="row text-center">
            {
              users.map((curElem) => {
                return(
                  <div className="col-10 col-md-4 mt-5">
                  <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                        <img src={curElem.avatar_url} alt="james" className="rounded" width="155" />
                    </div>
                    <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textleft">{curElem.login}</h4> <span className="textleft">web developer</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column"><span className="articles">Articals</span> <span className="number1">38</span></div>   
                            <div className="d-flex flex-column"><span className="followers">Followers</span> <span className="number2">128</span></div>
                            <div className="d-flex flex-column"><span className="rating">Ratings</span> <span className="number3">8.9</span></div>
                        </div>
                    </div>
                  </div>
                  </div>
                  </div> 
                  )
                })
             }
          </div>
        </div>

    </div>

    </>
  );
} 

export default App;