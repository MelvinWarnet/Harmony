// components/Staff.tsx
import React from 'react';
import { Svg, G} from 'react-native-svg';
import EmptyStaff from '@/assets/svg/staff_generator/empty_staff.svg';
import GKeySVG from '@/assets/svg/staff_generator/G_key.svg';
import FKeySVG from '@/assets/svg/staff_generator/F_key.svg';
import SharpSVG from '@/assets/svg/staff_generator/sharp.svg';
import FlatSVG from '@/assets/svg/staff_generator/flat.svg';
import MusicNote from '@/assets/svg/staff_generator/music_note.svg';
import { ACCIDENTAL, Note } from '@/models/note';
import { Clef, CLEF_TYPE } from '@/models/clef';
import { Scale } from '@/models/scale';

type StaffProps = {
  clef: Clef;
  scale: Scale;
  note: Note;
};

const Staff: React.FC<StaffProps> = ({ clef, scale, note }) => {
  let ClefSVGComponent;
  switch (clef.type) {
    case CLEF_TYPE.G:
      ClefSVGComponent = GKeySVG;
      break;
    case CLEF_TYPE.F:
      ClefSVGComponent = FKeySVG;
      break;
    default:
      throw new RangeError("Invalid clef type");
  }


  let keySignaturePositionsX: number[] = [];
  let keySignaturePositionsY: number[] = [];
  let KeySignatureSVGComponent;
  if (scale.key_signature.length > 0) {
    let yOffset = 0;
    if (scale.key_signature[0].accidental === ACCIDENTAL.SHARP) {
        KeySignatureSVGComponent = SharpSVG;
        yOffset = -14;
    } 
    else if (scale.key_signature[0].accidental === ACCIDENTAL.FLAT) {
        KeySignatureSVGComponent = FlatSVG;
        yOffset = -22;
    }
    else {
        throw new RangeError("Invalid accidental type for key signature");
    }

    const keySignatureFirstPosX = clef.symbolStaffPosition[0] + 65;
    scale.key_signature.forEach((note, index) => {
      keySignaturePositionsX.push(keySignatureFirstPosX + (20 * index));
      const positions = clef.noteStaffYPositions?.get(note.id);
      if (!positions || positions.length === 0) {
        throw new Error(`Missing Y position for note ${note.id} in clef ${clef.id}`);
      }
      keySignaturePositionsY.push(positions[0] + yOffset);
    });
  }




  // TODO: Define noteX and noteY based on note
  const noteX = 300;
  const noteY = 100;

  return (
    <Svg width="100%" height="100%" viewBox="0 0 400 170" style={{ backgroundColor: 'white'}}>

      <G transform="translate(24, 50)">
        <EmptyStaff />
      </G>

      <G transform={`translate(${clef.symbolStaffPosition[0]}, ${clef.symbolStaffPosition[1]})`}>
        <ClefSVGComponent />
      </G>

      {KeySignatureSVGComponent && scale.key_signature.map((note, index) => (
        <G key={index} transform={`translate(${keySignaturePositionsX[index]}, ${keySignaturePositionsY[index]})`}>
          <KeySignatureSVGComponent />
        </G>
      ))}

      <G transform={`translate(${noteX}, ${noteY})`}>
        <MusicNote />
      </G>
    </Svg>
  );
};

export default Staff;
