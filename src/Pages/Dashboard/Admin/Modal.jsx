import React, { useRef } from 'react';

const Modal = ({ modalRef}) => {

    const handleFeedback = (event) =>{
        event.preventDefault()
     const feedback =  event.target.feedback.value     

     console.log(feedback);
    }


  return (
    <>
      <tr>
        {/* Table rows */}
      </tr>

      {/* Open modal button */}
      {/* <button className="btn">Open Modal</button> */}

      {/* Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <form onSubmit={handleFeedback} method="dialog" className="modal-box">
        <textarea className="textarea w-full textarea-accent" placeholder="Write Your Feedback" name='feedback'></textarea>
          <div className="flex justify-end gap-6">
            {/* if there is a button in the form, it will close the modal */}
            <input type="submit" value="send" />
            <button className="btn modal-action">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
