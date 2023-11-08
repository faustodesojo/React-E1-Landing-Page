import { RoomsCards } from '../rooms_cards/rooms_cards'
import { rooms } from '../../../data/rooms'

export const RoomsWidget = () => {
    return (
        <div>
            <h3>Conoce nuestras Habitaciones</h3>
        <div>
            {
            rooms.map((room) =>  
                <RoomsCards
                key={room.id} {...room}
                />
            )
            }
        </div>
        </div>
    )
}