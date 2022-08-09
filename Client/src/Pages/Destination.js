import styled from "@emotion/styled";
import "../App.css";
import { useParams } from "react-router-dom";
import Data from "../Data/BlogsData";
import { useState, useEffect } from "react";
function Destination() {
  let { id } = useParams();
  console.log(id);

  //เปลี่ยนจาก state นี้ที่เป็น array ให้เป็นแค่ object เดียว
  const [destinationData, setDestinationData] = useState();

  //ตัวนี้จะ find ค่ามาแค่ 1 ตัวใน array data โดยจะ where จาก id
  // ซึง useEffect นี้จะรีเฟรชใหม่ต่อเมื่อค่า :id ที่ส่งมาเปลี่ยนไป
  useEffect(() => {
    const dataPost = Data.find((x) => x.id === parseInt(id));
    console.log(dataPost, id, "dataPost");
    if (dataPost) {
      setDestinationData(dataPost);
    }
  }, [id]);

  //console.log(destinationData?.pictures);

  return (
    <Wrapper>
      <HeaderText>{destinationData?.topic}</HeaderText>{" "}
      <ContentWrapper>
        <div>
          <Img src={destinationData?.pictures[0]} width="600px" />
          <Img src={destinationData?.pictures[1]} width="600px" />
          <P>{destinationData?.note1}</P>
          <P>{destinationData?.note2}</P>
        </div>
        <div>
          <Img src={destinationData?.img1[0]} width="600px" />
          <Img src={destinationData?.img1[1]} width="600px" />
          <P>{destinationData?.note3}</P>
          <P>{destinationData?.note4} </P>
        </div>
        <div>
          <Img src={destinationData?.img2[0]} width="600px" />
          <Img src={destinationData?.img2[1]} width="600px" />
          <Img src={destinationData?.img3[0]} width="600px" />
          <Img src={destinationData?.img3[1]} width="600px" />
          <P>{destinationData?.note5}</P>
        </div>
        <div>
          <Img src={destinationData?.img4[0]} width="600px" />
          <Img src={destinationData?.img4[1]} width="600px" />
          <P>{destinationData?.note6} </P>
        </div>

        <div>
          <Img src={destinationData?.img5[0]} width="600px" />
          <Img src={destinationData?.img5[1]} width="600px" />
          <P>{destinationData?.note7}</P>
          <P>{destinationData?.note8} </P>
        </div>
        <div>
          <Img src={destinationData?.img6[0]} width="600px" />
          <Img src={destinationData?.img6[1]} width="600px" />
          <P>{destinationData?.note9}</P>
          <P>{destinationData?.note10} </P>
        </div>
        <div>
          <Img src={destinationData?.img7[0]} width="600px" />
          <P>{destinationData?.note11}</P>
          <P>{destinationData?.note12} </P>
          <Img src={destinationData?.img8[0]} width="600px" />
          <Img src={destinationData?.img8[1]} width="600px" />
          <P>{destinationData?.note13} </P>
          <P>{destinationData?.note14} </P>
        </div>
        {/* ------------------ the second one ---------- */}
        <div>
          <Img src={destinationData?.img9[0]} width="600px" />
          <Img src={destinationData?.img9[1]} width="600px" />
          <P>{destinationData?.note15}</P>
          <P>{destinationData?.note16} </P>
        </div>
        <div>
          <Img src={destinationData?.img10[0]} width="600px" />
          <Img src={destinationData?.img10[1]} width="600px" />
          <P>{destinationData?.note17}</P>
          <Img src={destinationData?.img11[0]} width="600px" />
          <P>{destinationData?.note18} </P>
        </div>

        <div>
          <Img src={destinationData?.img12[0]} width="600px" />
          <Img src={destinationData?.img12[1]} width="600px" />
          <P>{destinationData?.note19} </P>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Destination;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.h1`
  padding-top: 100px;
  text-align: center;
  font-size: 80px;
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
  padding: 25px;
  font-size: 22px;
`;

const Img = styled.img`
  padding: 15px;
  display: inline-flex;
`;
