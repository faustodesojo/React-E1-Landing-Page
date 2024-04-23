import { Habitacion } from './Habitacion'
import { HabitacionesContainer } from './style'
import { useSelector } from 'react-redux'


export const Habitaciones = () => {
  let  rooms = useSelector((state) => state.rooms.rooms)
  return (
    <HabitacionesContainer>
      {rooms.map((habitacion) =>
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
