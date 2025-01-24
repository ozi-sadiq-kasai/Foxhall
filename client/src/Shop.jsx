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
      <img src={wine.src} alt={wine.alt} />
      <p>{wine.name}</p>
      <span>${wine.price}</span>
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
  border: 4px solid yellow;
  justify-content: center;
  gap: 2rem;
  li {
    border: 1px solid #000;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    max-width: 12rem;
  }
  img {
    max-width: 50%;
    height: 100%;
    object-fit: center;
  }
`;
export default Shop;
