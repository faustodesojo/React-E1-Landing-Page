import React from 'react'
import { CardReserva } from './cardReserva'

export const CardsReservas = () => {
  return (
    <div>
        <div>
            {
                Object.entries(rooms).map(([key, value]) => <CardReserva key={key} {...value} />)
            }
        </div>
    </div>
  )
}
