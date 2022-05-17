import { Title, Discription, Link, Section, GlobalBox,ButDiv } from '../Zoom/Zoom.styled';
import Container from '../Container/Container.styled';
import WebexPDF from '../../PDF/Webex_SEEYOU.pdf';


 const WebexHero = () =>{
     return(
         <>
         <main>
             <Section>
            <Container>
                <GlobalBox>
                    <Title>Webex by Cisco</Title>
                    <Discription>
                    Webex is fantastic, and SEEYOU is privileged to help make it easier for users to access this excellent platform. SEEYOU is the first-ever aggregator seamlessly integrating with all major video conference- and educational learning platforms. It is also wholly free of charge. You get an extra toolbar providing a uniform set of tools for video conference providers. Meaning you can quickly master most platforms while still fully benefitting from all their native functionality.
                    </Discription>
                    <ButDiv>
                    <Link href={WebexPDF} target="_blank">
                    Webex Getting Started on SEEYOU
                    </Link>
                    </ButDiv>
                </GlobalBox>
            </Container>
            </Section>
         </main>
         </>
     );
 };
 export default WebexHero;