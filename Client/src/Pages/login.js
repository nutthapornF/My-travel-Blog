import styled from "@emotion/styled";
import Img from "../img/LandingPageBG.jpg";

export default function LoginPage() {
  return (
    <MainWrap>
      <ContentWrapper>
        <Wrapper>
          <Form>
            <Label>
              email <br />
              <Input type="email" />
            </Label>
            <label>
              password <br />
              <Input type="password" />
            </label>
            <button type="submit"> login</button>
          </Form>
          <RightWrap>
            <RightImg src={Img} />
          </RightWrap>
        </Wrapper>
      </ContentWrapper>
    </MainWrap>
  );
}

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) 
    margin-top: 0;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 500px;
    height: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
    height: 250px;
  }
`;
const Wrapper = styled.div`
  width: 600px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;
const Input = styled.input`
  border-radius: 15px;
  margin: 10px;
  border: solid 1px white;
  &:focus {
    border: solid 3px #f97316;
  }
`;

const Label = styled.label`
  padding: 20px;
`;
const RightWrap = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 425px) {
    display: none;
  }
`;
const RightImg = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: 10% 150%;
  border-radius: 15px;
  @media (max-width: 768px) {
    height: 90%;
    width: 90%;
    margin-top: 20px;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;
