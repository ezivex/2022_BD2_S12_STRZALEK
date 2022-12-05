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
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            
            <p className='datePi'>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
        </div>
    );
}

export default TimeAndDate;