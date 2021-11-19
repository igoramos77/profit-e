import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import ContentGrid  from "../../components/ContentGrid";
import ProductCard from '../../components/ProductCard';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import imgSlider1 from '../../assets/slider/1.png';
import imgSlider2 from '../../assets/slider/2.png';

import { Container, ProductsGrid, SliderContent, Slider1 } from './styles';
import CustomTitles from '../../components/CustomTitles';

interface IProdutcsProps {
  id: number;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
  update_at: string;
  unity_value: number;
  categoryList?: {
    id: number;
    image_url: string;
    name: string;
    slug: string;
    description: string;
  }[];
}

const Dashboard: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProdutcsProps[]>();

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await api.get('/product/');

        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return(
    <Container>
      <SliderContent>
        <Splide options={{rewind: true, type: 'loop', perPage: 1, perMove: 1,}}>
          <SplideSlide>
            <Slider1>
              <div>
                <h1>Nossa especialidade: <br />experiência de compra.</h1>
              </div>
              <div>
                <img src={imgSlider1} alt="Slider 1" />
              </div>
            </Slider1>
          </SplideSlide>
          <SplideSlide>
            <Slider1>
              <div>
                <img src={imgSlider2} alt="Slider 1" />
              </div>
              <div>
                <h1>Nike Air Force 1: <br />O tênis mais vendido do ano.</h1>
              </div>
            </Slider1>
          </SplideSlide>
        </Splide>
      </SliderContent>
      <CustomTitles size={22} borderColor="#FF9F1C" borderBottomWidth="50px" fontWeight={700} margin="2rem 0">Produtos</CustomTitles>
      <ProductsGrid>
        <Splide options={
          {
            rewind: true,
            perPage: 4,
            type: 'loop',
            perMove: 1,
            gap: '1rem',
            pagination: false,
          }}>
          {loading && <Loader isFixed={false} zIndex={99999999} />}
          {products?.map((product, index) => (
          <SplideSlide key={index}>
            <ProductCard
            off={index % 2 === 0 ? true : false}
            name={product.name}
            unity_value={product.unity_value}
            image_url={product.image_url}
            />
          </SplideSlide>
          ))}
        </Splide>
      </ProductsGrid>
    </Container>
  );
}

export default Dashboard;
