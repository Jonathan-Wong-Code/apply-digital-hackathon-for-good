import React, {useState} from 'react'
import './storyPanel.css'
const StoryPanel = () =>  {

  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [reverse, setReverse] = useState(false);

  const handleImage = (event) =>
    setImage(URL.createObjectURL(event.target.files[0]));
  
  const handleText =(e) => {
    const {value} = e.currentTarget
    setText(value)
  }

  const handleReverse = (e) => {
    const {checked} = e.currentTarget
    setReverse(checked)
  }

  const handleAddText = () => {
    
  }

  return (
    <div className="storyPanel">
      <div>
        <div className="storyPanel__input storyPanel__input-text">
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
        <div className="storyPanel__input">
          <label htmlFor="photo">Reverse Image and Text</label>
          <input type="checkbox" checked={reverse} value={reverse} onChange={(e) => handleReverse(e)}/>
        </div>
      </div>

      <div className="storyPanel__container" style={{flexDirection: reverse ? 'row-reverse' : 'row'}}>
        <div className="storyPanel__text-container">
          <textarea value={text} rows="20" cols="40" placeholder={"Please enter in story text"}  onChange={(e) => handleText(e)}/>
        </div>
        <div className="storyPanel__image-container">
          <img className="storyPanel__image" src={image} alt="Please upload a background..." />
        </div>
      </div>
    </div>
  )
}


export default StoryPanel
