import PrintIcon from "@mui/icons-material/Print";
import styles from "./print.module.scss";

export const Print = () => {
  return (
    <div className={styles.print}>
       <a href="/"> {/* Временно  */}
        <PrintIcon />
      </a>
    </div>
  );
};
