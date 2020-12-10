import React, {useState} from 'react'
import './storyPanel.css'
const StoryPanel = () =>  {

  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleImage = (event) =>
    setImage(URL.createObjectURL(event.target.files[0]));
  
  const handleText =(e) => {
    const {value} = e.currentTarget

    setText(value)
  }

  return (
    <div className="storyPanel">
      <div>
        <div className="storyPanel__input storyPanel__input-text">
          <label htmlFor="photo">Add Story Text</label>
        </div>
        <div className="storyPanel__input storyPanel__input-image">
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

      <div className="storyPanel__container">
        <div className="storyPanel__text-container">
            {/* <p className="storyPanel__text">{text}</p> */}
          <textarea value={text} onChange={(e) => handleText(e)}/>
        </div>
        <div className="storyPanel__image-container">
          <img className="storyPanel__image" src={image} alt="Please upload a background..." />
        </div>
      </div>
    </div>
  )
}


export default StoryPanel
