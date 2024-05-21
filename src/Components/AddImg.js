import React, { useState } from 'react';
import TeacherImg from '../Images/teacherimg.png';
import EditIcon from '@mui/icons-material/Edit';

const AddImg = () => {
    const [profileImage, setProfileImage] = useState(TeacherImg);

    const handleImageClick = () => {
        document.getElementById('profile-image-upload').click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileImage(reader.result);
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
        </div>
    );
};

export default AddImg;
