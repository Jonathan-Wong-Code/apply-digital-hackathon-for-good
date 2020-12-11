import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import StoryPanel from "../../components/StoryPanel";
import { useStoryState } from "../../contexts/story";
import { useStoryDispatch } from "../../contexts/story";
import trashCan from "../../images/trashCan.png";
import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";
import breadCrumb from "../../images/breadcrumbArrow.png";

const EditPanel = () => {
  
const { updatePanel, deletePanel } = useStoryDispatch();
const stories = useStoryState();
const params = useParams()
const [addText, setAddText] = useState(false);
const history = useHistory();
const [title, setTitle] = useState('')
const [caption, setCaption] = useState('');
const [image, setImage] = useState('');

const contextStory = stories.find(story => story.id === params.id)
const indexOfSlide = stories.indexOf(contextStory)


useEffect(() => {
    const contextStory = stories.find(story => story.id === params.id)
    const {img, text, title} = contextStory;
    if (text) {
      setAddText(true)
      setCaption(text)
    }
    if (img) setImage(img)
    if (title) setTitle(title)
    
    if (!text) {
      setAddText(false)
      setCaption('')
    }
    if (!img) {
      setImage('')
      setCaption('')
    }
    if (!title) {
      setTitle('')
    }
}, [params, stories])

  const onFileChange = (e) => {
    const file = e.currentTarget.files[0];
    file.current = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const newFile = {
        name: file.name,
        size: file.size,
        type: file.type, // MIME type
        data: fileReader.result,
        isUploading: false,
      };

      setImage(newFile.data);
    };

    fileReader.onabort = () => {
      alert("Reading aborted");
    };

    fileReader.onerror = () => {
      alert("File reading error");
    };

    fileReader.readAsDataURL(file);
  };

  const handleText = (e) => {
    const { value } = e.currentTarget;
    setCaption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPanel = {
      img: image,
      text: caption,
      title,
      id: params.id
    }

    updatePanel(newPanel);
    history.push("/createStory");
  };

  const handleTextAdd = (e) => {
    const { checked } = e.currentTarget;

    setAddText(checked);
    setCaption("");
  };

  const handleDelete = () => {
    deletePanel(params.id);
    history.push("/createStory");
  };

  const goToNextPage = () => {
    if (indexOfSlide + 1 !== stories.length) {
      const newPanel = {
        img: image,
        text: caption,
        title,
        id: params.id
      }

      updatePanel(newPanel);
      history.push(`/editPanel/${stories[indexOfSlide + 1].id}`);
    }
  };

  const goToPreviousPage = () => {
    if (indexOfSlide - 1 !== -1) {
      const newPanel = {
        img: image,
        text: caption,
        title,
        id: params.id
      }

      updatePanel(newPanel);
      history.push(`/editPanel/${stories[indexOfSlide - 1].id}`);
    }
  };

  const handleTitle = (e) => {
    const { value } = e.currentTarget;

    setTitle(value);
  };
  /**
 * <div style={{display: "flex", position: 'relative' }}>
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
 */

  return (
    <div className="createPanel">
      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "auto" }}
        >
          <img
            src={breadCrumb}
            alt=""
            style={{ width: "36px", height: "15px", marginRight: "16px" }}
          />
          <Link
            to="/createStory"
            className="createPanel__button createPanel__button--return"
          >
            Return to Storyboard
          </Link>
        </div>
        <button
          className="createPanel__button createPanel__button--save"
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </button>
        <div style={{ display: "flex" }}>
          <button
            className="create-story__delete-button"
            onClick={(e) => handleDelete(e)}
          >
            <span style={{ marginRight: "8px" }}>Delete</span>
            <img
              src={trashCan}
              alt=""
              style={{ width: "25px", height: "29px" }}
            />
          </button>
        </div>
        <h2
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translateX(-50%)",
          }}
        >
          <input
            style={{
              fontSize: "36px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            type="text"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
        </h2>
      </div>

      <StoryPanel
        addText={addText}
        onFileChange={onFileChange}
        image={image}
        text={caption}
        handleText={handleText}
        handleTextAdd={handleTextAdd}
      />

      <div className="read-story__button-container">
        <div className="read-story__button-container">
          {indexOfSlide - 1 !== -1 && (
            <button
              onClick={() => goToPreviousPage()}
              className="read-story__button"
            >
              <img src={leftArrow} alt="" style={{}} />
              <span
                className="read-story__button-label"
                style={{ marginLeft: 16, fontSize: 16 }}
              >
                Previous
              </span>
            </button>
          )}
          {indexOfSlide + 1 !== stories.length && (
            <button
              onClick={() => goToNextPage()}
              className="read-story__button"
            >
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
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditPanel;
