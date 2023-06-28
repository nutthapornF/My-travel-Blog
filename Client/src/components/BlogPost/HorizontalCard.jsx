import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { DestinationDataContect } from "../../context/DestinationData";

const HorizontalCard = (place) => {
  const [destinationData, setDestinationData] = useState([]);
  const navigate = useNavigate();
  const url = "http://localhost:4000/destination";

  const getDestination = async () => {
    try {
      const results = await axios.get(url);
      //ต้อง  reverse data เพื่อให้แสดงใบสมัครล่าสุดจากใหม่ -> เก่า
      setDestinationData(results?.data?.data);
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
  //   console.log(place?.place);
  //   console.log(destinationData);

  return (
    <div className="horizontalWrapper">
      <img
        src={place?.place.images[0]?.url}
        alt="mainImg"
        className="horizontalLeft"
      />
      <div className="horizontalContent">
        <div className="insideContent">
          <div className="tags">
            <p className="horizonTagP">{place?.place.tags}</p>
          </div>
          <h1 className="horizonTitle">{place?.place.topic}</h1>
          <p className="horizontalP">
            {place?.place.content1?.substring(0, 380)}
          </p>
          <div className="horizonBtnWrap">
            <div
              className="horizonBtn"
              onClick={() =>
                navigate(`/destination/review-destination/${place?.place?._id}`)
              }>
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
