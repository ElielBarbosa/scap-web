import ObjectControlHeader from '../ObjectControlHeader';
import ObjectControlTable from '../ObjectControlTable';
import styles from './styles.module.css';

function ObjectControlPage() {
    return ( 
        <main className={styles.objectControlPageContainer}>
            <ObjectControlHeader className="mt-5 container" />
            <ObjectControlTable className="container mt-2" />
        </main>
     );
}

export default ObjectControlPage;

