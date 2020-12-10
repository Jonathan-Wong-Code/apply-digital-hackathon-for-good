import React, {useState, useEffect} from 'react'

const StoryPanel = () =>  {

  const [textInput, setTextInput] = useState('');
  const [file, setFile] = useState('');

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

    // setFile({ ...values, photoFile: file, photo: newFile });
  };

  return (
    <div>
      This is a Story Panel

      <label htmlFor="photo">Upload New Photo</label>
      <FileInput
        type="file"
        accept="image/*"
        id="photo"
        name="photo"
        onChange={onFileChange}
      />
    </div>
  )
}
}

export default StoryPanel
