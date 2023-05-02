import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/componentes/Card.js'
import Clock from '@/componentes/Clock.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const personajesrym = [
  {id:"126", name:"fleeb", image:"https://rickandmortyapi.com/api/character/avatar/126.jpeg"},
  {id:"127", name:"Frank Palicky", image:"https://rickandmortyapi.com/api/character/avatar/127.jpeg"},
  {id:"128", name:"Frankenstein's Monster", image:"https://rickandmortyapi.com/api/character/avatar/128.jpeg"}
]



   /* fetch("data.json")
    .then(response => console.log("Se cumplió:" + response))
    .catch(reason => console.log("No se cumplió:" + reason))*/
  


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

     <div>
     <Clock></Clock>
     </div> 
    

    <div id="divimagen">
      {personajesrym.map (element => 
      <Card name={element.name} imagen={element.image}></Card>)}
    </div>

      </main>
    </>
  )
}
