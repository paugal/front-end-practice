import React, { useState } from 'react';
import './LoadFile.css'
import IteamLoadedList from './ItemLoadedList'

export default function LoadFile() {
    const [dragActive, setDragActive] = useState(false);
    const [filePreviews, setFilePreviews] = useState([]);

    // Handle drag events
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    // Handle drop event
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    // Handle file selection via click on "Browse"
    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
          handleFiles(e.target.files);
        }
      };

    // Trigger click on the hidden file input when "Browse" is clicked
    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };

    const handleFiles = (files) => {
        const fileArray = Array.from(files);
        const previews = fileArray.map((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return new Promise((resolve) => {
                reader.onload = () => resolve({ name: file.name, src: reader.result, type: file.type, size: file.size });
            });
        });

        Promise.all(previews).then((results) => {
            setFilePreviews((prev) => [...prev, ...results]);
        });
    };

    return (
        <div className='loadFile' >
            <h1>Upload file</h1>
            <div className='dropArea'
                style={{
                    backgroundColor: dragActive ? '#f9f9f9' : '#fff',
                }}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={triggerFileInput}
            >
                <span className="material-symbols-outlined">
                    upload_file
                </span>
                <p>Drop your files here, or <span className='link'>Browse</span></p>
                <input
                    type="file"
                    id="fileInput"
                    multiple
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                />
            </div>
            <h2>Loaded Files</h2>
            
            <div style={{ marginTop: '20px' }}>
                {filePreviews.length === 0 ? 
                    <div>
                        No files uploaded yet! Here you will see all your load files.
                    </div> 
                
                : null}
                {filePreviews.map((file, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <IteamLoadedList file={file}></IteamLoadedList>
                    </div>
                ))}
            </div>
        </div>
    );
}
