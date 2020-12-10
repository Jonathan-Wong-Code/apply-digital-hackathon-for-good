import React, {useState, useEffect} from 'react';
import StoryPanel from '../../components/StoryPanel'

const CreatePanel = () => {

  const [panelType, setPanelType] = useState('')

  const handlePanelType = (e) => {
    const {value} = e.currentTarget

    setPanelType(value)
  }

  const isStory = panelType === 'story'
  const isGame = panelType === 'game'

  return (
    <div className="createPanel">
      <div className="createPanel__select-wrapper" style={{marginBottom: "50px", display:'block'}}>
        <select className="createPanel__select" value={panelType} onChange={(e) => handlePanelType(e)}>
          <option value="">Please select a panel type</option>
          <option value="story">Story Panel</option>
          <option value="game">Game Panel</option>
        </select>
      </div>

      <div>
        {isStory && <StoryPanel />}

      </div>




    </div>
  )
}

export default CreatePanel;