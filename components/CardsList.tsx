import { VStack } from '@chakra-ui/react';
import { ListProps } from '../interfaces';

const CardsList = ({ children }: ListProps): JSX.Element => {
  return (
    <VStack my={5} spacing={5}>
      {children}
    </VStack>
  );
};

export default CardsList;
