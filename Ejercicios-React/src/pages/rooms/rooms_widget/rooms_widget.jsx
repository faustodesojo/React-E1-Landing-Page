import { RoomsCards } from '../rooms_cards/rooms_cards'
import { rooms } from '../../../data/rooms'
import {RoomWidgetContainer } from './styles'

export const RoomsWidget = () => {
    return (
        <div>
            <RoomWidgetContainer>
                <h1>Conoce nuestras Habitaciones
                </h1>
                </RoomWidgetContainer>
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