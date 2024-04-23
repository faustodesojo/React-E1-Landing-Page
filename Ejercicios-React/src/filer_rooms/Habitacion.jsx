import { motion } from 'framer-motion';
import { Container } from './style';

export const Habitacion = ({ img, name }) => {
  return (
    <Container>
      <motion.div
        selected={false} 
        onClick={(e) => e.preventDefault()}
        whileTap={{ scale: 0.9 }}
      >
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </motion.div>
    </Container>
  );
};