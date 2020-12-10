import React from 'react';

const StoryPanel = ({addText, onFileChange, image, text, handleText, handleTextAdd}) => {
  return (
    <div style={{marginTop: "50px", display:'block'}}>
      <div className="storyPanel">
        <div className="storyPanel__icon-container">
          <div className="storyPanel__input storyPanel__input-text">
            <label htmlFor="photo">Select</label>
            <label htmlFor="photo">Add Image</label>
            <input
              type="file"
              accept="image/*"
              id="photo"
              name="photo"
              onChange={onFileChange}
              style={{display: "none"}}
            />
            <label>Draw</label>
            <label htmlFor="textAdd" style={{fontSize: '30px'}}>T</label>
            <input style={{display: "none"}} type="checkbox" value={addText} checked={addText} id="textAdd" onChange={(e) => handleTextAdd(e)}/>
            <label>Stamps</label>
            <label>Shapes</label>
          </div>
        </div>
        <div className="storyPanel__container">
          {image && <div className="storyPanel__image-container">
              <img className="storyPanel__image" src={image} alt="" />
          </div>}
          {addText && <div className="storyPanel__text-container">
            <textarea value={text} rows="20" cols="40" placeholder={"Please enter in story text"}  onChange={(e) => handleText(e)}/>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default StoryPanel;
