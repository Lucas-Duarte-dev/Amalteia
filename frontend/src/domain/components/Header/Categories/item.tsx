import {useState} from "react";

    type ItemProps = {
        name: string;
        description: string
    };

export function Item({name, description}: ItemProps) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <a href="#"
               onMouseEnter={() => setIsActive(true)}
               onMouseLeave={() => setIsActive(false)}>
                {name}
            </a>
            {
                isActive && (
                    <section>
                        <small>{description}</small>
                    </section>
                )
            }
        </div>
    )
}