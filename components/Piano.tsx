import React, { useRef, useEffect, useState } from "react";
import { ScrollView, View, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { NOTES } from "@/constants/NOTES";
import { NOTE_ID } from "@/models/note";


type PianoProps = {
  onKeyPress: (noteIds: NOTE_ID[]) => void;
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const whiteKeyIds = [NOTE_ID.C, NOTE_ID.D, NOTE_ID.E, NOTE_ID.F, NOTE_ID.G, NOTE_ID.A, NOTE_ID.B];
const blackKeyIds = [NOTE_ID.C_SHARP, NOTE_ID.D_SHARP, null, NOTE_ID.F_SHARP, NOTE_ID.G_SHARP, NOTE_ID.A_SHARP, null];


export default function Piano({ onKeyPress }: PianoProps) {
  const scrollRef = useRef<ScrollView>(null);
  const totalOctaves = 3;
  const touchWidth = 56;
  const touchHeight = 250;
  const blackTouchWidth = 35;
  const blackTouchHeight = 160;
  const totalWhiteKeys = totalOctaves * whiteKeyIds.length;
  const totalContentWidth = totalWhiteKeys * touchWidth;

  const [ready, setReady] = useState(false);
  const [activeNote, setActiveNote] = useState<NOTE_ID | null>(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    if (ready) {
      const centerOffset = (totalContentWidth - screenWidth) / 2;
      scrollRef.current?.scrollTo({ x: centerOffset, animated: false });
    }
  }, [ready, totalContentWidth]);

  const getNoteWithEnharmonics = (noteId: NOTE_ID): NOTE_ID[] => {
  const note = NOTES[noteId];
  if (!note) return [noteId];
  return [noteId, ...note.enharmonics];
};

  const handleKeyPress = (noteId: NOTE_ID) => {
    setActiveNote(noteId);
    console.log(NOTES[noteId]);
    const equivalents = getNoteWithEnharmonics(noteId);
    onKeyPress(equivalents);
    setTimeout(() => setActiveNote(null), 150);
};

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollX(event.nativeEvent.contentOffset.x);
  };

  // Largeur de la barre de scroll (100% de l'écran)
  const scrollBarWidth = screenWidth;
  // Calcul de la largeur du "thumb" sur la scrollbar
  const thumbWidth = (screenWidth / totalContentWidth) * scrollBarWidth;
  // Calcul de la position du thumb selon le scroll
  const maxScroll = totalContentWidth - screenWidth;
  const thumbX = (scrollX / maxScroll) * (scrollBarWidth - thumbWidth);

  return (
    <View style={{ width: screenWidth, backgroundColor: "#eee" }}>
      {/* Barre de scroll personnalisée */}
      <View
        style={{
          height: 8,
          backgroundColor: "#ccc",
          marginHorizontal: 10,
          borderRadius: 4,
          overflow: "hidden",
          marginBottom: 8,
        }}
      >
        <View
          style={{
            width: thumbWidth,
            height: "100%",
            backgroundColor: "#888",
            borderRadius: 4,
            transform: [{ translateX: thumbX || 0 }],
          }}
        />
      </View>

      <ScrollView
        horizontal
        ref={scrollRef}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16} // Pour fluidité (60fps)
      >
        <View
          onLayout={() => setReady(true)}
          style={{ width: totalContentWidth, height: screenHeight * 0.25 }}
        >
          <Svg width="100%" height="100%" viewBox={`0 0 ${totalContentWidth} ${touchHeight}`}>
            {/* Touches blanches */}
            {Array.from({ length: totalWhiteKeys }).map((_, i) => {
              const noteId = whiteKeyIds[i % 7];
              const isActive = activeNote === noteId;

              return (
                <Rect
                  key={`white-${i}`}
                  x={i * touchWidth}
                  y={0}
                  width={touchWidth}
                  height={touchHeight}
                  fill={isActive ? "#ddd" : "white"}
                  stroke="black"
                  onPress={() => handleKeyPress(noteId)}
                />
              );
            })}


            {/* Touches noires */}
            {Array.from({ length: totalWhiteKeys }).map((_, i) => {
              const noteId = blackKeyIds[i % 7];
              if (!noteId) return null;

              const x = i * touchWidth + touchWidth - blackTouchWidth / 2;
              const isActive = activeNote === noteId;

              return (
                <Rect
                  key={`black-${i}`}
                  x={x}
                  y={0}
                  width={blackTouchWidth}
                  height={blackTouchHeight}
                  fill={isActive ? "#444" : "black"}
                  onPress={() => handleKeyPress(noteId)}
                />
              );
            })}

          </Svg>
        </View>
      </ScrollView>
    </View>
  );
}
