import styles from './pages.module.scss';

const NotFound = () => {
    return (
        <div className={styles.pages__container}>
            <div className={styles.pages__content}>
                <h1 className={styles.pages_h1}>Страница не найдена</h1>
            </div>
        </div>
    );
};

export default NotFound;