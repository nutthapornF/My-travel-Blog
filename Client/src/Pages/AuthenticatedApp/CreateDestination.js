// import "../App.css";
import "../styledPage.css";
import styled from "@emotion/styled";
import axios from "axios";
import { useState, useEffect } from "react";

const CreateDestination = () => {
  // state for creating a new Data Destination
  const [images, setImages] = useState({});
  const [topic, setTopic] = useState("");
  const [topics, setTopics] = useState({
    topic: "topic",
    credit: "credit",
    tags: "tags",
  });
  const [allContent, setAllContent] = useState([]);
  const [imgURL, setImgURL] = useState([]);

  useEffect(() => {}, [allContent, topics]);

  const handleImageChange = (event) => {
    const uniqueId = Math.random().toString(16).slice(2);
    const URLimage = URL.createObjectURL(event.target.files[0]);
    // console.log(imgURL);
    setImages({
      ...images,
      [uniqueId]: event.target.files[0],

      //0 คือตัวที่ client เลือกมา
    });
    setImgURL([...imgURL, URLimage]);
  };
  // console.log(allContent);
  // console.log("--------------------------------");

  const createDestination = async (data) => {
    await axios.post("http://localhost:4000/destination/create", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const handleDeleteImg = (event, imageKey) => {
    delete images[imageKey];
    setImages({ ...images });
  };

  const handleTopic = (e) => {
    topics.topic = e.target.value;
  };
  const handleTags = (e) => {
    topics.tags = e.target.value;
  };
  const handleCredit = (e) => {
    topics.credit = e.target.value;
  };

  const mocSubmit = (event) => {
    event.preventDefault();
    console.log(allContent);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("topic", JSON.stringify(topics.topic));
    formData.append("credit", JSON.stringify(topics.credit));
    formData.append("tags", JSON.stringify(topics.tags));
    formData.append("blogContent", JSON.stringify(allContent));
    // console.log(typeof allContent);
    // console.log(typeof JSON.stringify(allContent));
    for (let imageKey in images) {
      console.log(images[imageKey]);
      //
      console.log(images);
      formData.append("images", images[imageKey]);
    }
    createDestination(formData);
  };
  console.log(images);
  console.log(imgURL);
  // console.log(allContent);
  // console.log(topics);
  return (
    <div className="mainWrap">
      <div className="inputSide">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Topic :
            <input
              className="createDataInput"
              type="text"
              onChange={(e) => (topics.topic = e.target.value)}
            />
          </label>
          <label>
            Credit :
            <input
              className="createDataInput"
              type="text"
              onChange={(e) => (topics.credit = e.target.value)}
            />
          </label>
          <label>
            tags :
            <input
              className="createDataInput"
              type="text"
              onChange={(e) => (topics.tags = e.target.value)}
            />
          </label>
          <label>
            Images :
            <input
              className="createDataInput"
              type="file"
              name="images"
              accept="image/png, image/jpeg "
              id="imagesUpload"
              onChange={handleImageChange}
            />
          </label>
          <label htmlFor="contents">contents :</label>
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="1"
            onChange={(e) => (allContent[0] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="2"
            onChange={(e) => (allContent[1] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="3"
            onChange={(e) => (allContent[2] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="4"
            onChange={(e) => (allContent[3] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="5"
            onChange={(e) => (allContent[4] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="6"
            onChange={(e) => (allContent[5] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="7"
            onChange={(e) => (allContent[6] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="8"
            onChange={(e) => (allContent[7] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="9"
            onChange={(e) => (allContent[8] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="10"
            onChange={(e) => (allContent[9] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="11"
            onChange={(e) => (allContent[10] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="12"
            onChange={(e) => (allContent[11] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="13"
            onChange={(e) => (allContent[12] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="14"
            onChange={(e) => (allContent[13] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="15"
            onChange={(e) => (allContent[14] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="16"
            onChange={(e) => (allContent[15] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="17"
            onChange={(e) => (allContent[16] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="18"
            onChange={(e) => (allContent[17] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="19"
            onChange={(e) => (allContent[18] = e.target.value)}
          />
          <textarea
            className="textarea"
            rows="5"
            id="contents"
            placeholder="20"
            onChange={(e) => (allContent[19] = e.target.value)}
          />

          <button className="contactBtn" type="submit">
            {" "}
            Submit
          </button>
        </form>
      </div>
      {/* ---------------------------------------------------- */}
      <div className="previewSide">
        <div className="previewWrapper">
          <h1 className="headerText">PREVIEW </h1>{" "}
          <div className="imgPreviewWrapper">
            {/* <p>
              {topics?.topic} {topics?.tags} {topics?.credit}
            </p>
            {allContent?.map((tent, i) => {
              console.log(tent);
              console.log(topics);
              return <p key={i}> {tent} </p>;
            })} */}
            {/* {topics?.con} */}
            {imgURL.map((imageKey, i) => {
              console.log(images);
              // console.log(imageKey);
              const file = images[imageKey];
              console.log(imageKey);
              return (
                <img
                  src={imageKey}
                  // alt={file?.data?.name}
                  className="previewImg"
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDestination;
