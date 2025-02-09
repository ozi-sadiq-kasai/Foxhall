import styled from 'styled-components';
import whiteWine from '../assets/whiteWine.jpg';
import { Link} from 'react-scroll';

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Foxhall</h1>
        <ul>
          <li><Link to='about' smooth={true} duration={500}>About</Link></li>
          <li><Link to='shop' smooth={true} duration={500}>Shop</Link></li>
          <li><Link to='visit' smooth={true} duration={500}>Visit</Link></li>
        </ul>
      </Container>
      <Image>
        <img src={whiteWine} alt='whitewine and grapes' className='img' />
      </Image>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
position:relative;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap:10px;
  padding: 1rem 0.8rem;
  position: absolute;
  z-index: 1000;
  width:100%;

  h1 {
    margin-bottom: 0;
    color: var(--highlights1);
    font-size: 3rem;
    @media ${({ theme }) => theme.device.small} {
      font-size: 1.4rem;
    }
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
    @media ${({ theme }) => theme.device.small} {
      font-size: 0.9rem;
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.9rem;
    }
  }
  li:hover {
    color: var(--highlights2);
    transition: var(--transition);
  }
`;
const Image = styled.div`
  position: relative;
  top: 0;
`;
export default Navbar;
