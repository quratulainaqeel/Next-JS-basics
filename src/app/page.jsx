'use client';
import Head from "next/head";
import Navbar from "../components/navbar"
import Styles from './page.module.css'

const Home = () => {
  return (
    <>
    <Head>
      <title>Home pg</title>
    </Head>
      <div className={Styles.bgr}>

        <Navbar />

        <div className={Styles.position} >
          <h1 className={`${Styles.heading} text`}>Keep Practicing You will be succes!</h1>
          <p className={Styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, pariatur reiciendis accusantium non optio, itaque exercitationem molestias voluptatibus dolor fugit dolore aliquam voluptatem illo porro sint eaque enim! Similique, fugiat?</p>
          {/* <em >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta temporibus quaerat alias est ut ab deserunt, quo aperiam qui nemo laudantium fugiat iste excepturi aut! Quam id esse facilis.</em> */}
        </div>

        <style jsx>{`
  em {
    color: red;
     text-align: center;
    display: block;
    }
`}</style>

      </div>

    </>

  )
}

export default Home
