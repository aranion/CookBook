import styles from "./header.module.scss";
import { Search } from "../Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link to='/'>
        <h2 className={styles.headerName}>CookBook</h2>
      </Link>
      <Search />
      <AccountCircleIcon />
    </div>
  );
};
