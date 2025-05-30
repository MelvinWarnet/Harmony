// components/Staff.tsx
import React from 'react';
import { Svg, G} from 'react-native-svg';
import EmptyStaff from '@/assets/svg/staff_generator/empty_staff.svg';
import GKeySVG from '@/assets/svg/staff_generator/G_key.svg';
import FKeySVG from '@/assets/svg/staff_generator/F_key.svg';
import SharpSVG from '@/assets/svg/staff_generator/sharp.svg';
import FlatSVG from '@/assets/svg/staff_generator/flat.svg';
import DoubleSharpSVG from '@/assets/svg/staff_generator/double_sharp.svg';
import DoubleFlatSVG from '@/assets/svg/staff_generator/double_flat.svg';
import NaturalSVG from '@/assets/svg/staff_generator/natural.svg';
import MusicNote from '@/assets/svg/staff_generator/music_note.svg';
import AdditionalLineSVG from '@/assets/svg/staff_generator/additional_line.svg';
import { ACCIDENTAL, Note } from '@/models/note';
import { Clef, CLEF_ID } from '@/models/clef';
import { Scale } from '@/models/scale';

type StaffProps = {
  clef: Clef;
  scale: Scale;
  note: Note;
};

const Staff: React.FC<StaffProps> = ({ clef, scale, note }) => {
  const emptyStaffPositionX = 24;
  const emptyStaffPositionY = 50;


  let ClefSVGComponent;
  switch (clef.id) {
    case CLEF_ID.G:
      ClefSVGComponent = GKeySVG;
      break;
    case CLEF_ID.F:
      ClefSVGComponent = FKeySVG;
      break;
    default:
      throw new RangeError("Invalid clef type");
  }

  console.log(note);


  let keySignaturePositionsX: number[] = [];
  let keySignaturePositionsY: number[] = [];
  let KeySignatureSVGComponent;

  let yOffset = 0;
  if (scale.key_signature.length > 0) {
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
      keySignaturePositionsY.push(clef.noteStaffYPositions[note.id][0] + yOffset);
    });
  }


  let notePositionX = clef.symbolStaffPosition[0] + 270;
  let notePositionY = clef.noteStaffYPositions[note.id][Math.floor(Math.random() * clef.noteStaffYPositions[note.id].length)];


  let accidentalPositionX;
  let accidentalPositionY;
  let AccidentalSVGComponent;

  if (note.accidental !== ACCIDENTAL.NONE) {
    // Si la note n'appartient pas à la signature de la clé
    if (!scale.key_signature.some(n => n.id === note.id)) {
      let accidentalPositionOffsetX = 0;
      let accidentalPositionOffsetY = 0;
      switch (note.accidental) {
        case ACCIDENTAL.SHARP:
          AccidentalSVGComponent = SharpSVG;
          accidentalPositionOffsetX = -24;
          accidentalPositionOffsetY = -14;
          break;
        case ACCIDENTAL.DOUBLE_SHARP:
          AccidentalSVGComponent = DoubleSharpSVG;
          accidentalPositionOffsetX = -24;
          accidentalPositionOffsetY = 1;
          break;
        case ACCIDENTAL.FLAT:
          AccidentalSVGComponent = FlatSVG;
          accidentalPositionOffsetX = -24;
          accidentalPositionOffsetY = -22;
          break;
        case ACCIDENTAL.DOUBLE_FLAT:
          AccidentalSVGComponent = DoubleFlatSVG;
          accidentalPositionOffsetX = -30;
          accidentalPositionOffsetY = -21;
          break;
        case ACCIDENTAL.NATURAL:
          AccidentalSVGComponent = NaturalSVG;
          accidentalPositionOffsetX = -19;
          accidentalPositionOffsetY = -10;
          break;
        default:
          throw new RangeError("Invalid accidental type for note");
      }

      accidentalPositionX = notePositionX + accidentalPositionOffsetX;
      accidentalPositionY = notePositionY + accidentalPositionOffsetY;
    }
  }

  let additionalLineSVGComponent;
  let additionalLineSVGComponentPositionX;
  let additionalLineSVGComponentPositionY;
  if (notePositionY < emptyStaffPositionY - 20) {
    additionalLineSVGComponent = AdditionalLineSVG;
    additionalLineSVGComponentPositionX = notePositionX - 7;
    additionalLineSVGComponentPositionY = emptyStaffPositionY - 20;
  } 
  else if (notePositionY > emptyStaffPositionY + 80) {
    additionalLineSVGComponent = AdditionalLineSVG;
    additionalLineSVGComponentPositionX = notePositionX - 7;
    additionalLineSVGComponentPositionY = emptyStaffPositionY + 80 + 20;
  }



  return (
    <Svg width="100%" height="100%" viewBox="0 0 400 170" style={{ backgroundColor: 'white'}}>

      <G transform={`translate(${emptyStaffPositionX}, ${emptyStaffPositionY})`}>
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

      {AccidentalSVGComponent && (
        <G transform={`translate(${accidentalPositionX}, ${accidentalPositionY})`}>
          <AccidentalSVGComponent />
        </G>
      )}

      {additionalLineSVGComponent && (
        <G transform={`translate(${additionalLineSVGComponentPositionX}, ${additionalLineSVGComponentPositionY})`}>
          <AdditionalLineSVG />
        </G>
      )}

      <G transform={`translate(${notePositionX}, ${notePositionY})`}>
        <MusicNote />
      </G>
    </Svg>
  );

}

export default Staff;
