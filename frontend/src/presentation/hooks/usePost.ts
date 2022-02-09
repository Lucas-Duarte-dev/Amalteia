import {api} from "../../infra/services/api";

type Response = {
    title: string;
    image: string;
    short_description: string;
    category: Category[];
}

type Category = {
    id: string;
    name: string
}

const usePost = async () => {
    const {data} = await api.get<Response[]>('/publication');

    const posts = data?.map(post => {
        return {
            title: post.title,
            image: post.image,
            short_description: post.short_description,
            category: post.category.sort().slice(1, 3)
        }
    })

    return {posts};
}

export {usePost}