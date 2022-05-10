import React from 'react'

function Dummy() {
  return (
      <>
      <style jsx global>
          {`
          .dummy{
            background-color:pink;
          }
          
          `}
      </style>
      <div className="dummy">
          this a the dummy component 
      </div>
      </>
    
  )
}

export default Dummy