import "../App.css";
import styled from "@emotion/styled";
import axios from "axios";
import { useState, useEffect } from "react";

const CreateDestination = () => {
  // state for creating a new Data Destination
  const [images, setImages] = useState({});
  const [topic, setTopic] = useState("");
  const [credit, setCredit] = useState("");
  const [tags, setTags] = useState([]);
  const [content1, setContents1] = useState("");
  const [content2, setContents2] = useState("");
  const [content3, setContents3] = useState("");
  const [content4, setContents4] = useState("");
  const [content5, setContents5] = useState("");
  const [content6, setContents6] = useState("");
  const [content7, setContents7] = useState("");
  const [content8, setContents8] = useState("");
  const [content9, setContents9] = useState("");
  const [content10, setContents10] = useState("");
  const [content11, setContents11] = useState("");
  const [content12, setContents12] = useState("");
  const [content13, setContents13] = useState("");
  const [content14, setContents14] = useState("");
  const [content15, setContents15] = useState("");
  const [content16, setContents16] = useState("");
  const [content17, setContents17] = useState("");
  const [content18, setContents18] = useState("");
  const [content19, setContents19] = useState("");
  const [content20, setContents20] = useState("");

  const handleImageChange = (event) => {
    const uniqueId = Math.random().toString(16).slice(2);
    setImages({
      ...images,
      [uniqueId]: event.target.files[0], //0 คือตัวที่ client เลือกมา
    });
  };
  //console.log(images);

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
    formData.append("content1", content1);
    formData.append("content2", content2);
    formData.append("content3", content3);
    formData.append("content4", content4);
    formData.append("content5", content5);
    formData.append("content6", content6);
    formData.append("content7", content7);
    formData.append("content8", content8);
    formData.append("content9", content9);
    formData.append("content10", content10);
    formData.append("content11", content11);
    formData.append("content12", content12);
    formData.append("content13", content13);
    formData.append("content14", content14);
    formData.append("content15", content15);
    formData.append("content16", content16);
    formData.append("content17", content17);
    formData.append("content18", content18);
    formData.append("content19", content19);
    formData.append("content20", content20);

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
            <input type="text" onChange={(e) => setTopic(e.target.value)} />
          </Label>
          <Label>
            Credit :
            <input type="text" onChange={(e) => setCredit(e.target.value)} />
          </Label>
          <Label>
            tags :
            <input type="text" onChange={(e) => setTags(e.target.value)} />
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
          <Textarea
            rows="5"
            id="contents"
            placeholder="1"
            onChange={(e) => setContents1(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="2"
            onChange={(e) => setContents2(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="3"
            onChange={(e) => setContents3(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="4"
            onChange={(e) => setContents4(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="5"
            onChange={(e) => setContents5(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="6"
            onChange={(e) => setContents6(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="7"
            onChange={(e) => setContents7(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="8"
            onChange={(e) => setContents8(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="9"
            onChange={(e) => setContents9(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="10"
            onChange={(e) => setContents10(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="11"
            onChange={(e) => setContents11(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="12"
            onChange={(e) => setContents12(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="13"
            onChange={(e) => setContents13(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="14"
            onChange={(e) => setContents14(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="15"
            onChange={(e) => setContents15(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="16"
            onChange={(e) => setContents16(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="17"
            onChange={(e) => setContents17(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="18"
            onChange={(e) => setContents18(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="19"
            onChange={(e) => setContents19(e.target.value)}
          />
          <Textarea
            rows="5"
            id="contents"
            placeholder="20"
            onChange={(e) => setContents20(e.target.value)}
          />

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
                <P> {file.name} </P>
                {/* <Img src={URL.createObjectURL(file)} alt={file.name} />
                <Button>X</Button> */}
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
  font-size: 13px;
`;
const P = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 15px;
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
