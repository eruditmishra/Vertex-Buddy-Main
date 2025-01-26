"use client";
import { BASE_URL } from "@/url";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name: fullName,
      email,
      message,
    };

    try {
      const response = await fetch(`${BASE_URL}/contact/create-contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        resetForm();
        toast.success("Message sent successfully");
      }
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <form className="flex flex-col gap-5 mt-6" onSubmit={handleSubmit}>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full name"
        className="w-full px-5 py-3 border-solid border-[1px] rounded-md "
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full px-5 py-3 border-solid border-[1px] rounded-md "
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        placeholder="Message"
        className="w-full px-5 py-3 border-solid border-[1px] rounded-md  resize-none"
      />
      <button
        type="submit"
        className=" bg-primary-violet text-white px-6 py-4 rounded-md font-medium"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
