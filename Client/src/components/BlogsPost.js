import styled from "@emotion/styled";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
import Data from "../Data/BlogsData";

import { useNavigate, useParams } from "react-router-dom";

const Blogs = () => {
  const [readMore, setReadMore] = useState(false);
  const [destinationData, setDestinationData] = useState([]);
  const navigate = useNavigate();

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

  console.log(destinationData);
  return (
    <ZoneWrap id="#Blog">
      <H1> Destonations </H1>

      <BlogsWrap>
        {destinationData?.map((destination) => {
          return (
            <Blog key={destination._id}>
              <img
                src={destination.images[0].url}
                alt={destination.topic}
                width="200px;"
              />
              <H2>{destination.topic}</H2>
              <h6>{destination.credit}</h6>
              <h6>{destination.tags}</h6>
              <P>
                {readMore
                  ? destination.content1
                  : `${destination.content1.substring(0, 150)}...`}
              </P>
              <Button
                onClick={() =>
                  navigate(`/destination/review-destination/${destination._id}`)
                }>
                Read More
              </Button>
            </Blog>
          );
        })}
        <br />
        {/* <Posmockup /> */}
      </BlogsWrap>
    </ZoneWrap>
  );
};

export default Blogs;

const ZoneWrap = styled.div`
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
`;
const BlogsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
const H1 = styled.h1`
  display: flex;
  justify-content: center;
  padding: 30px;
  margin-bottom: 30px;
  font-family: "Montserrat", san-sarif;
  font-size: 30px;
`;
const H2 = styled.h1`
  font-size: 25px;
`;
const P = styled.p`
  padding: 13px;
  font-size: 13px;
`;
const Button = styled.button`
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
