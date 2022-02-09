import {useEffect, useState} from "react";
import {Item} from "./item";
import {api} from "../../../infra/services/api";
import styles from './styles.module.scss';

type Response = {
    id: string|number;
    name: string;
    description: string,
    image: string
};

export function Categories() {

    const [categoriesResponse, setCategoriesResponse] = useState<Response[] | undefined>([]);

    useEffect(() => {
        api.get('/categories')
            .then(response => setCategoriesResponse(response.data));
    }, [])

    return (
        <div className={styles.category_wrapper}>
            <h2>Olá, seja bem-vindo!</h2>

            <section>
                <div className={styles.category_label}>
                    <span>Categorias</span>
                    <a href="#">Ver mais</a>
                </div>

                <div className={styles.category_list}>
                    {categoriesResponse?.map(category => {
                        return  <Item
                            key={category.id}
                            name={category.name}
                            description={category.description}
                            image={category.image}
                        />
                    })}
                </div>

            </section>

        </div>
    );
}