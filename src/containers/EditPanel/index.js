import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import StoryPanel from '../../components/StoryPanel'
import { useStoryState } from "../../contexts/story";
import { useStoryDispatch } from "../../contexts/story";
import trashCan from "../../images/trashCan.png";
import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";

const EditPanel = () => {
  
const { updatePanel, deletePanel } = useStoryDispatch();
const stories = useStoryState();
const params = useParams()
const [addText, setAddText] = useState(false);
const history = useHistory();
const [caption, setCaption] = useState('');
const [image, setImage] = useState('');

const contextStory = stories.find(story => story.id === params.id)
const indexOfSlide = stories.indexOf(contextStory)


useEffect(() => {

  if (params && params.id) {
    const {img, text} = contextStory;
    if (text) {
      setAddText(true)
      setCaption(text)
    }
    if (img) setImage(img)
  }

}, [params, stories])


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
    setCaption(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPanel =  {
      img: image,
      text: caption,
      id: params.id
    }

    updatePanel(newPanel)
    history.push('/createStory');
  }

  const handleTextAdd = (e) => {
    const {checked} = e.currentTarget

    setAddText(checked)
    setCaption('')
  }

  const handleDelete = () => {
    deletePanel(params.id);
    history.push('/createStory');
  }

  const goToNextPage = () => {
    if (indexOfSlide + 1 !== stories.length) {
      const newPanel =  {
        img: image,
        text: caption,
        id: params.id
      }

      updatePanel(newPanel)
      history.push(`/editPanel/${stories[indexOfSlide + 1].id}`)
    }

  }
  
  const goToPreviousPage = () => {
    if (indexOfSlide - 1  !== - 1) {
      const newPanel =  {
        img: image,
        text: caption,
        id: params.id
      }

      updatePanel(newPanel)
      history.push(`/editPanel/${stories[indexOfSlide - 1].id}`)
    }

  }


  return (
    <div className="createPanel">
      <div style={{display: "flex", }}>
        <Link to="/createStory" className="createPanel__button createPanel__button--return">Return to Storyboard</Link>
        <button className="createPanel__button createPanel__button--save" onClick={(e) => handleSubmit(e)}>Save</button>
        <div style={{display: 'flex'}}>
         <button className="create-story__delete-button" onClick={(e) => handleDelete(e)}>
            <span style={{ marginRight: "8px" }}>Delete</span>
             <img
              src={trashCan}
              alt=""
              style={{ width: "25px", height: "29px" }}
            />
          </button>
        </div>
      </div>

      <StoryPanel 
        addText={addText} 
        onFileChange={onFileChange} 
        image={image}
        addText={addText} 
        text={caption}
        handleText={handleText}
        handleTextAdd={handleTextAdd}
      />

      <div className="read-story__button-container">
        <div className="read-story__button-container">
          {(indexOfSlide -1 !== -1) && <button onClick={() => goToPreviousPage()} className="read-story__button">
            <img src={leftArrow} alt="" style={{}} />
            <span
              className="read-story__button-label"
              style={{ marginLeft: 16, fontSize: 16 }}
            >
              Previous
            </span>
          </button>}
          {(indexOfSlide + 1 !== stories.length) && <button onClick={() => goToNextPage()} className="read-story__button">
            <span
              className="read-story__button-label"
              style={{ marginRight: 16, fontSize: 16 }}
            >
              Next
            </span>
            <img
              src={rightArrow}
              alt=""
              style={{ width: 50, height: "auto" }}
            />
          </button>}
        </div>
      </div>
    </div>
  )
}

export default EditPanel;
