import React from 'react';
import Header from './header';
import Score from './score';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/style.css'
import ChoosenImage from './choosen_image';
import Options from './options';
import OptionProvider from '../context/context';
import Footer from './footer';

const Home = () => {
    return (
        <React.Fragment>
               <Header/>
                    <OptionProvider>
                            <Score/>
                            <ChoosenImage/>
                            <Options/>
                    </OptionProvider>
                <Footer/>
        </React.Fragment>
      );
}
 
export default Home;