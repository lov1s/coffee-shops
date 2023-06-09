import Image from 'next/image'
import { ICard } from './card.interface'
import Link from 'next/link'
import style from './card.module.css'

const Card = (props: ICard) => {
    return <div>
        <Link href={props.cardUrl}>
            <div className={style.cardWrapper}>
                <h2 className={style.cardTitle}>{props.title}</h2>
                <Image src={props.imgUrl} alt={'coffee shop'} width={500} height={300} />
            </div>
        </Link>
    </div>
}

export default Card