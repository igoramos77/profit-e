import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';

import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

import logo from '../../assets/logo.svg';

import brFlag from '../../assets/flags/br.svg';
import esFlag from '../../assets/flags/es.svg';
import gbFlag from '../../assets/flags/gb.svg';

import {
  Container,
  HeaderActions,
  MainContent,
  SearchContent,
  AccontContent
} from './styles';

export interface IStatsBoxSmallProps {
  id: string;
  status: 'canceled' | 'pending' | 'in_correction' | 'in_confirmation' | 'corrected';
  created_at: string;
  is_photo: boolean;
  corrections: {
    final_grade?: number;
  }[]
  theme: {
    name: string;
    thumbnail_url: string;
  }
  status_info: {
    name: string;
  }
}

const MainHeader: React.FC = () => {

  return (
    <>
      <Container>
        <MainContent>
          <HeaderActions>
            <img src={logo} alt="Logo" />
          </HeaderActions>

          <SearchContent>
            <Input placeholder="O que você está procurando?" />
            <FiSearch color="#011627" size={22} />
          </SearchContent>

          <AccontContent>
            <div>
              <span>
                <FiUser color="#fff" size={16} />
              </span>
              <Link to="#!">Minha conta</Link>
            </div>
            <aside>
              <FiShoppingCart color="#011627" size={22} />
            </aside>
            <footer>
              <img src={brFlag} alt="Brasil" />
              <img src={esFlag} alt="Espanha" />
              <img src={gbFlag} alt="Reino Unido" />
            </footer>
          </AccontContent>

        </MainContent>


      </Container>
    </>
  );
}

export default MainHeader;
