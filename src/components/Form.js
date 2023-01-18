import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  };
  return (
    <form
      className="form rounded-lg bg-form p-4 flex flex-col"
      ref={form}
      onSubmit={sendEmail}
    >
      <label htmlFor="name" className="text-sm text-gray-600 mx-4">
        Your Name
      </label>
      <input
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="user_name"
        required
      />
      <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
        Email
      </label>
      <input
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="user_email"
        required
      />
      <label htmlFor="name" className="text-sm text-gray-600 mx-4 mt-4">
        Message
      </label>
      <textarea
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500 form-control block"
        name="message"
        rows="5"
        required
      />
      <button
        type="submit"
        className="bg-button rounded-md w-1/2 mx-4 mt-8 py-2 text-contact text-sm font-bold"
      >
        Send Message
      </button>
    </form>
  );
}

export default Form;
