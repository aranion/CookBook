import {ChangeEvent, useState} from "react";
// import {circleAccount as AccountIcon} from '@mui/icons-material';
import styles from "./header.module.css"

export const Header = () => {
    const [search, setSefrch] = useState<string>("")
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSefrch(e.target.value)
    }

    return (
        <div className={styles.container}>
            <h2>CookBook</h2>
            <input className={styles.searchInput} placeholder="Поиск..." type="text" value={search} onChange={handleSearch}/>
            <div>Admin</div>
        </div>
    );
};
