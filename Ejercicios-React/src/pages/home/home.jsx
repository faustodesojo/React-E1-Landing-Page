
import { Header } from "../../components/header/header";
import { Hero } from "../../components/hero/hero";
import { RoomsWidgetHome } from "../../pages/rooms/room_widget_home/room_widget_home";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <RoomsWidgetHome />
    </div>
  );
};
