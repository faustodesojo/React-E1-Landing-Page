import { RoomsCards } from '../rooms_cards/rooms_cards';
import { recommendedRooms } from '../../../data/recommendedRooms';
import { Button, RoomWidgetContainer } from './styles';
import { Habitaciones } from '../../../filer_rooms/Habitaciones';

export const RoomsWidgetHome = () => {
  return (
    <RoomWidgetContainer>
      <h1>Conoce nuestras Habitaciones</h1>
      <Habitaciones />
      <div>
        {recommendedRooms.map((room) => (
          <RoomsCards key={room.id} {...room} />
        ))}
      </div>
      <a href="Rooms">
        <Button>Ver Más</Button>
      </a>
    </RoomWidgetContainer>
  );
};