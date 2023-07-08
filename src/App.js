import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import styled from "styled-components";
import Task1 from "./Task1";
import Task2 from "./Task2";

const AppContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Navigation = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: #000;
    padding: 10px;
    border-radius: 5px;
    background-color: #eee;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ccc;
    }
  }
`;

const TaskContainer = styled.div`
  margin-top: 20px;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navigation>
          <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
            <li>
              <Link to="/task1">Task 1</Link>
            </li>
            <li>
              <Link to="/task2">Task 2</Link>
            </li>
          </ul>
        </Navigation>

        <TaskContainer>
          <Routes>
            {/* <Route path="/" element={<App></App>}> */}
            <Route path="/task1" element={<Task1></Task1>} />
            <Route path="/task2" element={<Task2></Task2>}/>
            {/* </Route> */}
          </Routes>
        </TaskContainer>
      </AppContainer>
    </Router>
  );
};

export default App;
