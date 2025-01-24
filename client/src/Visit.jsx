import vineyard from './assets/vineyard.jpg';
import style from 'styled-components';

const Visit = () => {
  return (
    <Wrapper>
      <h2>Visit Us</h2>
      <Content>
        <img src={vineyard} alt='vineyard' className='img' />
        <Section>
          <p>
            We are working to open our physical location in the hills outside of
            Washington,DC in Loudon County Virginia. For an authentic
            celebration of people and place, this will be a space to relax,
            enjoy great company,eat exiciting cuisine and host upscale events.We
            hope you will come visit to enjoy a bottle of wine.
          </p>
        </Section>
        <Footer>
          <h4>Please sign up below to be kept up to dat on our plans:</h4>
          <form action='#' className='form'>
            <input type='text' placeholder='Email' name='' id='' />
            <button className='btn' type='button'>
              SEND
            </button>
          </form>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = style.div`
height:30%;
  h2{
  text-align:center;
  @media ${({ theme }) => theme.device.mobile} {
  font-size:1.5rem;
  margin-bottom:0;
 padding-top:1rem;
  }
  border:2px solid red;
`;
const Content = style.div`
img{
opacity:0.85
}
`;
const Section = style.div`
position:absolute;
top:115rem;
width:54%;
right:10px;
p{
position:relative;
color:var(--highlights2);
margin-bottom:0;
font-weight:300;
font-size:1.1rem;
}
@media ${({ theme }) => theme.device.mobile}{
border:2px solid green;
top:152rem;
width:100%;
padding:0 0.9rem;
right:0;
p{
font-size:0.8rem;
line-height:1rem;
}
}
`;
const Footer = style.footer`
position:absolute;
width:100%;
bottom:-95.5rem;
h4{
text-align:center;
}
form{
width:40vw;
padding:0.4rem;
margin:1rem auto;
border-radius:2rem;
display:flex;
justify-content:space-between;
padding-right: 1rem;
input{
outline:none;
border:none;
padding-left: 1rem;
}
button{
width:7rem;
}
}
@media ${({ theme }) => theme.device.mobile}{
border:1px solid yellow;
top:158rem;
h4{
font-size:0.8rem;
margin-bottom:-10px;
}
form{
width:90%;
margin:0.8rem auto;
padding:0.1rem;

input{
border-radius:1rem;
}
button{
border-radius:1rem;
}
}
}
`;

export default Visit;
