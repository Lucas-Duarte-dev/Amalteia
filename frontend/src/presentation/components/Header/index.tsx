import {MdMenu, MdSearch} from "react-icons/md";
import styles from './styles.module.scss';

export function Header()  {
    return (
        <div className={styles.header_wrapper}>
            <div>
                <h2>AMALTEIA</h2>
                <div className={styles.search}>
                    <button>
                        <MdSearch />
                    </button>
                    <input placeholder="Encontre a sua categoria favorita"/>
                </div>
                <MdMenu />
            </div>
        </div>
    )
}