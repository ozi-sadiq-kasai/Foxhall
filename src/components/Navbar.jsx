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
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1.5rem;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap:1rem;
  }
  li {
    cursor: pointer;
    font-size: 1.7rem;
    font-weight:800;
    color: var(--highlights2);
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.9rem;
    }
  }
  li:hover {
    color: var(--highlights1);
    transition: var(--transition);
  }
`;
const Section = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh; /* Takes the full viewport height */
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
