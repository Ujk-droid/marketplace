import React from 'react'
import Image from "next/image";

const Twosofa = () => {
  return (
    <div className="h-[400px] flex align-center justify-center gap-4">
       <div className="rounded-md overflow-hidden ml-10  shadow-sm h-[400px]">
            <Image
              className="object-cover object-center"
           src=   "https://plus.unsplash.com/premium_photo-1681487485258-26aaa059d967?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3"
    
              alt="item"
              width={900}
              height={900}
              priority
            />
          </div>
          <div className="rounded-md overflow-hidden ml-10  shadow-sm h-[400px]">
            <Image
              className="object-cover object-center"
                              src="https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
              alt="item"
              width={900}
              height={400}
              priority
            />
          </div>
      
    </div>
  )
}

export default Twosofa