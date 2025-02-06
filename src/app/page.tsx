


import Gallry from '@/components/Gallry'

import Hero from '@/components/Hero'

import Insta from '@/components/Insta'
import NewArrival from '@/components/NewArrival'
import Ourblogs from '@/components/Ourblogs'



import SmallGallery from '@/components/SmallGallery'


import React from 'react'



const page = async () => {

  return (
    <div>
  <Hero/>
<NewArrival/>



<Gallry/>
<Ourblogs />


<SmallGallery/>
<Insta />

    </div>
  )
}

export default page
