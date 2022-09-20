import styled from "@emotion/styled";
import axios from "axios";
import Blogs from "../components/BlogsPost";
import SearchBar from "../components/SearchBar";

function SeeAllDestinations() {
  return (
    <ZoneWrap>
      <SearchBarWrap>
        <SearchBar />
      </SearchBarWrap>
      <div>
        <Blogs />
      </div>
    </ZoneWrap>
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
