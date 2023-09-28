import React, { useState } from "react";
import video from "./img/video.mp4"

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [payment, setPayment] = useState("");
  const [link, setLink] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc || !payment || !link) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc, payment, link);
      setTitle("");
      setDesc("");
      setPayment("");
      setLink("URL");
    }
  };
  return (
    <>
    <div className="container my-3">
      <h3>Dream Web</h3>
      <h5>Shoaib Ali</h5>
      <form onSubmit={submit}>
        <div className="input">
        <div className="mb-3">
          <label htmlfor="title" className="form-label">
            Website Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="desc" className="form-label">
            Completed Date
          </label>
          <input
            type="date"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        </div>
        <div className="input">
        <div className="mb-3">
          <label htmlfor="desc" className="form-label">
            Payment
          </label>
          <input
            type="number"
            value={payment}
            onChange={(e) => {
              setPayment(e.target.value);
            }}
            className="form-control"
            id="payment"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="desc" className="form-label">
            Link
          </label>
          <input
            type="url"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            className="form-control"
            id="link"
          />
        </div>
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Website
        </button>
      </form>
    </div>
    </>
  );
};
