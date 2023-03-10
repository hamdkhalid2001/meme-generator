import React, { useState } from 'react'


function Meme() {
    const [memeData,setMemeData] = useState({
        upperText: "",
        lowerText:"",
        randomImage: "https://i.imgflip.com/64ku.jpg"
    })
    const [allMemes,setAllMemes] = useState([])

    React.useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        console.log("Fetching api")
        fetchData()
    },[])

    function getMeme(){
        let memes = allMemes
        let randomNumber = Math.floor(Math.random() * memes.length)
        setMemeData((prevMemeData)=>{
            return {
                ...prevMemeData,
                randomImage: memes[randomNumber].url
            }
        })
        console.log(memeData)
    }
    function handleChange(event){
        setMemeData((prevFormData)=>{
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    

  return (
    <main>
        <form>
            <input type="text" placeholder='Top Text' onChange={handleChange} name="upperText" value={memeData.upperText}/>
            <input type="text" placeholder='Bottom Text' onChange={handleChange} name="lowerText" value={memeData.lowerText}/>
        </form>
        <button className='btn' onClick={getMeme}>Get a new meme image</button>
        <section className='meme-container'>
            <img src={memeData.randomImage} alt="Meme" className='memeImg'></img>  
            <p className='meme--text top'>{memeData.upperText}</p>
            <p className='meme--text bottom'>{memeData.lowerText}</p>
        </section>
    </main>
  )
}

export default Meme
