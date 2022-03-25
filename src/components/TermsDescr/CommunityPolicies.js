import {
  Title,
  EmailLink,
  CollectsDiscription,
  DiscriptionList,
} from './CommunityPolicies.styled';

const CommunityPolicies = () => {
  return (
    <>
      <Title>Community Policies</Title>
      <CollectsDiscription>
        SEEYOU is a force of good and we want to facilitate a respectful
        community for everyone which means you must follow these basic rules of
        conduct:
      </CollectsDiscription>
      <DiscriptionList>
        <li>
          <CollectsDiscription>
            You are 13 years or older unless you are using SEEYOU through your
            educational institution
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            For legal reasons, the age restrictions are higher in same
            jurisdictions – for full info see the age restriction list
            <EmailLink>(Link to list)</EmailLink>
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>Act positively</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>Respect all</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>Discriminate against no one</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>Bullies are out</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>No drama</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>No ego</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>Be kind</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            Suaviter in modo, fortiter in re = be pleasant in manner and
            powerful in deed
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            Share SEEYOU with others, use us frequently, and curiously explore
            our advertisers. As this is the only way we can offer this service
            entirely for free
          </CollectsDiscription>
        </li>
      </DiscriptionList>
      <CollectsDiscription>You will not</CollectsDiscription>
      <DiscriptionList>
        <li>
          <CollectsDiscription>
            modify, disassemble, decompile or otherwise attempt to gain access
            of source code
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            knowingly or negligently abuse, interfere or disrupt SEEYOU networks
            and services
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            engage in illegal, fraudulent, false or misleading actions while
            using SEEYOU
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            transmit any material that infringe intellectual property rights or
            any other third-party rights
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            use SEEYOU to communicate any messages that is harassing,
            threatening or otherwise unlawful under any law or regulation
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            use SEEYOU in any high-risk environments that require fail-safe
            controls
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            You may not reproduce, resell or distribute the Services without the
            consent from SEEYOU
          </CollectsDiscription>
        </li>
      </DiscriptionList>
    </>
  );
};
export default CommunityPolicies;
