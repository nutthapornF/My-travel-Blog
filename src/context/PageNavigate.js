import { useNavigate } from "react-router-dom";

const NavigateContext = React.createContext();

function NavigateProvider(props) {
  const navigate = useNavigate();
}
