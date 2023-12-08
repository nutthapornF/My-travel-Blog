import styled from "@emotion/styled";
import axios from "axios";
import "./seeAllDestination.css";
import Blogs from "../../components/BlogPost/BlogsPost";
import { useState, useEffect } from "react";
import { useFetch } from "../../UseFetch/useFetch";

function SeeAllDestinations() {
  const [destinationGet, setDestinationGet] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    if (loading) return;
    setStories(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  // console.log(data);
  console.log(stories);

  return (
    <div className="seeAllDestination">
      <div className="searchBarWrap">
        {/* Search bar is searched by topic */}
        {/* <SearchBar /> */}
        <div>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <div className="input-group relative flex  items-stretch w-full mb-4 rounded">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none zindex"
                  placeholder="Search by name"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
                <span
                  className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                  id="basic-addon2">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blogWrap">
        {stories
          ?.filter((places) => {
            if (searchTerm == "") {
              return places;
            } else if (
              places.topic
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return places;
            }
          })
          .map((places, i) => {
            // console.log(JSON.parse(places.blogContent));
            return (
              <Blogs
                key={i}
                id={places._id}
                titleImg={places.images[0].url}
                topic={places.topic}
                credit={places.credit}
                tags={places.tags}
                content1={JSON.parse(places.blogContent)}
              />
            );
          })}
      </div>
      {/* if loaded, show the data (list of places) */}
      {!loading && (
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                className={`page-btn ${index === page ? "active-btn" : null} `}
                key={index}
                onClick={() => handlePage(index)}>
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
      )}
    </div>
  );
}

export default SeeAllDestinations;

const ZoneWrap = styled.div`
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
`;
const SearchBarWrap = styled.div`
  padding-top: 100px;
`;
const BlogWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
