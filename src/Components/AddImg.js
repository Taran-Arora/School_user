import React, { useState } from 'react';
import TeacherImg from '../Images/teacherimg.png';
import EditIcon from '@mui/icons-material/Edit';

const AddImg = ({ onImageChange }) => {
    const [profileImage, setProfileImage] = useState(TeacherImg);
    const [imageUploaded, setImageUploaded] = useState(false);

    const handleImageClick = () => {
        document.getElementById('profile-image-upload').click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileImage(reader.result);
            setImageUploaded(true);
            if (onImageChange) {
                onImageChange(true);
            }
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-pic">
            <div className="img-container" onClick={handleImageClick}>
                <img
                    alt="User Pic"
                    src={profileImage}
                    id="profile-image1"
                    height="200"
                />
                <EditIcon className="edit-icon"/>
            </div>
            <input
                id="profile-image-upload"
                className="hidden"
                type="file"
                onChange={handleImageChange}
                style={{ display: 'none' }}
            />
            <input
                id="profile-image-required"
                type="hidden"
                value={imageUploaded ? 'uploaded' : ''}
                required
            />
        </div>
    );
};

export default AddImg;
