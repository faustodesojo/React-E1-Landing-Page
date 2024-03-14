import { RoomsCards } from '../rooms_cards/rooms_cards'
import { rooms } from '../../../data/rooms'
import {Blur, RoomWidgetContainer } from './styles'

export const RoomsWidget = () => {
    return (
        <div>
            <RoomWidgetContainer>
            <Blur>
                <h1>Conoce nuestras Habitaciones
                </h1>
                </Blur>
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