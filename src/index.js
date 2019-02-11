import React from 'react';
import ReactDOM from 'react-dom';
import MediaCard from './MediaCard';

class Mui extends React.Component {
  render() {
    return (
      <div>
        <MediaCard />
      </div>
    );
  }
}

ReactDOM.render(<Mui />, document.getElementById('root'));
