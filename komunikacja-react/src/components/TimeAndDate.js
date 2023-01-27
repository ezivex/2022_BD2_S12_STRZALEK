import React, { useState, useEffect } from 'react';

function TimeAndDate() {

const [dateState, setDateState] = useState(new Date());

useEffect(() => {
    setInterval(() => setDateState(new Date()), 3);
}, []);

return (
        
        <div className="currentDate">

            <p className='datePi'>
              {' '}
              {dateState.toLocaleDateString('pl-PL', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            
            <p className='datePi'>
             {dateState.toLocaleString('pl-PL', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false,
            })}
            </p>
            
        </div>

    );
}
export default TimeAndDate;