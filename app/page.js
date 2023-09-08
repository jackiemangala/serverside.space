import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faDiscord } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className='container mx-auto px-5'>
    <section className="py-48">


      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-purple-200 after:via-purple-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-purple-500 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <h1 className='text-white font-bold md:text-5xl text-3xl'>serverside.space</h1>
    <p className='text-gray-500 mt-3 mb-5  max-w-2xl md:text-md text-sm text-center'>Get unprecedented access to ROBLOX adventures and experiences in a rapid and safe manner. With serverside.space infected games, serverside exploitation is at your fingertips.</p>
     </div>
      


    </section>
    <section className='py-16'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div>
          <h2 className='text-green-500 font-semibold'>SERVERSIDE.SPACE</h2>
          <h1 className='text-white font-bold mt-5  text-5xl'>Why us?</h1>
          <p className='text-gray-500 text-sm my-5'>serverside.space is a serverside that revolutionises Roblox serverside exploitation by putting the power of serverside exploitation at your fingertips.</p>
          <Link className='text-blue-500 ' href="https://discord.gg/obfuscator" target='_blank'>Discord</Link>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='border-b flex flex-row justify-between py-3 items-center border-b-zinc-500'>
            <h1 className='text-white font-semibold text-2xl'>Frequently updated</h1>
            <FontAwesomeIcon icon={faCheck} className='w-7 p-1 h-7 text-white bg-green-500 rounded-full'/>
          </div>
          <div className='border-b flex flex-row justify-between py-3 items-center border-b-zinc-500'>
            <h1 className='text-white font-semibold text-2xl'>Fast code execution</h1>
            <FontAwesomeIcon icon={faCheck} className='w-7 p-1 h-7 text-white bg-green-500 rounded-full'/>
          </div>
          <div className='border-b flex flex-row justify-between py-3 items-center border-b-zinc-500'>
            <h1 className='text-white font-semibold text-2xl'>Undetected</h1>
            <FontAwesomeIcon icon={faCheck} className='w-7 p-1 h-7 text-white bg-green-500 rounded-full'/>
          </div>
          <div className='border-b flex flex-row justify-between py-3 items-center border-b-zinc-500'>
            <h1 className='text-white font-semibold text-2xl'>Many games</h1>
            <FontAwesomeIcon icon={faCheck} className='w-7 p-1 h-7 text-white bg-green-500 rounded-full'/>
          </div>
        </div>
      </div>
    </section>
    </main>

  )
}
