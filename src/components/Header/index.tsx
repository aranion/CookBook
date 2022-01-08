import styles from "./header.module.scss";
import { Search } from "../Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from '@mui/material'
import { Link } from "react-router-dom";
import { Navigation } from "components";
import { RouteNames } from "router/routeList";
import img from "../../assets/books.png";
import {$api} from "../../api/api";

export const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <Link className={styles.header__logo} to={RouteNames.HOME}>
          <img className={styles.header__logo_img} src={img} alt='logo'/>
          <h2 className={styles.header__logo_name}>
            Cook<span>Book</span>
          </h2>
        </Link>
        <Search/>
        <IconButton>
          <Link to={RouteNames.PROFILE}>
            <AccountCircleIcon />
          </Link>
        </IconButton>
      </div>
      <Navigation/>
    </div>
  );
};
