import {
  Title,
  DiscriptionList,
  CollectsDiscription,
} from './CanExpect.styled';

const CanExpect = () => {
  return (
    <>
      <Title>What you can expect from SEEYOU</Title>
      <DiscriptionList>
        <li>
          <CollectsDiscription>
            Parties to terms of services
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>We are a force for good</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            We measure everything, always
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>
            Relentless product focus that is information driven
          </CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>Simplicity</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>Transparency</CollectsDiscription>
        </li>
        <li>
          <CollectsDiscription>Stability</CollectsDiscription>
        </li>
      </DiscriptionList>
    </>
  );
};
export default CanExpect;
