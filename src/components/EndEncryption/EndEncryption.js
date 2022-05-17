import { Title, Discription, Link, Section, GlobalBox,ButDiv } from '../Zoom/Zoom.styled';
import Container from '../Container/Container.styled';
import EndPDF from '../../PDF/Encryption.pdf';


 const EndHero = () =>{
     return(
         <>
         <main>
             <Section>
            <Container>
                <GlobalBox>
                    <Title>End To End Encryption</Title>
                    <Discription>
                    SEEYOU's chat, video and voice calls are end-to-end encrypted, meaning they’re genuinely private.
                    </Discription>
                    <Discription>
SEEYOU cannot read the content nor see with whom you are communicating. Nor can anyone else. Unlike many other providers, this holds for group chats too. The encryption key is personal and managed by your mobile phone, and logs are not centrally stored by SEEYOU but are yours alone. The chat, video, and voice calls work equally well outside video conferences.
                    </Discription>
                    <ButDiv>
                    <Link href={EndPDF} target="_blank">
                    End To End Encryption White Paper
                    </Link>
                    </ButDiv>
                </GlobalBox>
            </Container>
            </Section>
         </main>
         </>
     );
 };
 export default EndHero;