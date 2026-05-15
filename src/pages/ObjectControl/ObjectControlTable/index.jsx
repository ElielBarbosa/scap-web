import ObjectControlHeader from '../ObjectControlHeader';
import styles from './styles.module.css';

function ObjectControlTable({className}) {
    return ( 
        <section className={`${styles.tableObjectsContainer} ${className}`}>
            <div className={`${styles.tableHeader}`}>
                <span className={`${styles.cellTitle} ${styles.imgCellTitle}`}>Imagem</span>
                <span className={`${styles.cellTitle}`}>Nome</span>
                <span className={`${styles.cellTitle}`}>Status</span>
                <span className={`${styles.cellTitle}`}>Registrado</span>
                <span className={`${styles.cellTitle}`}>Opções</span>
            </div>

            <div className={styles.rowContainer}>
                <div className={styles.row}>
                    <div className={styles.imgCell}></div>
                    <span className={styles.cell}>Nome do objeto</span>
                    <span className={styles.cell}>Pendente</span>
                    <span className={styles.cell}>24 out, 2025</span>
                    <span className={styles.cell}><button>+</button></span>
                </div>
            </div>
            <div className={styles.rowContainer}>
                <div className={styles.row}>
                    <div className={styles.imgCell}></div>
                    <span className={styles.cell}>Nome do objeto</span>
                    <span className={styles.cell}>Pendente</span>
                    <span className={styles.cell}>24 out, 2025</span>
                    <span className={styles.cell}><button>+</button></span>
                </div>
            </div>
            <div className={styles.rowContainer}>
                <div className={styles.row}>
                    <div className={styles.imgCell}></div>
                    <span className={styles.cell}>Nome do objeto</span>
                    <span className={styles.cell}>Pendente</span>
                    <span className={styles.cell}>24 out, 2025</span>
                    <span className={styles.cell}><button>+</button></span>
                </div>
            </div>
        </section>
     );
}

export default ObjectControlTable;

