import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/card/card'
import cardImage from '../components/card/coffeeshop.jpg'
import styles from '../styles/home.module.css'
import coffeeStores from '../data/coffee-stores.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div>Coffee shop</div>
      <div className={styles.cardLayout}>
        {coffeeStores.map(coffeeStore => {
          return(
            <Card key={coffeeStore.id} title={coffeeStore.name} imgUrl={coffeeStore.imgUrl} cardUrl={coffeeStore.websiteUrl}></Card>
          )
        })}
        
      </div>
    </main>
  )
}
