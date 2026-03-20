import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";
import minion from "./26e53b336c2e95f06c881178ef1fffd3.jpg"

function Home() {
    return(
<div className={style.abb}>
<h1>
   Atividade 1  
</h1>
<div className={style.abc}>
<Image src={minion} alt=""></Image>
<Link href="/">voltar</Link>

</div>
    </div>
    )
}

export default Home;