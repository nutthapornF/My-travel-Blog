import styled from "@emotion/styled";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import "../App.css";
import Data from "../Data/BlogsData";
import { DestinationDataContect } from "../context/DestinationData";

import { useNavigate, useParams } from "react-router-dom";

const Blogs = ({ titleImg, id, topic, credit, tags, content1 }) => {
  const [readMore, setReadMore] = useState(false);
  const [destinationData, setDestinationData] = useState([]);
  const navigate = useNavigate();

  const context = useContext(DestinationDataContect);
  //console.log(context);
  //------- get Destination
  const url = "http://localhost:4000/destination";
  const getDestination = async () => {
    try {
      const results = await axios.get(url);
      //ต้อง  reverse data เพื่อให้แสดงใบสมัครล่าสุดจากใหม่ -> เก่า
      setDestinationData(results.data.data);
    } catch (error) {
      console.log(error);
    }
    return {
      destinationData,
    };
  };

  useEffect(() => {
    getDestination();
  }, []);

  // const navigate = useNavigate();
  // const handleSeeMoreCLick = () => {
  //   navigate("/Destination");
  // };

  // console.log(destinationData);

  return (
    <ZoneWrap id="#Blog">
      {/* <H6>
        <a href="/seeAlldestinations">See all Destinations </a>
      </H6> */}

      <BlogsWrap>
        <Blog key={id}>
          <img src={titleImg} alt={topic} width="200px;" />
          <H2>{topic}</H2>
          <h6>{credit}</h6>
          <h6>{tags}</h6>
          <P>{readMore ? content1 : `${content1.substring(0, 150)}...`}</P>
          <Button
            onClick={() => navigate(`/destination/review-destination/${id}`)}>
            Read More
          </Button>
        </Blog>

        <br />
        {/* <Posmockup /> */}
      </BlogsWrap>
    </ZoneWrap>
  );
};

export default Blogs;

const ZoneWrap = styled.div`
  height: auto;
  background-color: #f5f5f5;
  padding: 0px 40px;
`;
const BlogsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const Blog = styled.div`
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 30px;
`;
const H6 = styled.h1`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  font-family: "Montserrat", san-sarif;
  font-size: 15px;
  text-decoration-line: underline;
`;
const H2 = styled.h1`
  font-size: 25px;
`;
const P = styled.p`
  padding: 13px;
  font-size: 13px;
`;
const Button = styled.button`
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: #24252a;
  color: white;
  &:hover {
    background-color: #cc6600;
    border: #cc6600;
  }
`;
