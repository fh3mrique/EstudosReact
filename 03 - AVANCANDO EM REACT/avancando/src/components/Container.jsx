import React from 'react'

const  Container = ({children, pc} )=> {
  return (
    <div>
        <h1>Este é o titudo do componente</h1>
        {children}
        <p>PROP: {pc}</p>
    </div>
  )
}

export default Container