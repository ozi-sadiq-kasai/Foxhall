import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Wrapper>
      <Container>
        <h2>About</h2>
        <p>
          Foxhall is a black owned world-class winery crafting boutique small
          batch wine from the finest grapes. Foxhall captures the feeling of
          long-lost friends reconnecting,spending the holidays with family, or
          falling in love with the one you least expected. Foxhall is a feeling.
        </p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 76vh;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 41vh;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 78vh;
  }
  @media ${({ theme }) => theme.device.laptop} {
    margin-top: 82vh;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 85vh;
  }
`;
const Container = styled.div`
  width: 87%;
  margin: 0 auto;
  padding: 1rem 0;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
  h2 {
    text-align: center;
    font-size:1.5rem;
    margin-bottom:0;
  }
  p {
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
    @media ${({ theme }) => theme.device.mobile} {
      max-width: 95%;
      font-size:1rem;
    }
  }
`

export default AboutUs;
