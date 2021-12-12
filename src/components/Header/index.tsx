import "./header.scss";
import { Search } from "../Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Header = () => {
  return (
    <div className="container">
      <h2 className="headerName">CookBook</h2>
      <Search />
      <AccountCircleIcon />
    </div>
  );
};
