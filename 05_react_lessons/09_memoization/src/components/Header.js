import React from 'react'

function Header({number, increment}) {
    
 console.log("Header component re-rendered");
  return (
    <div>
      Header - {number}
      <br />
      <button onClick={increment}>ADD</button>
    </div>
  )
}

export default React.memo(Header)
