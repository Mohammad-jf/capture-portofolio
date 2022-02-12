import React,{useState , useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import  {MovieState}  from './../movieState';

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
        <Details>
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
        </Details>
      )}
  </>                                                                                        
  );
};


const Details = styled.div`
color:white;


  
`
const HeadLine = styled.div`
min-height: 90vh;
padding-top: 25vh;
position: relative;

h2{
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%,-5%);

}

img{
    width: 100%;
    height: 100vh;
    object-fit: cover;       
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