import styled from 'styled-components';
import whiteWine from '../assets/whiteWine.jpg';

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Foxhall</h1>
        <ul>
          <li>Our Story</li>
          <li>Shop</li>
          <li>Visit Us</li>
        </ul>
      </Container>
      <Section>
        <img src={whiteWine} alt='whitewine and grapes' />
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap:10px;
  padding: 1rem 0.8rem;
  position: relative;
  z-index: 1000;

  h1 {
    margin-bottom: 0;
    color: var(--highlights1);
    font-size: 3rem;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1.7rem;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 2.5rem;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 65%;
    gap:0.8rem;
  }
  li {
    cursor: pointer;
    font-size: 1.7rem;
    font-weight:800;
    color: #F7F0A2;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.9rem;
    }
  }
  li:hover {
    color: var(--highlights2);
    transition: var(--transition);
  }
`;
const Section = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  z-index: 1; 
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    margin: auto;
    height: auto;
  }
`;
export default Navbar;
