import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import ContentGrid  from "../../components/ContentGrid";
import HeaderInfo  from "../../components/HeaderInfo";

import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import CategoryMenu from '../../components/CategoryMenu';

import imgSlider1 from '../../assets/slider/1.png';
import imgSlider2 from '../../assets/slider/2.png';

import { Container, CategoriesGrid, SliderContent, Slider1 } from './styles';

interface ICategoriesProps {
  id: number;
  image_url: string;
  name: string;
  description: string;
  administrator?: null;
}


const Dashboard: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ICategoriesProps[]>();

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await api.get('/category/');

        console.log(response.data);
        setData(response.data);
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
        <Splide options={{rewind: true,}}>
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


      <CategoriesGrid>
        {loading && <Loader isFixed={false} zIndex={99999999} />}
        {data?.map((category, index) => (
          <CategoryMenu key={index} category={category.name} to={category.name}>
            <img src={category.image_url} alt={category.description} />
          </CategoryMenu>
        ))}
      </CategoriesGrid>

      <ContentGrid>
        <Footer />
      </ContentGrid>
    </Container>
  );
}

export default Dashboard;
