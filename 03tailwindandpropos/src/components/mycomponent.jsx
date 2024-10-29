import React from 'react'

function Mycomponent({usesrname, email="aman.patel2020@gmail.com"}) {
  return (
    <div>
        This is the card with {usesrname} +
        This is the email with {email}
    </div>
  )
}

export default Mycomponent