import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import user from './user.json';
import data from './data.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* Render the Statistics component */}
      <Statistics title="Upload stats" stats={statisticsData} />
    </div>
  );
}

export default App;