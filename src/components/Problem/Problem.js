import { Title, Discription, Link, Section, GlobalBox,ButDiv } from '../Zoom/Zoom.styled';
import Container from '../Container/Container.styled';


 const ProblemHero = () =>{
     return(
         <>
         <main>
             <Section>
            <Container>
                <GlobalBox>
                    <Title>Report a Problem</Title>
                    <Discription>
                    Click to Report a Problem
                    <ul>
                        <li>- If you are experiencing an issue with any of the SEEYOU services.</li>
                        <li>- If you wish to report any objectional content by another user.</li>
                    </ul>
                    </Discription>
                    <ButDiv>
                    <Link href="mailto:hello@seeyou.eu?subject=SEEYOU Report a Problem" target="_self">
                    Report a Problem
                    </Link>
                    </ButDiv>
                </GlobalBox>
            </Container>
            </Section>
         </main>
         </>
     );
 };
 export default ProblemHero;