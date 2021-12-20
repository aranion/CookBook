import styles from "./header.module.scss";
import { Search } from "../Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { Navigation } from "components/Navigation";
import { IconButton } from "@mui/material";

export const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <Link to='/'>
          <h2 className={styles.headerName}>CookBook</h2>
        </Link>
        <Search />
        <IconButton>
            <Link to="/profile">
                <AccountCircleIcon />
            </Link>
        </IconButton>
      </div>
      <Navigation />
    </div>  
  );
};
