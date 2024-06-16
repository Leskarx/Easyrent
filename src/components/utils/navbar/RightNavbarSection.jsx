import React from 'react'
import AuthpageSection from './AuthpageSection'
import HomePageSection from './HomePageSection'

export default function RightNavbarSection({user,authPage=false,homePage=false}) {
  return (
    
<main className='  h-full flex items-center  gap-10 mr-2 '>
{
 authPage &&
    (
      <AuthpageSection/>
    )
}
{
    homePage && (
        <HomePageSection user={user}/>
    )
}
</main>
  )
}
