import { useState } from "react";

const Modal = ({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <button
          className="bg-accent p-2 hover:bg-orange-600 rounded border border-transparent text-ij-white tracking-widest uppercase"
          type="button"
          onClick={() => setShowModal(true)}
        >
          + Añadir
        </button>
      </div>

      {showModal ? (
        <>

          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/50">

            <div className="relative my-6 mx-auto w-2/3">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">{title}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">{children}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
