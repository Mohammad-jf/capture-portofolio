import React,{useState , useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import  {MovieState}  from './../movieState';

//animation
import {motion} from 'framer-motion';
import {pageAnimation} from'../animation';
import ScrollTop from './../Components/ScrollTop';




const MovieDetails = () => {
    const history = useHistory();
    //where we are in the page
    const urlPath = history.location.pathname;

    //states
    const [movies,setMovies] = useState(MovieState);
    const[movie,setMovie] = useState(null);
    
    
    //use effect
    useEffect(()=>{
        //check witch movie should be render 
        const currentMovie = movies.filter((StateMovie)=> StateMovie.url=== urlPath);
        setMovie(currentMovie[0]);
        },[movies,urlPath]);



  return (      
    <>
      {movie && (
          <Details variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
                <HeadLine>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt={movie.title} />
                </HeadLine>

                    <Awards>
                        {movie.awards.map((award)=>(
                            <Award title={award.title} description={award.description} key={award.title}/>
                            ))}

                    </Awards>  

                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="" />
                    </ImageDisplay>
             <ScrollTop/>
        </Details>
      )}
  </>                                                                                        
  );
};


const Details = styled(motion.div)`
color:white;
padding: 0 5rem;

@media(max-width:1000px){
    max-width: 100%;
    padding:0 2rem;
}


  
`
const HeadLine = styled.div`
min-height: 90vh;
margin-top:3rem;
position: relative;
text-align: center;

h2{
    margin-bottom: 3rem;
}

img{
    width: 100%;
    object-fit: cover;       
}

@media(max-width:1000px){
   h2{
       font-size: 3.3rem;
   }
   min-height: 65vh;
}

`

const Awards = styled.div`
min-height: 80vh;
display: flex;
margin: 2rem 5rem;
justify-content: space-around;
align-items: center;

p{
    text-align: center;
}

@media(max-width:1000px){
margin-top:2rem;
flex-direction: column;
}

`

const AwardStyle = styled.div`
padding: 2rem;
h3{
    font-size:2rem;
}

.line{
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
    border-radius: 10px;
}

p{
    padding: 2rem 0rem;
}

`

const ImageDisplay = styled.div`
    min-height: 50vh;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
`



//award component
    const Award = ({title,description})=>{
        return(
            <AwardStyle>
                <h3>{title}</h3>
                <div className="line"></div>
                <p>{description}</p>
            </AwardStyle>
        )
    }
export default MovieDetails;