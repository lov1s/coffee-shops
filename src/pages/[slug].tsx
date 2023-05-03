import Head from "next/head"
import { useRouter } from "next/router"

export default function WelcomePage(){
    const router = useRouter()
    const { slug } = router.query
    return <div>
        <Head><title>{slug}</title></Head>     
        <div>Welcome to {slug}!</div>
        </div>
}