import {
  Title,
  Discription,
  Subtitle,
  DiscriptionRer,
  EmailLink,
} from './PartiesToTerms.styled.js';

const PartiesToTerms = () => {
  return (
    <>
      <Title>Parties to Terms of Services</Title>
      <Discription>
        This section is divided into provider, user, what you can expect from
        SEEYOU and community policies.
      </Discription>
      <Subtitle>Provider</Subtitle>
      <Discription>
        SEEYOU Plc is the provider of services.
        <DiscriptionRer>
          Enter company details such as address, registration number, VAT number
          and jurisdiction
        </DiscriptionRer>
      </Discription>
      <Subtitle>User</Subtitle>
      <Discription>
        SEEYOU minimum age is 13 years unless you are using SEEYOU through your
        educational institution. For legal reasons, the age restrictions are
        higher in same jurisdictions – for full info see the age restriction
        list <EmailLink>(Link to list)</EmailLink>
      </Discription>
      <Discription>
        If you are younger than the age requirements and are not using SEEYOU
        through your educational institution you need the consent from your
        parents or your legal guardian. You should read these terms together
        with them. If you in the role as parent or legal guarding, allow your
        underage child to use SEEYOUs services, then the SEEYOU Terms of
        Services apply to you, and you are responsible for your child’s activity
        within the SEEYOU community.
      </Discription>
    </>
  );
};
export default PartiesToTerms;
