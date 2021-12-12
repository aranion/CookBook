import styles from "./header.module.scss";
import { Search } from "../Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.headerName}>CookBook</h2>
      <Search />
      <AccountCircleIcon />
    </div>
  );
};
