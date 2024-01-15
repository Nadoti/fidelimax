import {useState, useRef, Dispatch, SetStateAction, ChangeEvent} from 'react';
import { PinturaEditorModal  } from '@pqina/react-pintura';
import { getEditorDefaults  } from '@pqina/pintura';
import '@pqina/pintura/pintura.css';
import Image from 'next/image';

interface ImageProps {
  imageValue: string ;
  setImageValue: Dispatch<SetStateAction<string>>;
}

const editorDefaults = getEditorDefaults();

export function ImageCustomizable({imageValue, setImageValue}: ImageProps) {
  const [editorEnabled, setEditorEnabled] = useState(false);  
  const fileInputRef = useRef<HTMLInputElement | null>(null);


  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files && files.length > 0) {
      setEditorEnabled(true);
      setImageValue(URL.createObjectURL(files[0]));
    }
    
  };
  const handleEditorHide = () => setEditorEnabled(false);

  function handleEditorProcess(imageState: any ) {
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(imageState.dest);
    setImageValue(URL.createObjectURL(dataTransfer.files[0]));
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
      />

      {editorEnabled && (
        <PinturaEditorModal
          {...editorDefaults}
          src={imageValue}
          imageCropAspectRatio={1}
          onHide={handleEditorHide}
          onProcess={handleEditorProcess}
        />
      )}
      {imageValue && <Image className='mt-5 rounded-full' width={150} height={150} src={imageValue} alt="image-pintura" />}
    </>
  )
}