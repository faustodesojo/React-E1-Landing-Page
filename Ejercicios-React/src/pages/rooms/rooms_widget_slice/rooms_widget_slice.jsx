import React from 'react';
import { RoomsCards } from '../rooms_cards/rooms_cards';
import { RoomWidgetContainer } from './styles';

export const RoomWidgetSlice = ({ rooms }) => {
  const firstThreeRooms = rooms.slice(0, 3);

  return (
    <div>
      <RoomWidgetContainer>
        <h1>Conoce nuestras Habitaciones</h1>
      </RoomWidgetContainer>
      <div>
        {firstThreeRooms.map((room) => (
          <RoomsCards key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
};
