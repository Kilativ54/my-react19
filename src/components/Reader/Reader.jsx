import styles from './Reader.module.css'

export default function Reader() {
    return (
        <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.controls}>
                <button className={styles.button}>Previous</button>
                <button className={styles.button}>Next</button>
            </div>
        </header>
        <article className={styles.article}>
            <h2 className={styles.title}>Topic</h2>
            <p className={styles.text}>Text</p>
        </article>
    
        </div>
    );
}