import React from 'react'

export default (props) => {
  console.log('props::::', props)
  const {location, name} = props.restaurant
  return (
    <div>
      <span>Yayy you are going to have a fabulous meal at {name}!</span>
      Address:
      {location.address1}
      {location.address2}
      {location.city}
    </div>
  )
}