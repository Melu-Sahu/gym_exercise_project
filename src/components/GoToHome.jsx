import React from 'react';
import GoTop from '../assets/icons/GoTop.png';

const GoToHome = () => {

    function handleClick(){
        window.scrollTo({top:0, scrollBehavior:'smooth'});
    }

  return (
    <div style={{position: 'fixed', bottom:'25px', right:'25px', backgroundColor:'#ff2625', zIndex:'10', scrollBehavior: 'smooth', padding:'10px', 
        boxShadow: '1px 2px 5px #000', borderRadius:'50%', cursor:'pointer', display:'grid', placeItems:'center'}}
        
        onClick={handleClick}
        >
      <img src={GoTop} alt='toTopBtn' style={{width:'20px'}}/>
    </div>
  )
}

export default GoToHome
