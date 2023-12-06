import React from 'react';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { rooms } from '../../data/rooms';
import { RoomWidgetSlice } from '../../pages/rooms/rooms_widget_slice/rooms_widget_slice';
import { Link } from 'react-router-dom';
import { Button } from './styles';

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <RoomWidgetSlice rooms={rooms} />
    <a href="Rooms">
        <Button>Ver Más</Button>
        </a>
    </div>
  );
};
