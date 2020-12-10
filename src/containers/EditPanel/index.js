import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import StoryPanel from '../../components/StoryPanel'
import { useStoryState } from "../../contexts/story";
import { useStoryDispatch } from "../../contexts/story";

const EditPanel = () => {
  
const { updatePanel, deletePanel } = useStoryDispatch();
const stories = useStoryState();
const params = useParams()
const [addText, setAddText] = useState(false);
const history = useHistory();
const [caption, setCaption] = useState('');
const [image, setImage] = useState('');


useEffect(() => {

  if (params && params.id) {
    const contextStory = stories.find(story => story.id === params.id)
    const {img, text} = contextStory;
    console.log(contextStory)
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
    deletePanel(params.id)
  }


  return (
    <div className="createPanel">
      <div style={{display: "flex", }}>
        <Link to="/createStory" className="createPanel__button createPanel__button--return">Return to Storyboard</Link>
        <button className="createPanel__button createPanel__button--save" onClick={(e) => handleSubmit(e)}>Save</button>
        <button className="createPanel__button createPanel__button--delete" onClick={(e) => handleDelete(e)}>Delete</button>
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
    </div>
  )
}

export default EditPanel;
