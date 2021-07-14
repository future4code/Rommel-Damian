import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import imgEmail from './img/mail-send.png'
import imgEndereco from './img/direction-right.png'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.flim15-1.fna.fbcdn.net/v/t1.6435-9/136418267_10224347241724204_8145840711423473314_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGSwDNHbCK3dkitHPvqW7B93x12_lC07jrfHXb-ULTuOjRnzcWm8icWSu7-F_TMDC8&_nc_ohc=VAija5DahGkAX8O8Mq9&_nc_ht=scontent.flim15-1.fna&oh=ba3e2f9e428b90f38aa0827899f0a5cb&oe=60F32F3B" 
          nome="Rommel" 
          descricao="Oi eu sou Rommel, tenho 31 anos eu sou de Lima - Perú, morei em São Paulo - Brasil.
          por quase 3 anos, Em tudo esse tempo estudei Sistemas da informação na Anhembi Morumbi, trabalhei na Functional Card LTDA como analista de sistemas pleno."
        />

        <CardPequeno
          imagemEmail= {imgEmail}
          email="rommel_280490@hotmail.com"  
          imagemEndereco={imgEndereco} 
          endereco="Rua Collasuyo #155, Bairro Independencia."    
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
