import { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.form`
  display: flex;
  justify-content: space-around;
`;

const Savebtn = styled.button`
  background-color: #408ef1;
  color: white;
  cursor: pointer;
  border: 0px;
  border-radius: 7px;
  height: 24px;
`;

const Inputname = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 7px;
  &:focus {
    outline: 1px solid black;
  }
`;

const NicknameLabel = styled.label`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  padding-top: 16px;
`;

function UsernameForm(props) {
  const [newUsername, setNewUsername] = useState("");

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can make an API call to update the user's username in your backend database
    props.onSubmit(newUsername);
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <NicknameLabel>
        닉네임
        {/* New username: */}
        <Inputname
          type="text"
          value={newUsername}
          onChange={handleUsernameChange}
        />
      </NicknameLabel>
      <ButtonContainer>
        <Savebtn>저장</Savebtn>
      </ButtonContainer>
    </InputContainer>
  );
}

export default UsernameForm;
