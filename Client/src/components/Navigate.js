import styled from "@emotion/styled";
import "../App.css";

const NavBar = () => {
  return (
    <header>
      <Navbar>
        <Navlogo href="/" className="logo">
          NIKKI F
        </Navlogo>
        <nav>
          <Navlinks className="nav_links">
            <Navlink href="/">Home</Navlink>
            <Navlink href="#About">About</Navlink>
            {/* <Navlink href="#Blog">Blogs</Navlink> */}
          </Navlinks>
        </nav>
        <a href="#contact" className="cta">
          {" "}
          <ContactBtn className="duration-500">Blog</ContactBtn>
        </a>
      </Navbar>
    </header>
  );
};

export default NavBar;
const Navbar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  height: 58px;
  padding: 10px 5%;
  background-color: black;
  font-family: "Montserrat", san-sarif;
  font-weight: 500;
  font-size: 17px;
`;

const Navlogo = styled.a`
  color: #edf0f1;
  text-decoration: none;
  cursor: pointer;
  border: 1px;
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #cc6600;
  }
`;

const Navlinks = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  text-decoration: none;
  &:hover {
    color: #cc6600;
  }
`;
const Navlink = styled.a`
  font-family: "Montserrat", san-sarif;
  font-weight: 500;
  font-size: 12px;
  color: #edf0f1;
  text-decoration: none;
`;

const ContactBtn = styled.button`
  padding: 9px 25px;
  text-decoration: none;
  background-color: #cc6600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-family: "Montserrat", san-sarif;
  font-weight: 500;
  font-size: 14px;
  color: #edf0f1;
`;
