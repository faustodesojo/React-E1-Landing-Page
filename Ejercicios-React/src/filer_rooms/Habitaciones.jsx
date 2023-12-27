import React from 'react'
import { Habitacion } from './Habitacion'
import { rooms } from '../data/rooms'
import { HabitacionesContainer } from './style'

export const Habitaciones = () => {
  return (
    <HabitacionesContainer>
        {rooms.map((habitacion)=> 
        <Habitacion
        img={habitacion.img}
        name={habitacion.name}
        key={habitacion.id}
         />
        )
    }
    </HabitacionesContainer>
  )
}
