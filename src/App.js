import React from 'react';
import { Provider } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import store from './store/store';
import TaskPage from './pages/task'
import AddTaskForm from './components/addtask';
function App() {
  return (
    <Provider store={store}>
      <Router>

        <Routes>
          <Route  path="/" element={<TaskPage />} />
          <Route  path="/:id" element={<TaskPage />} />
        </Routes>
      </Router>
     </Provider>
  );
}

export default App;