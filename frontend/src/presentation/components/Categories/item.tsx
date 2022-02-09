import styles from './item.module.scss';

type ItemProps = {
    name: string;
    description: string,
    image: string
};

export function Item({name, description, image}: ItemProps) {

    return (
        <a
            style={{backgroundImage: `url(${image})`}}
            className={styles.item_container}
        >
            <div>
                <span>
                    {name}
                </span>
                <section>
                    <small>{description}</small>
                </section>
            </div>
        </a>
    )
}