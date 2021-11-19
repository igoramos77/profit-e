import React from 'react';
import { FiHeadphones, FiMail, FiShoppingCart } from 'react-icons/fi';
import Button from '../Button';

import CustomTitles from '../CustomTitles';

import { Container } from './styles';

import footerLogo from '../../assets/footer-logo.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <main>
        <div>
          <CustomTitles size={22} borderColor="#FF9F1C" color="#fff" borderBottomWidth="50px" fontWeight={700} margin="0 0 3rem 0">Localização</CustomTitles>
          <main>
            <div>
              <h2>São Paulo</h2>
              <p>
                Rua do Rócio, 423/1801 <br />
                Vila Olímpia - SP <br />
                04552-000 <br />
                +55 11  3333 3333
              </p>
            </div>
            <div>
            <h2>Rio de Janeiro</h2>
            <p>
              Vol. da Pátria, <br />
              301/702 Botafogo - RJ <br />
              22270-000 <br />
              +55 21  3333 3333
            </p>
            </div>
          </main>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Button color="warning"> <FiMail size={20} /> ENTRE EM CONTATO</Button>
          <Button color="warning"> <FiHeadphones size={20} /> FALE COM O NOSSO <br /> CONSULTOR ONLINE</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img src={footerLogo} alt="Logo" />
        </div>
      </main>
    </Container>
  );
}

export default Footer;
