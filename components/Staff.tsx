// components/Staff.tsx
import React from 'react';
import { Svg, G,} from 'react-native-svg';
import EmptyStaff from '@/assets/svg/staff_generator/empty_staff.svg';
import GKey from '@/assets/svg/staff_generator/G_key.svg';
import FKey from '@/assets/svg/staff_generator/F_key.svg';
import MusicNote from '@/assets/svg/staff_generator/music_note.svg';
import { Note } from '@/models/note';

type StaffProps = {
  clef: 'SOL' | 'FA';
  note: Note;
};

const Staff: React.FC<StaffProps> = ({ clef, note }) => {
  const Clef = clef === 'SOL' ? GKey : FKey;
  const clefX = 34;
  const clefY = clef === 'SOL' ? 21 : 51;

  let noteX = null;
  let noteY = null;

  switch (clef) {
    case 'SOL':
      let randomIndex = Math.floor(Math.random() * note.staffPosition.GStaff.length);
      noteY = note.staffPosition.GStaff[randomIndex][1];
      noteX = note.staffPosition.GStaff[randomIndex][0];
      break;
    case 'FA':
      randomIndex = Math.floor(Math.random() * note.staffPosition.FStaff.length);
      noteY = note.staffPosition.FStaff[randomIndex][1];
      noteX = note.staffPosition.FStaff[randomIndex][0];
      break;
    default:
      // Handle default case if needed
      break;
  }

  return (
    <Svg width="100%" height="100%" viewBox="0 0 250 170" style={{ backgroundColor: 'white'}}>

      <G transform="translate(24, 50)">
        <EmptyStaff />
      </G>

      <G transform={`translate(${clefX}, ${clefY})`}>
        <Clef />
      </G>

      <G transform={`translate(${noteX}, ${noteY})`}>
        <MusicNote />
      </G>
    </Svg>
  );
};

export default Staff;
