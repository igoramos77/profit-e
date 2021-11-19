import React from 'react';

import ReactStars from 'react-stars'

import truncateString from '../../utils/truncateStrings';

import { Container, OffBadge } from './styles';
import { FiShoppingCart } from "react-icons/fi";
import Button from '../Button';


interface IProdutcsProps {
  id?: number;
  name: string;
  image: string;
  oldPrice: number;
  price: number;
  description?: string;
  off?: boolean;
  instalments: {
    count: number;
    value: number;
  }
}

const ProductCard: React.FC<IProdutcsProps> = ({name, off, image, oldPrice, price, description, instalments}) => {

  const ratingChanged = (newRating: any) => {
    console.log(newRating)
  }

  return (
    <Container>
      {off && <OffBadge />}
      <img src={image} alt={name} />
      <h3> {truncateString(name, 67)} </h3>
      <ReactStars count={5} value={Math.floor(Math.random() * 6)} onChange={ratingChanged} size={24} color1="#ccc" color2="#ffd700" />
      <main>de {oldPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</main>
      <h4>por {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
      <p>ou em {instalments.count}x de {instalments.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      <Button color="success"> <FiShoppingCart size={20} /> Comprar</Button>
    </Container>
  );
}

export default ProductCard;
