import styled from 'styled-components';
import Wine1 from './assets/winery.png';
import Wine2 from './assets/maseto.png';
import Wine3 from './assets/fratelli.png';
import Wine4 from './assets/chanti.png';

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
      <img src={wine.src} alt={wine.alt} className='img' />
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

  @media ${({ theme }) => theme.device.small} {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    h2 {
      font-size: 2rem;
      margin-bottom: 0;
    }
  }
`;
const Content = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 0 1.5rem 1.5rem 1.5rem;
 
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 8rem;
  }
  img {
    height: 100%;
  }
  p {
    max-width: 100%;
    text-align: center;
    font-size: 0.7rem;
    margin-bottom: 0;
  }
  span {
    font-size: 0.6rem;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.device.small} {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li > p,span {
      line-height:0.9rem
    }
    li{
      width:11rem;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li > p,span {
      line-height:0.9rem
    }
    li{
      width:12rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0;
    li > p,span {
      line-height:0.9rem
    }
  }
  @media ${({ theme }) => theme.device.laptop} {
    /* padding: 0; */
    li > p,span {
      line-height:0.9rem
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    /* padding: 0; */
    li > p,span {
      line-height:0.9rem
    }
  }
`;
export default Shop;
