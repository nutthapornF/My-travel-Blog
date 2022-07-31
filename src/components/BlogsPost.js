import styled from "@emotion/styled";

import { useState } from "react";
import "../App.css";
import Data from "../Data/BlogsData";

import { useNavigate, useParams } from "react-router-dom";

const Blogs = () => {
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();

  // const navigate = useNavigate();
  // const handleSeeMoreCLick = () => {
  //   navigate("/Destination");
  // };

  return (
    <ZoneWrap id="#Blog">
      <H1> Destonations </H1>

      <BlogsWrap>
        {Data?.map((destination) => {
          return (
            <Blog key={destination.id}>
              <img
                src={destination.pictures[0]}
                alt={destination.topic}
                width="250px;"
              />
              <h1>{destination.topic}</h1>
              <h6>{destination.credit}</h6>
              <h6>{destination.tags}</h6>
              <P>
                {readMore
                  ? destination.note1
                  : `${destination.note1.substring(0, 150)}...`}
              </P>
              <Button
                onClick={() =>
                  navigate(`/destination/review-destination/${destination.id}`)
                }>
                Read More
              </Button>
            </Blog>
          );
        })}
      </BlogsWrap>
    </ZoneWrap>
  );
};

export default Blogs;

const ZoneWrap = styled.div`
  width: 100%;
  height: 800px;
  background-color: #f5f5f5;
`;
const BlogsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: : center;
`;
const Blog = styled.div`
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0px 30px;
`;
const H1 = styled.h1`
  display: flex;
  justify-content: center;
  padding: 30px;
  margin-bottom: 30px;
  font-family: "Montserrat", san-sarif;
`;
const P = styled.p`
  padding: 20px;
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
