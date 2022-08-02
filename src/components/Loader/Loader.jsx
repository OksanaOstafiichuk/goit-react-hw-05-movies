import { Rings } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spiner>
      <Rings color="rgba(26, 7, 22, 0.267)" height={200} width={200} />
    </Spiner>
  );
};
