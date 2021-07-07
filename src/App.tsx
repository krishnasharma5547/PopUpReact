import {useState} from "react";
import Popup from "./Popup";

export interface IState {
  PopUp: {
    title: string;
    dec?: string;
    okText: string;
    cancelText: string;
  };
}

const App: React.FC = () => {
  const [PopUp, setPopUp] = useState({
    title: "Are You Sure?",
    dec: "Do you really want to delete these records? This process cannot be undone.",
    okText: "Delete",
    cancelText: "Cancel",
  });
  return (
      <>
        <Popup props={PopUp}></Popup>
      </>
  );
};

export default App;
