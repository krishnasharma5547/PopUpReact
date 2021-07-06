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
  const [props, setProps] = useState({
    title: "Are You Sure?",
    dec: "Do you really want to delete these records? This process cannot be undone.",
    okText: "Delete",
    cancelText: "Cancel",
  });
  return (
      <>
        <Popup props={props}></Popup>
      </>
  );
}


export default App;
