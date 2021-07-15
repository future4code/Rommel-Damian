import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Rommel'}
          fotoUsuario={'https://scontent.flim15-1.fna.fbcdn.net/v/t1.6435-9/136418267_10224347241724204_8145840711423473314_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGSwDNHbCK3dkitHPvqW7B93x12_lC07jrfHXb-ULTuOjRnzcWm8icWSu7-F_TMDC8&_nc_ohc=6u3m9Wl5UGQAX9ZBgim&_nc_ht=scontent.flim15-1.fna&oh=fc8db12259dabe858cd94136c611e468&oe=60F5297B'}
          fotoPost={'https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/180253011_4525850964095740_1814242757878163667_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ad2b24&_nc_eui2=AeGlyCMJNPeUX1faN_1s3ec7xGmhTBSpeNfEaaFMFKl419iNh79Eb-dokHh_hCWlGmM&_nc_ohc=mE8bo340W2wAX_VmdiA&_nc_ht=scontent.flim15-2.fna&oh=acf87798d0605a0676d7a27f991a1e23&oe=60F502B9'}
        />
        
        <Post
          nomeUsuario={'Nicole'}
          fotoUsuario={'https://scontent.flim15-2.fna.fbcdn.net/v/t1.6435-9/94745050_3446681305346050_5132411255008526336_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHxDUYm5auZfoFBhiuCVv2XpQwi4zqlNq6lDCLjOqU2ripk48tlVp6BI7XlE6wdRx4&_nc_ohc=jrwHvtFB0bwAX_LZx_A&_nc_oc=AQnZ0wtaEEA3FlhvUWvtuDOVHAWu0Fo7OfMghe-mvUoC65AuEvvTbY_BXqCIC_CYOnc&_nc_ht=scontent.flim15-2.fna&oh=6651c636dad0c42ba26d76a1ff59fde7&oe=60F44609'}
          fotoPost={'https://scontent.flim15-1.fna.fbcdn.net/v/t1.6435-9/197065752_4684557674891734_2121319817005921158_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHlGBi-b3EcfGPlsjG1xK8onGfXgeNn-necZ9eB42f6d25JYqhk61E2oCCpBZNeL5g&_nc_ohc=AZIlKq8tf3UAX9QUdKG&_nc_ht=scontent.flim15-1.fna&oh=96584888ea92ae0760f5f3e65b43f2e6&oe=60F3F9CF'}
        />
        
        <Post
          nomeUsuario={'Hugo'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-U023MAGCE8P-b9fd0a80f3c6-512'}
          fotoPost={'https://ambar.com/wp-content/uploads/2018/09/Botella-Lupulo_-copia-1.jpg'}
        />



      </MainContainer>
    );
  }
}

export default App;
