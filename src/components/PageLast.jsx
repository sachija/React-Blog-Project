import React from 'react';
import '../App.css';


 const PageLast =({titlehead,deschead,taghead})=> {
  return (
   <>
    <div className="bottom1">
                <p className="event">{titlehead}</p>
                <p  className="event2">{deschead}</p>
                {taghead.map((item3,index3)=>{
                    return(
                        <span className="event3" key={index3}>{item3}</span>
                    )
                })}
                
            </div>
            <hr className='hr10' />
   </>
  )
}
export default PageLast;