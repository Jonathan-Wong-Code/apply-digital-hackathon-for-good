import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import { useStoryDispatch } from "../../contexts/story";
import './createPanel.css'

const CreatePanel = () => {

  const { addPanel } = useStoryDispatch();

  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [addText, setAddText] = useState(false);
  const history = useHistory();

  const onFileChange = e => {
    const file = e.currentTarget.files[0];
    file.current = e.target.files[0];

    const fileReader = new FileReader();
    
    fileReader.onload = () => {
      const newFile = {
        name: file.name,
        size: file.size,
        type: file.type, // MIME type
        data: fileReader.result,
        isUploading: false
      };

      setImage( newFile.data );
    };

    fileReader.onabort = () => {
      alert('Reading aborted');
    };

    fileReader.onerror = () => {
      alert('File reading error');
    };

    fileReader.readAsDataURL(file);
  };


  
  const handleText =(e) => {
    const {value} = e.currentTarget
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPanel =  {
      img: image,
      text,
      id: uuidv4(),
    }

    addPanel(newPanel)
    history.push('/createStory');
  }

  const handleTextAdd = (e) => {
    const {checked} = e.currentTarget

    setAddText(checked)
    setText('')

  }


  return (
    <div className="createPanel">
      <div style={{display: "flex", }}>
        <Link to="/createStory" class="createPanel__button createPanel__button--return">Return to Storyboard</Link>
        <button class="createPanel__button createPanel__button--save" onClick={(e) => handleSubmit(e)}>Save</button>
        <button class="createPanel__button createPanel__button--delete" onClick={(e) => handleSubmit(e)}>Delete</button>
      </div>

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
              <label htmlFor="textAdd">Add Text</label>
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
    </div>
  )
}

export default CreatePanel;
