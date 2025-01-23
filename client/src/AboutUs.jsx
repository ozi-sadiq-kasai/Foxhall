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
  border: 1px solid #000;
  position: relative;
  z-index: 3;
  margin-top: 76vh;
`;
const Container = styled.div`
border: 1px solid green;
width: 87%;
margin: 0 auto;
padding:1rem 0;

h2{
  text-align:center;
}
p{
  text-align:center;
margin:0 auto

}
`;

export default AboutUs;
