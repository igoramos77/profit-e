import React from 'react';

import CustomTitles from '../CustomTitles';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <main>
        <div>
          <CustomTitles size={22} borderColor="#FF9F1C" color="#fff" borderBottomWidth="50px" fontWeight={700} margin="0 0 2rem 0">Localização</CustomTitles>
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
        <div>
          <h2>aaaaa</h2>
        </div>
        <div>
          <h2>aaaaa</h2>
        </div>
      </main>
    </Container>
  );
}

export default Footer;
