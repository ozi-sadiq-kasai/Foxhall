import vineyard from './assets/vineyard.jpg';
import styled from 'styled-components';
import { motion } from 'motion/react';

const Visit = () => {
  return (
    <Wrapper>
      <h2>Visit Us</h2>
      <Content>
        <img src={vineyard} alt='vineyard' className='img' />
        <Section>
          <p>
            We are working to open our physical location in the hills outside of
            Washington, DC in Loudon County, Virginia. For an authentic
            celebration of people and place, this will be a space to relax,
            enjoy great company, eat exciting cuisine, and host upscale events.
            We hope you will come visit to enjoy a bottle of wine.
          </p>
        </Section>
        <Footer>
          <h4>Please sign up below to be kept up to date on our plans:</h4>
          <form action='#' className='form'>
            <input type='text' placeholder='Email' />
            <motion.button
              className='btn'
              type='button'
              whileTap={{ scale: 0.5 }}
              transition={{ duration: 0.3 }}>
              SEND
            </motion.button>
          </form>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    text-align: center;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1.5rem;
      padding-top: 1rem;
    }
    @media ${({ theme }) => theme.device.laptop} {
      font-size: 2.5rem;
    }
  }
`;

const Content = styled.div`
  img {
    opacity: 0.85;
  }
`;

const Section = styled.div`
  position: relative;
  p {
    color: var(--highlights2);
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.device.laptop} {
    postion: absolute;
    bottom:27rem;
    width: 50%;
    right:-30rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    postion: absolute;
    bottom:30rem;
    width: 50%;
    right:-45rem;
    p{
      font-size:1.3rem;
      line-height:1.5;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
  h4 {
    margin-bottom: 0.8rem;
  }
  form {
    display: flex;
    justify-content: space-between;
    border-radius: 2rem;
    padding: 0.8rem 1rem;
    input {
      outline: none;
      border: none;
      padding: 0.5rem;
    }
    button {
      padding: 0.7rem 1rem;
      width: 20%;
      border-radius: 15px;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    margin: -10rem auto;
    form {
      width: 70%;
      margin: 0 auto;
      button {
        width: 30%;
      }
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 100%;
    margin: -11rem auto;
    form {
      width: 50%;
      margin: 0 auto;
      button {
        width: 30%;
      }
    }
  }
`;

export default Visit;
