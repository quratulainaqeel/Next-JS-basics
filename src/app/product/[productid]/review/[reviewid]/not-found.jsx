'use client';
import { useRouter } from "next/navigation"
import { useEffect } from "react";

const Notfound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, [])
  
  return (
    <div className='text-center'>
      <h1>Review not found</h1>
      <button className="btn btn-dark" onClick={() => router.push('/')}>Go Back</button>

    </div>
  )
}

export default Notfound
