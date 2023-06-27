import React, { useState } from "react";

function LocalPathImg() {
    const [selectedImage, setSelectedImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    function handleInputChange(event) {
      setSelectedImage(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      convertToHttpUrl();
    }

    function convertToHttpUrl() {
      const baseUrl = "http://localhost:3000/"; // Replace with your local web server's base URL
      const httpUrl = baseUrl + selectedImage.replace(/\\/g, "/");
      setImageUrl(httpUrl);
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Paste image path here"
            onChange={handleInputChange}
            value={selectedImage}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        {imageUrl && <img src={imageUrl} alt="Selected Image" />}
      </div>
    );
}

export default LocalPathImg;
