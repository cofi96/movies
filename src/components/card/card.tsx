import { GrFormClose } from 'react-icons/gr';
import useModal from '../../hooks/useModal';
import { Movie } from '../../models/movie';

import {
  CardDescription,
  CardInfo,
  CardTextWrap,
  CardTitle,
  StyledCard,
  StyledCloseButton,
  StyledImg,
} from './card.style';

type CardProps = {
  movie: Movie;
};

function Card({ movie }: CardProps) {
  const { onToggleHandler, onCloseHandler, createModal } = useModal();

  return (
    <>
      <StyledCard onClick={onToggleHandler}>
        <StyledImg src={movie.thumbnail} />
        <h3>{movie.name}</h3>
      </StyledCard>
      {createModal({
        children: (
          <CardDescription>
            <StyledCloseButton onClick={onCloseHandler}>
              <GrFormClose className="card__close-icon" />
            </StyledCloseButton>
            <StyledImg $padding src={movie.thumbnail} />
            <CardTextWrap>
              <CardTitle>{movie.name}</CardTitle>
              <CardInfo>{movie.description}</CardInfo>
            </CardTextWrap>
          </CardDescription>
        ),
      })}
    </>
  );
}

export default Card;
