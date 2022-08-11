import "../App.css";
import styled from "@emotion/styled";
import axios from "axios";
import { useState, useEffect } from "react";

const CreateDestination = () => {
  // state for creating a new Destination
  const [images, setImages] = useState({});
  const [topic, setTopic] = useState("");
  const [credit, setCredit] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContents] = useState([]);

  const handleImageChange = (event) => {
    const uniqueId = Date.now();
    setImages({
      ...images,
      [uniqueId]: event.target.files[0], //0 คือตัวที่ client เลือกมา
    });
  };
  console.log(images);

  const createDestination = async (data) => {
    await axios.post("http://localhost:4000/destination/create", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const handleDeleteImg = (event, imageKey) => {
    delete images[imageKey];
    setImages({ ...images });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("topic", topic);
    formData.append("credit", credit);
    formData.append("tags", tags);
    formData.append("content", content);

    for (let imageKey in images) {
      formData.append("images", images[imageKey]);
    }

    createDestination(formData);
  };

  return (
    <MainWrap>
      <LeftSide className="inputSide">
        <Form onSubmit={handleSubmit}>
          <Label>
            Topic :
            <input type="text" />
          </Label>
          <Label>
            Credit :
            <input type="text" />
          </Label>
          <Label>
            tags :
            <input type="text" />
          </Label>
          <Label>
            Images :
            <input
              type="file"
              name="images"
              accept="image/png, image/jpeg "
              id="imagesUpload"
              onChange={handleImageChange}
            />
          </Label>
          <Label htmlFor="contents">contents :</Label>
          <Textarea rows="5" id="contents" placeholder="1" />
          <Textarea rows="5" id="contents" placeholder="2" />
          <Textarea rows="5" id="contents" placeholder="3" />
          <Textarea rows="5" id="contents" placeholder="4" />
          <Textarea rows="5" id="contents" placeholder="5" />
          <Textarea rows="5" id="contents" placeholder="6" />
          <Textarea rows="5" id="contents" placeholder="7" />
          <Textarea rows="5" id="contents" placeholder="8" />
          <Textarea rows="5" id="contents" placeholder="9" />
          <Textarea rows="5" id="contents" placeholder="10" />
          <Textarea rows="5" id="contents" placeholder="11" />
          <Textarea rows="5" id="contents" placeholder="12" />
          <Textarea rows="5" id="contents" placeholder="13" />
          <Textarea rows="5" id="contents" placeholder="14" />
          <Textarea rows="5" id="contents" placeholder="15" />
          <ContactBtn type="submit"> Submit</ContactBtn>
        </Form>
      </LeftSide>
      {/* ---------------------------------------------------- */}
      <RightSide className="previewSide">
        <PreviewWrapper>
          <HeaderText>PREVIEW </HeaderText>{" "}
          {Object.keys(images).map((imageKey) => {
            const file = images[imageKey];
            return (
              <ContentWrapper key={imageKey}>
                <Img src={URL.createObjectURL(file)} alt={file.name} />
                <Button>X</Button>
              </ContentWrapper>
            );
          })}
        </PreviewWrapper>
      </RightSide>
    </MainWrap>
  );
};

export default CreateDestination;

const MainWrap = styled.div`
  padding-top: 60px;
  display: flex;
`;
const LeftSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
const RightSide = styled.div`
  width: 50%;
  height: auto;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  color: white;
  font-size: 14px;
  padding: 10px;
`;

const HeaderText = styled.h1`
  padding-top: 10px;
  text-align: center;
  font-size: 40px;
  padding-bottom: 30px;
`;

const Textarea = styled.textarea`
  width: 500px;
  margin: 5px;
  font-family: "Montserrat", san-sarif;
  font-size: 16px;
`;
const P = styled.p`
  text-align: center;
  padding: 25px;
  font-size: 22px;
`;

const ContactBtn = styled.button`
  padding: 9px 35px;
  width: 190px;
  text-decoration: none;
  background-color: #cc6600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-family: "Montserrat", san-sarif;
  font-weight: 500;
  font-size: 17px;
  color: #edf0f1;
  text-align: center;
`;

//outside map
const PreviewWrapper = styled.div`
  height: 100%;
`;

//first div in mapping
const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 30%;
  margin: 10px 10px;
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 150px;
  right: 220px;
  cursor: pointer;
  background-color: black;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 12px;
`;
