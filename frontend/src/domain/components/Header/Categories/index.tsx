import {useEffect, useState} from "react";
import {Item} from "./item";
import {getApiClientAxios} from "../../../../infra/http/axios";

type Response = {
    id: string|number;
    name: string;
    description: string
};

export function Categories() {

    const [categoriesResponse, setCategoriesResponse] = useState<Response[] | undefined>([]);

    useEffect(() => {
        getApiClientAxios().get('/categories')
            .then(response => setCategoriesResponse(response.data));
    }, [])

    return (
        <div>
            {categoriesResponse?.map(category => {
                return  <Item key={category.id} name={category.name} description={category.description} />
            })}
        </div>
    );
}