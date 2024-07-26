import Head from 'next/head'
import Styles from '../../Styles/about.module.css'
import Navbar from '@/components/navbar'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta property="og:title" content="My new title" key="title" />

      </Head>

      <div style={{ textAlign: 'center' }}>

        <Navbar />
        <h1 className={`${Styles.heading} ${Styles.clr}`}>About Me</h1>
        <p className={Styles.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, ex rem? Et magni doloremque omnis ipsa. Excepturi est hic, explicabo aperiam quaerat tempore consectetur porro amet, voluptate vitae alias exercitationem!</p>
        <Image src='/about.jpg' width="500" height='300' alt='about image' ></Image>
        {/* <Image src='https://c0.wallpaperflare.com/preview/912/739/608/black-coffee-break-break-time-brewed-coffee.jpg' width="500" height='300' className={Styles.img}></Image>     */}

      </div>
    </>
  )
}
export default About
