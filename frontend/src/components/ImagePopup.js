function ImagePopup(props) {
  const { name, isOpen, card, onClose } = props;
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className='popup__image-container'>
        <button
          className='popup__close-icon'
          type='button'
          onClick={onClose}
        />
        <img
          className='popup__fullsize-image'
          src={card.link}
          alt={card.name}
        />
        <p className='popup__subheading'>{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
