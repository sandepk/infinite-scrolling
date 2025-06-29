import React from 'react'

const Child = () => {
    console.log("Child component")
  return (
    <div>Hello World</div>
  )
}

export default React.memo(Child)