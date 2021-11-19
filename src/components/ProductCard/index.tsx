import React from 'react';

import ReactStars from 'react-stars'

import truncateString from '../../utils/truncateStrings';

import { Container } from './styles';
import { FiShoppingCart } from "react-icons/fi";

interface IProductCardProps {
  name: string;
  description?: string;
  image_url: string;
  created_at?: string;
  update_at?: string;
  unity_value: number;
}

const ProductCard: React.FC<IProductCardProps> = ({name, description, image_url, created_at, update_at, unity_value}) => {

  const ratingChanged = (newRating: any) => {
    console.log(newRating)
  }

  return (
    <Container>
      <img src={image_url} alt={name} />
      <h3> {truncateString(name, 67)} </h3>
      <ReactStars count={5} value={1} onChange={ratingChanged} size={24} color1="#ccc" color2="#ffd700" />
      <main>de R$ 299,00</main>
      <h4>por {unity_value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
      <p>ou em 3x de R$ 133,00</p>
    </Container>
  );
}

export default ProductCard;
