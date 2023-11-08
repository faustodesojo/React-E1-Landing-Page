import React from 'react'

export const RoomsCards = (img, title, description) => {
  return (
    <div>
        <img src="{img}" alt="{title}" />
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Reservar</button>
        <input type="date" name="" id="" />
    </div>
  )
}
