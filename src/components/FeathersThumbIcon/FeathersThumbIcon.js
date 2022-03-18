import { FeaturesIconThumb } from './FeathersThumbIcon.styled';
import { ReactComponent as RewindIcon } from 'image/feathers/rewind.svg';
import { ReactComponent as LibraryIcon } from 'image/feathers/library.svg';
import { ReactComponent as LoopIcon } from '../../image/feathers/loop.svg';
import { ReactComponent as CallIcon } from '../../image/feathers/call.svg';
import { ReactComponent as MessageIcon } from '../../image/feathers/message.svg';
import { ReactComponent as NoteIcon } from '../../image/feathers/note.svg';

export const RewindThumb = () => {
  return (
    <FeaturesIconThumb>
      <RewindIcon />
    </FeaturesIconThumb>
  );
};
export const LibraryThumb = () => {
  return (
    <FeaturesIconThumb>
      <LibraryIcon />
    </FeaturesIconThumb>
  );
};

export const LoopIconThumb = () => {
  return (
    <FeaturesIconThumb>
      <LoopIcon />
    </FeaturesIconThumb>
  );
};

export const CallIconThumb = () => {
  return (
    <FeaturesIconThumb>
      <CallIcon />
    </FeaturesIconThumb>
  );
};

export const MessageIconThumb = () => {
  return (
    <FeaturesIconThumb>
      <MessageIcon />
    </FeaturesIconThumb>
  );
};

export const NoteIconThumb = () => {
  return (
    <FeaturesIconThumb>
      <NoteIcon />
    </FeaturesIconThumb>
  );
};
