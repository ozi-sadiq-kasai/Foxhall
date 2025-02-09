import styled from 'styled-components';
import { Element } from 'react-scroll';

const AboutUs = () => {
  return (
    <Element name='about'>
      <Wrapper>
        <Container>
          <h2>About</h2>
          <p>
            Foxhall is a black owned world-class winery crafting boutique small
            batch wine from the finest grapes. Foxhall captures the feeling of
            long-lost friends reconnecting,spending the holidays with family, or
            falling in love with the one you least expected. Foxhall is a
            feeling.
          </p>
        </Container>
      </Wrapper>
    </Element>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  margin: 0 auto;
  padding: 1rem 0;

  h2 {
    text-align: center;
    margin-bottom: 0;
  }
  p {
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
  }

  @media ${({ theme }) => theme.device.small} {
    padding: 0;
    padding: 0.4rem 0;
    h2 {
      font-size: 1.5rem;
    }
    p {
      max-width: 95%;
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0;
    padding-top: 0.8rem;
    p {
      max-width: 95%;
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    max-width: 95%;
    font-size: 1.2rem;
    p {
      max-width: 95%;
      font-size: 1rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    max-width: 95%;
  }
`;

export default AboutUs;
