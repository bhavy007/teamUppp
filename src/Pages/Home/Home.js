import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='homepage' >
      

    <div class="container">

    <div id = "container_id" class="row">

      <div id="main_content" class="col-lg-6">
      <h1 className='motto_text'>Create Solutions, </h1>
      <h1 className='motto_text'>Create Connections.</h1>
      <h1 className='motto_text'>Team Up Today!</h1>
      </div>

      <div id="main_content" class="col-lg-6">
        <img class="main_img" src = "https://img.freepik.com/free-vector/people-holding-connected-copy-space-circle-icons_53876-66230.jpg" />
      </div>
  
    </div>
    
    </div>

    {/* <footer className='footer_text'>footer text</footer> */}
    <footer class=" text-center text-lg-start">
 
  <div id = "footer_text" class="text-center p-3">
    © 2022 Copyright:
    <a class="text-dark" href="https://static.boredpanda.com/blog/wp-content/uploads/2020/07/shiba-cheems-meme-dog-balltze-5-5f030ec3cf823__700.jpg">Team Cheems</a>
  </div>
  
</footer>

    </div>

  )
}

export default Home