import React from 'react';

function TrainList({ trains }) {
  return (
    <div>
      {trains.map(train => (
        <div key={train.trainNumber}>
          {/* Display train information */}
        </div>
      ))}
    </div>
  );
}

export default TrainList;