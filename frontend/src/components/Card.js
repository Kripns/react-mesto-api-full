import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;
  const currentUser = React.useContext(CurrentUserContext);


  const isOwn = currentUser._id === card.owner._id;
  const cardRemoveIconClassName = `place-card__remove-icon ${
    !isOwn ? 'place-card__remove-icon_hidden' : ''
  }`;

  const isLiked = card.likes.some(id => id === currentUser._id);
  const cardLikeButtonClassName = `place-card__like ${
    isLiked ? 'place-card__like_active' : ''
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card, isLiked);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className='place-card'>
      <img
        className='place-card__image'
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className='place-card__info'>
        <h2 className='place-card__heading'>{card.name}</h2>
        <button
          className={cardRemoveIconClassName}
          type='button'
          onClick={handleDeleteClick}
        />
        <div className='place-card__likes-wrapper'>
          <button
            className={cardLikeButtonClassName}
            type='button'
            onClick={handleLikeClick}
          />
          <p className='place-card__like-counter'>{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
