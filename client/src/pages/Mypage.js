import { useState } from "react";
import UserinfoNav from "../components/Userinfonav";
import UsernameForm from "../components/UsernameForm";

function Mypage() {
  const [activeButton, setActiveButton] = useState("home");
  const [username, setUsername] = useState("");

  function handleButtonClick(buttonName) {
    setActiveButton(buttonName);
  }

  const handleUsernameChange = (newUsername) => {
    // Here you can make an API call to update the user's username in your backend database
    setUsername(newUsername);
  };

  return (
    <div>
      <UserinfoNav
        activeButton={activeButton}
        onButtonClick={handleButtonClick}
      />
      <h1>회원정보</h1>
      <UsernameForm onSubmit={handleUsernameChange} />
      {/* other components */}
    </div>
  );
}

export default Mypage;
