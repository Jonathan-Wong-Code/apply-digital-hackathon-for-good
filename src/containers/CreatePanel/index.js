import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import { useStoryDispatch } from "../../contexts/story";
import StoryPanel from '../../components/StoryPanel'
import breadCrumb from '../../images/breadcrumbArrow.png'
import './createPanel.css'

const CreatePanel = () => {

  const { addPanel } = useStoryDispatch();

  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('')
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
      title,
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

  const handleTitle = (e) => {
    const {value} = e.currentTarget

    setTitle(value)
  }


  return (
    <div className="createPanel">
      <div style={{display: "flex", position: 'relative' }}>
        <div style={{display: 'flex', alignItems: 'center', marginRight: 'auto'}}>
          <img
            src={breadCrumb}
            alt=""
            style={{ width: "36px", height: "15px", marginRight: "16px" }}
          />
          <Link to="/createStory" className="createPanel__button createPanel__button--return">Return to Storyboard</Link>

        </div>
        <button className="createPanel__button createPanel__button--save" onClick={(e) => handleSubmit(e)}>Save</button>
        <h2 style={{position: 'absolute', left: '50%', top: '0', transform: 'translateX(-50%)'}}><input style={{fontSize: '36px', textAlign: "center", fontWeight: 'bold'}} type="text" value={title} onChange={(e) => handleTitle(e)}/></h2>
      </div>

      <StoryPanel 
        addText={addText} 
        onFileChange={onFileChange} 
        image={image}
        addText={addText} 
        text={text}
        handleText={handleText}
        handleTextAdd={handleTextAdd}
      />
    </div>
  )
}

export default CreatePanel;
