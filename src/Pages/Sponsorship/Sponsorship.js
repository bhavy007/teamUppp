import React from 'react'
import SponsorCard from '../../Components/SponsorCard'

function Sponsorship() {
  return (
    
<div class="container">

<div  class="row">

  <div  class="col-lg-4">
  <SponsorCard 
    name = "Red Bull"
    numberOfEvents = "100k"
    image = "https://1000logos.net/wp-content/uploads/2017/05/Red-Bull-emblems.jpg"
    />
  </div>

  <div class="col-lg-4">
  <SponsorCard 
    name = "CocaCola"
    numberOfEvents = "200k"
    image = "https://static.vecteezy.com/system/resources/previews/007/978/653/original/coca-cola-popular-drink-brand-logo-vinnytsia-ukraine-may-16-202-free-vector.jpg"
    />
  </div>

  <div  class="col-lg-4">
  <SponsorCard 
    name = "LeetCode"
    numberOfEvents = "50k"
    image = "https://leetcode.com/static/images/LeetCode_Sharing.png"
    />
  </div>

    </div>

    <div  class="row">

  <div  class="col-lg-4">
  <SponsorCard 
    name = "CodeChef"
    numberOfEvents = "90k"
    image = "https://img.icons8.com/ios7/2x/000000/codechef.png"
    />
  </div>

  <div class="col-lg-4">
  <SponsorCard 
    name = "Coding Ninjas"
    numberOfEvents = "75k"
    image = "https://static.startuptalky.com/2021/03/coding-ninjas-startuptalky.jpg"
    />
  </div>

  <div  class="col-lg-4">
  <SponsorCard 
    name = "Samrat Uniforms"
    numberOfEvents = "10k"
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMEE0z0o0wjf1JINPUOriw0oe4JJxI7_5i38vf2xy2&s"
    />
  </div>

    </div>

    </div>
    
  )
}

export default Sponsorship