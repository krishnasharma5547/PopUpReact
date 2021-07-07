import React, {useState} from "react";
import {ExclamationIcon, XIcon} from "@heroicons/react/outline";
import {IState as Props} from "./App";
import {Dialog, Transition} from "@headlessui/react";

interface Iprops {
  props: Props["PopUp"];
}

const Popup: React.FC<Iprops> = ({props}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const show = () => {
    setIsOpen((pre) => !pre);
  };
  return (
      <>
        <button
            type="button"
            className={
              !isOpen
                  ? "border border-blue-500 px-3 py-1 rounded-lg hover:bg-blue-200 mx-auto mt-12 block"
                  : "hidden"
            }
            onClick={show}
        >
          Show PopUP
        </button>
        <Transition.Root show={isOpen}>
          <Dialog open={isOpen} onClose={setIsOpen}>
            <Transition.Child
                enter="transition-opacity ease-linear duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
              <div
                  className={
                    isOpen
                        ? "relative p-4 flex flex-col space-y-4 border-2 border-red-500 bg-blue-50 rounded-xl text-center w-96 mx-auto mt-12"
                        : "hidden"
                  }
              >
                <XIcon
                    className="absolute top-3 right-4 w-5 h-5 cursor-pointer"
                    onClick={show}
                ></XIcon>
                <ExclamationIcon className="w-20 h-20 mx-auto text-red-700"/>
                <h1 className="text-3xl font-semibold">{props.title}</h1>
                {props.dec && <p className="">{props.dec}</p>}
                <div className="flex justify-between px-6 py-6">
                  <button
                      type="button"
                      className="border bg-green-200 border-blue-500  px-3 py-1 rounded-lg hover:bg-blue-200"
                      onClick={show}
                  >
                    {props.cancelText}
                  </button>
                  <button
                      type="button"
                      className="border bg-red-300 border-blue-500 px-3 py-1 rounded-lg hover:bg-blue-200"
                      onClick={show}
                  >
                    {props.okText}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
  );
};
export default Popup;
