import React from 'react';
const Reset=()=>{
    return(
        <div className='reset'>
            <div className='upper-reset'>
                <button>esc</button>
                <span> - reset</span>
            </div>
            <div className='lower-reset'>
             <button>10</button>
             <button>50</button>
             <button>80</button>
             <button>100</button>
             <span>- no.of words</span>
            </div>
        </div>
    )
}
export default Reset;