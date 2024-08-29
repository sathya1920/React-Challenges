import React, { useState } from 'react'

import './RandomQuote.css'

function RandomQuote() {

  let quotes = [];
  async function loadQuotes(){
    const response = await fetch("https://type.fit/api/quotes")
    quotes = await response.json();
    

  }

  const random = ()=>{
    const select = quotes[Math.floor(Math.random()*quotes.length)];
    setQuote(select);
  }

  const twitter = ()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
  }


  loadQuotes();

  const [quote,setQuote] = useState({
    text: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it",
    author: 'Sathya Sai Guddanti',
  });
  return (
    <div className='container'>
      <div className='quote'>{quote.text}</div>
      <div>
        <div className='line'></div>
        <div className='bottom'>
        <div className='author'>- {quote.author.split(',')[0]}</div>
        <div className='icons'>
          <i className="fa fa-refresh fa-2xl" aria-hidden="true" onClick={()=>{random()}}></i>
          <i className="fa-brands fa-x-twitter fa-2xl " onClick={()=>{twitter()}}></i>
        </div>
        </div>
    
      </div>

    </div>
  )
}

export default RandomQuote