import styled from 'styled-components';
import Wine1 from './assets/Wine1.png';
import Wine2 from './assets/Wine2.png';
import Wine3 from './assets/Wine3.png';
import Wine4 from './assets/Wine4.png';

const Shop = () => {
  const wines = [
    {
      id: 1,
      src: Wine1,
      alt: 'Wine 1',
      name: 'Château Margaux',
      price: 900,
      region: 'Bordeaux, France',
    },
    {
      id: 2,
      src: Wine2,
      alt: 'Wine 2',
      name: 'Penfolds Grange',
      price: 600,
      region: 'South Australia',
    },
    {
      id: 3,
      src: Wine3,
      alt: 'Wine 3',
      name: 'Cloudy Bay Sauvignon Blanc',
      price: 35,
      region: 'Marlborough, New Zealand',
    },
    {
      id: 4,
      src: Wine4,
      alt: 'Wine 4',
      name: 'Dom Pérignon Vintage Champagne Margaux',
      price: 300,
      region: 'Champagne, France',
    },
  ];
  const Wine = wines.map((wine) => (
    <li key={wine.id}>
      <img src={wine.src} alt={wine.alt}  className='img'/>
      <p>{wine.name}</p>
      <p>${wine.price}</p>
      <span>{wine.region}</span>
    </li>
  ));
  return (
    <Wrapper>
      <h2>Shop</h2>
      <Content>{Wine}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    text-align: center;
  }
`;
const Content = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  padding:0 1.5rem 0.8rem 1.5rem;
  @media${({ theme }) => theme.device.mobile} {
   flex-direction:column;
   justify-content:center;
   align-items:center;
   padding:0;
  }
  li {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 8rem;
  }
  img {
    height: 100%;
  }
  p{
    max-width:100%;
    text-align:center;
    font-size:0.7rem;
    margin-bottom:0;
  }
  span{
    font-size:0.6rem;
    font-weight:700;
  }
`;
export default Shop;
