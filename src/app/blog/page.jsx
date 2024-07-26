'use-clients'
import Navbar from "@/components/navbar"

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data)

  return {
    props: {
      data
    }
  }
}

const Blog = () => {
  return (
    <>
      <Navbar />

    </>
  )
}

export default Blog
