import React, { useState } from 'react'
import memesData from '../constants/memesData'


function Meme() {
    const [memeImage,setMemeImage] = useState('')

    function getMeme(){

        let memes = memesData.data.memes
        let randomNumber = Math.floor(Math.random() * memes.length)
        const {url} = memes[randomNumber]
        setMemeImage(url)
        console.log(url)
    }
  return (
    <main>
      <form>
        <input type="text" placeholder='Top Text'/>
        <input type="text" placeholder='Bottom Text'/>
      </form>
      <button className='btn' onClick={getMeme}>Get a new meme image</button>
      {memeImage && <img src={memeImage} alt="Meme" className='memeImg'></img>}
      
    </main>
  )
}

export default Meme
