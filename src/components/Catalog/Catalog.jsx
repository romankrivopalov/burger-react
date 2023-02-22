import { Container } from '../Container/Container.jsx';
import { Order } from '../Order/Order.jsx';
import { CatalogProduct } from '../CatalogProduct/CatalogProduct.jsx';
import style from './Catalog.module.css';

const goodList = [
    { title: 'Мясная бомба' },
    { title: 'Супер сырный' },
    { title: 'Сытный' },
    { title: 'Итальянский' },
    { title: 'Вечная классика' },
    { title: 'Тяжелый удар' },
]

export const Catalog = () => {

    return (
        <section className={style.catalog}>
            <Container className={style.container}>
                <Order />

                <div className={style.wrapper}>
                    <h2 className={style.title}>Бургеры</h2>

                    <div className={style.wrap_list}>
                        <ul className={style.list}>
                            {goodList.map((item, i) => (
                                <li key={i} className={style.item}>
                                    <CatalogProduct title={item.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}