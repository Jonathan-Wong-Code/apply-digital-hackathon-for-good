import React, {useState} from 'react'
import './gamePanel.css'
const GamePanel = () =>  {

  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleImage = (event) =>
    setImage(URL.createObjectURL(event.target.files[0]));
  
  const handleText =(e) => {
    const {value} = e.currentTarget

    setText(value)
  }

  return (
    <div className="gamePanel">
      <div>
        <div className="gamePanel__input gamePanel__input-text">
          <label htmlFor="photo">Add Story Text</label>
        </div>
        <div className="gamePanel__input gamePanel__input-image">
          <label htmlFor="photo">Upload New Photo</label>
          <input
            type="file"
            className="input__text-photo"
            accept="image/*"
            required
            capture="environment"
            onInput={(event) => handleImage(event)}
          />
        </div>
      </div>

      <div className="gamePanel__container">
        <div className="gamePanel__text-container">
            {/* <p className="gamePanel__text">{text}</p> */}
          <textarea value={text} onChange={(e) => handleText(e)}/>
        </div>
        <div className="gamePanel__image-container">
          <img className="gamePanel__image" src={image} alt="Please upload a background..." />
        </div>
      </div>
    </div>
  )
}


export default GamePanel
