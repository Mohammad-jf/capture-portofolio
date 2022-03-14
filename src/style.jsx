import styled from 'styled-components';
import {motion} from 'framer-motion';
//styled component
 export const About = styled(motion.div)`
    min-height : 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5rem;
    color: white;

    @media (max-width:1000px){
        min-width: 100%;
        flex-direction:column;
        padding:3rem 5rem;
        text-align: center;
    }
`

export const Description = styled.div`
flex: 1;
z-index: 2;
padding-right:5rem;

@media (max-width:1000px){
    padding-right: 0;
}

h2{
    font-weight: lighter;
}
    
`
export const Image = styled.div`
    flex: 1;
    z-index: 2;
    overflow: hidden;

    img{

        @media (max-width:1000px){
            width: 100%;
            margin-top: 40px;
            height: 65vh;
            object-fit: cover;
        }
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

export const Hide = styled.div`
    overflow: hidden;

   
`

