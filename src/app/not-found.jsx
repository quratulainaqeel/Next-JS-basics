import Link from "next/link"
  
const Notfound = () => {
  return (
    <div className='text-center mt-5'>
      <h1>page not found</h1>
      <p>The page you are requesting for is not found</p>
     <Link href='/'>
     <button className="btn btn-dark">Go Back</button>
     </Link>
    </div>
  )
}

export default Notfound
