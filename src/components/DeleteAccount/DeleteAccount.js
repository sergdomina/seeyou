import { Title, Discription, Link, Section, GlobalBox,ButDiv } from '../Zoom/Zoom.styled';
import Container from '../Container/Container.styled';
import DeletePDF from '../../PDF/SEEYOU_Delete_Account_v2.pdf';


 const DeleteHero = () =>{
     return(
         <>
         <main>
             <Section>
            <Container>
                <GlobalBox>
                    <Title>Delete Account</Title>
                    <Discription>
                    To delete your SEEYOU account fully, click on the Delete SEEYOU guide below.
                    </Discription>
                    <ButDiv>
                    <Link href={DeletePDF} target="_blank">
                    Delete Account Guide
                    </Link>
                    </ButDiv>
                </GlobalBox>
            </Container>
            </Section>
         </main>
         </>
     );
 };
 export default DeleteHero;