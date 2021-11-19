import React from 'react';
import { Grid } from './styles';

import MainHeader  from '../MainHeader';
import Content  from '../Content';
import Footer from '../Footer';


const Layout: React.FC = ({children}) => {
    return(
      <>
        <Grid>
          <MainHeader />
          <Content>
            {children}
          </Content>
        </Grid>
        <Footer />
      </>
    );
}

export default Layout;
