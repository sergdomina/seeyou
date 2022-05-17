import { Title, Discription, Link, Section, GlobalBox, ButDiv } from '../Zoom/Zoom.styled';
import Container from '../Container/Container.styled';



 const RequestHero = () =>{
     return(
         <>
         <main>
             <Section>
            <Container>
                <GlobalBox>
                    <Title>Request Access Code</Title>
                    <Discription>
                    SEEYOU offers exclusive access to selective users to use the SEEYOU production apps. After successfully downloading the SEEYOU apps, you are required to provide us with your email address to be whitelisted and then be given a unique access code to enter when first time using the SEEYOU apps. 
                    </Discription>
                    <Discription>
                    Click to request access. 
                    </Discription>
                    <ButDiv>
                    <Link href="mailto:hello@seeyou.eu?subject=Please provide me with SEEYOU Access Code to use SEEYOU apps" target="_self" >
                    Request access
                    </Link>
                    </ButDiv>
                </GlobalBox>
            </Container>
            </Section>
         </main>
         </>
     );
 };
 export default RequestHero;