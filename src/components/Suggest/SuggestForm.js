import { ModalInput, ModaButtonSend, FormContainer,FormTitle,InputName,ModalText } from './SuggestForm.styled';

 const SuggestForm = () =>{
     return(
         <>
         <main>
            <FormContainer>
                <FormTitle>Suggest a Feature</FormTitle>
                <form>
                    <InputName>Name</InputName>
                    <ModalInput placeholder="Name" type="text" />
                    <InputName>Email Address</InputName>
                    <ModalInput placeholder="Email Address" type="text" />
                    
                    <ModalText rows="5" placeholder="Please describe the problem" type="text" />
                    <ModaButtonSend type="submit">Send</ModaButtonSend>
                </form>
            </FormContainer>
         </main>
         </>
     );
 };
 export default SuggestForm;