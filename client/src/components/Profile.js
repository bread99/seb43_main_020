import { useState, useRef } from "react";
import styled from "styled-components";

const ChangeText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 16px;
  text-align: center;
  opacity: 0;
`;

const ProfilePicture = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover img {
    filter: brightness(50%);
  }

  :hover ${ChangeText} {
    opacity: 1;
  }

  input[type="file"] {
    display: none;
  }
`;

function Profile() {
  const [fileData, setFileData] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFileData(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handlePictureClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <ProfilePicture onClick={handlePictureClick}>
        <img
          src={
            fileData ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
        <ChangeText>변경</ChangeText>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
        />
      </ProfilePicture>
    </div>
  );
}

export default Profile;
