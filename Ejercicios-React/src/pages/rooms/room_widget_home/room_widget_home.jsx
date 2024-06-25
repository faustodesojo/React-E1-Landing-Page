import { RoomsCards } from '../rooms_cards/rooms_cards';
import { recommendedRooms } from '../../../data/recommendedRooms';
import { Button, RoomWidgetContainer } from './styles';
import { Habitaciones } from '../../../filer_rooms/Habitaciones';
import { Link } from 'react-router-dom';

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
      <Link to="/rooms">
        <Button>Ver Más</Button>
      </Link>
    </RoomWidgetContainer>
  );
};