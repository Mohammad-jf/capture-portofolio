import React from 'react'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import styled from 'styled-components';
import {About,Description,Image} from '../style';
import UseScroll from './UseScroll'
import {ScrollReveal } from '../animation'
function ServicesSection() {
    const [element,controls] = UseScroll();
    return (
        <Services ref={element} variants={ScrollReveal } animate={controls} initial='hidden'>
            <Description>
                <h2>High <span>quality </span>services</h2>

                <Cards>             
                    
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Cards>
            </Description>
                {/* image section */}
                    <Image>
                        <img src={home2} alt="a camera" />
                    </Image>
        </Services>
    )
}

const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
   
`

const Cards = styled.div`
display: flex;
flex-wrap: wrap;


.icon{
    display: flex;
    align-items: center;
    h3{
        margin-left: 1rem;
        background: #fff;
        color:black;
        padding: 0.7rem;
        border-radius: 5px;
        padd
    }
}
`
export default ServicesSection;
