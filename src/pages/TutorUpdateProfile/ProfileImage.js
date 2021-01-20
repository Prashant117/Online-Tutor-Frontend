import React from 'react';
import profile from '../../images/ProfileImage.png';
import EditIcon from '@material-ui/icons/Edit';

const ProfileImage = ({ register, image, setImage }) => {
  return (
    <div>
      <div className="row row-space">
        <div className="update__profile-image-wrapper">
          <div className="profile__image">
            <img
              ref={register}
              src={image === null ? profile : URL.createObjectURL(image)}
              alt="Profile"
            />

            <div className="edit-box">
              <label htmlFor="image">
                <EditIcon className="image-edit" />
              </label>
              <input
                className="file-input"
                type="file"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
