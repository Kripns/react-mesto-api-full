import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
  const {
    onEditProfile,
    onEditAvatar,
    onAddPlace,
    onCardClick,
    cards,
    onCardLike,
    onCardDelete,
  } = props;

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile'>
        <button
          className='profile__avatar'
          type='button'
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        />
        <div className='profile__info'>
          <div className='profile__name-card'>
            <h1 className='profile__heading'>{currentUser.name}</h1>
            <button
              className='edit-button'
              type='button'
              onClick={onEditProfile}
            />
          </div>
          <p className='profile__subheading'>{currentUser.about}</p>
        </div>
        <button
          className='add-card-button'
          type='button'
          onClick={onAddPlace}
        />
      </section>
      <section className='places'>
        {cards.map(item => {
          return (
            <Card
              key={item._id}
              card={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
