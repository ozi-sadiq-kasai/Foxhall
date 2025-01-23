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
  width: 100vw;
  position: relative;
`;
const Container = styled.div`
  width: 95vw;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 1rem 0;
  position:relative;
  z-index:1000;
  h1 {
    margin-bottom: 0;
    color: var(--highlights1);

  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 70%;
    min-width: 40%;
  }
  li {
    cursor: pointer;
    font-size: 1.2rem;
    color:var(--highlights1)
  }
  li:hover {
    border-bottom: 2px solid var(--highlights2);
    /* transition: var(--transition); */
  }
`;
const Section = styled.div`
position:absolute;
top:0;
width: 100%;
  height: 100vh; /* Takes the full viewport height */
  z-index: 1; /* Positioned behind the navbar */
  overflow: hidden;
img{
    display:block;
    width:100%;
    margin:auto;
    height:auto;
}
`
export default Navbar;
