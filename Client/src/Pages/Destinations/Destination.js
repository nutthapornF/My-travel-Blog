import styled from "@emotion/styled";
import "../../App.css";

import { useParams } from "react-router-dom";
import Data from "../../Data/BlogsData";
import { useState, useEffect, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from "axios";
function Destination() {
  const [destinationData, setDestinationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState();
  const params = useParams();
  // let { id } = useParams();
  //console.log(params);

  // //เปลี่ยนจาก state นี้ที่เป็น array ให้เป็นแค่ object เดียว
  // const [destinationData, setDestinationData] = useState();

  // //ตัวนี้จะ find ค่ามาแค่ 1 ตัวใน array data โดยจะ where จาก id
  // // ซึง useEffect นี้จะรีเฟรชใหม่ต่อเมื่อค่า :id ที่ส่งมาเปลี่ยนไป
  // useEffect(() => {
  //   const dataPost = Data.find((x) => x.id === parseInt(id));
  //   console.log(dataPost, id, "dataPost");
  //   if (dataPost) {
  //     setDestinationData(dataPost);
  //   }
  // }, [id]);
  // const url = `http://localhost:4000/destination/${id}`;
  const getOneDestination = async () => {
    setLoading(true);
    try {
      const results = await axios.get(
        `http://localhost:4000/destination/${params.id}`
      );
      // console.log(JSON.parse(results.data.data));
      setContent(JSON.parse(results.data.data.blogContent));
      setDestinationData(results.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    return {
      destinationData,
      content,
    };
  };

  useEffect(() => {
    getOneDestination();
  }, []);

  // console.log(destinationData);
  // console.log(content);

  return (
    <div>
      {loading ? (
        <Loader>
          <PropagateLoader color={"#CC6600"} loading={loading} size={30} />
        </Loader>
      ) : (
        <Wrapper>
          <HeaderText>{destinationData?.topic} </HeaderText>
          <ContentWrapper>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[0]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[1]?.url
                    : ""
                }
              />
              <P>{content ? content[0] : ""}</P>
              <P>{content ? content[1] : ""}</P>
            </div>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[2]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[3]?.url
                    : ""
                }
              />
              <P>{content ? content[3] : ""}</P>
              <P>{content ? content[4] : ""} </P>
            </div>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[4]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[5]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[6]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[7]?.url
                    : ""
                }
              />
            </div>
            <P>{content ? content[5] : ""}</P>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[8]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[9]?.url
                    : ""
                }
              />
              <P>{content ? content[6] : ""} </P>
            </div>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[10]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[11]?.url
                    : ""
                }
              />
              <P>{content ? content[7] : ""}</P>
              <P>{content ? content[8] : ""} </P>
            </div>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[12]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[13]?.url
                    : ""
                }
              />
              <P>{content ? content[9] : ""}</P>
              <P>{content ? content[10] : ""} </P>
            </div>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[14]?.url
                    : ""
                }
              />
              <P>{content ? content[11] : ""}</P>
              <P>{content ? content[12] : ""} </P>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[15]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[16]?.url
                    : ""
                }
              />
              <P>{content ? content[13] : ""} </P>
              <P>{content ? content[14] : ""} </P>
            </div>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[17]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[18]?.url
                    : ""
                }
              />
              <P>{content ? content[15] : ""}</P>
              <P>{content ? content[16] : ""} </P>
            </div>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[19]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[20]?.url
                    : ""
                }
              />
              <P>{content ? content[16] : ""}</P>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[21]?.url
                    : ""
                }
              />
              <P>{content ? content[17] : ""} </P>
            </div>
            <div>
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[22]?.url
                    : ""
                }
              />
              <Img
                src={
                  destinationData?.images?.length > 0
                    ? destinationData?.images[23]?.url
                    : ""
                }
              />
              <P>{content ? content[18] : ""} </P>
              <P>{content ? content[19] : ""} </P>
            </div>{" "}
          </ContentWrapper>
        </Wrapper>
      )}
    </div>
  );
}

export default Destination;

const Wrapper = styled.div`
  background-color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Loader = styled.div`
  padding-top: 400px;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const HeaderText = styled.h1`
  padding-top: 100px;
  text-align: center;
  font-size: 40px;
  padding-bottom: 30px;
`;
const ContentWrapper = styled.div`
  width: 80%;
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const P = styled.p`
  text-align: center;
  padding: 20px;
  font-size: 18px;
`;

const Img = styled.img`
  padding: 15px;
  display: inline-flex;
  width: 400px;
`;
