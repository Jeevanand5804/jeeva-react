import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import './Task.css';

function Task() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(true);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleDelete = (index) => {
    const updatelist = [...list];
    updatelist.splice(index, 1);
    setList(updatelist);
     if (editIndex === index) {
       setEditIndex(-1);
       setText("");
     }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setText(list[index]);
    setShowModal(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text=="") {
       if (editIndex === -1) {
         setList([...list, text]);
       } else {
         const updatedList = [...list];
         updatedList[editIndex] = text;
         setList(updatedList);
         setEditIndex(-1);
       }
      setText("");
    }
  };

   const handleCloseModal = () => {
     setShowModal(false);
     setEditIndex(-1);
     setText("");
   };

  return (
    <div className="container card border border-primary p-4 mt-5 col-lg-6 offset-lg-3 justify-content-center bg-light">
      <form className="justify-content-center p-2" onSubmit={handleSubmit}>
        <label htmlFor="task" className="form-label">
          Enter Task
        </label>
        <input
          type="text"
          id="task"
          className="form-control"
          value={text}
          onChange={handleChange}
        />
        <div>
          <button type="submit" className="btn btn-primary mt-3 mb-3">
            <i className="bi bi-plus-lg"></i>
            Add task
          </button>
        </div>
      </form>
      <ol
        style={{
          height: "200px",
          overflow: "auto",
        }}
      >
        {list.map((item, index) => (
          <li
            key={index}
            className="bg-info text-dark mb-2 p-3 border rounded-3 border-danger"
          >
            {item}
            <i
              className="bi bi-pen edp bg-light text-primary"
              style={{
                float: "right",
                border: "1px solid black",
                padding: "0 3px",
              }}
              onClick={() => handleEdit(index)}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></i>

            <i
              class="bi bi-trash3 bg-danger text-light"
              style={{
                float: "right",
                marginRight: "10px",
                border: "1px solid black",
                padding: "0 5px",
              }}
              onClick={() => handleDelete(index)}
            ></i>
          </li>
        ))}
      </ol>
      {editIndex !== -1 && (
        <div
          className="modal"
          tabIndex="-1"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    autoFocus
                  />
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
}

export default Task;
