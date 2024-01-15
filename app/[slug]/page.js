import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { notFound } from 'next/navigation'



async function fetchUser(id) {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  if (!res.ok) return undefined
  return res.json()
}


export default async function Home({params}) {
  let a = "ss";

  // if(params.slug !== "ss"){
  //   notFound()
  // }

  const user = await fetchUser(params.ss)
 
  if (!user) {
    notFound()
  }

  // if(a != "ss"){
  //   notFound()
  // }

  
  return (
   <>

   <Link href={`/${a}/`} >Home</Link>
   <Link href={`/${a}/about`} >About</Link>
   
   </>
  )
}
