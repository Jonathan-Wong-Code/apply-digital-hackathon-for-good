import React from 'react';
import brush from '../../images/brush-icon.png'
import pencil from '../../images/pencil-icon.png'
import shapes from '../../images/shapes.png'
import mouse from '../../images/mouse-pointer.png'
import textIcon from '../../images/text-icon.png'
import imageIcon from '../../images/image-icon.png'

const StoryPanel = ({addText, onFileChange, image, text, handleText, handleTextAdd}) => {
  return (
    <div style={{marginTop: "50px", display:'block'}}>
      <div className="storyPanel">
        <div className="storyPanel__icon-container">
            <div style={{ width: "25px", height: "29px" }}>
              <img
                src={mouse}
                alt=""
                style={{width: 'auto'}}
              />
            </div>
            <label htmlFor="photo" style={{ width: "25px", height: "29px" }}><img
                src={imageIcon}
                alt=""
                style={{width: 'auto'}}
              />
              </label>
            <input
              type="file"
              accept="image/*"
              id="photo"
              name="photo"
              onChange={onFileChange}
              style={{display: "none"}}
            />
            <div style={{ width: "25px", height: "29px" }}>
              <img
                src={pencil}
                alt=""
                style={{width: 'auto'}}
              />
            </div>
            <label htmlFor="textAdd" style={{ width: "25px", height: "29px" }}>
              <img
                src={textIcon}
                alt=""
                style={{width: 'auto'}}
              />
            </label>
            <input style={{display: "none"}} type="checkbox" value={addText} checked={addText} id="textAdd" onChange={(e) => handleTextAdd(e)}/>
            <div style={{ width: "25px", height: "29px" }}>
              <img
                src={brush}
                alt=""
                style={{width: 'auto'}}
              />
            </div>
            <div style={{ width: "25px", height: "29px" }}>
              <img
                src={shapes}
                alt=""
                style={{width: 'auto'}}
              />
            </div>
            
        </div>
        <div className="storyPanel__container">
          {image && <div className="storyPanel__image-container">
              <img className="storyPanel__image" src={image} alt="" />
          </div>}
          {addText && <div className="storyPanel__text-container">
            <textarea value={text} rows="20" cols="40" placeholder={"Please enter in story text"} style={{fontFamily: "Arial",fontSize: '16px',lineHeight: '1.4'}}  onChange={(e) => handleText(e)}/>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default StoryPanel;
