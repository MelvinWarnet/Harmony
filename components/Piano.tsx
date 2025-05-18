import React, { useRef, useEffect, useState } from "react";
import { ScrollView, View, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import Svg, { Rect } from "react-native-svg";

type PianoProps = {
  onKeyPress: (noteId: string) => void;
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const whiteNotes = ["C", "D", "E", "F", "G", "A", "B"];
const blackNotes = ["C#", "D#", "", "F#", "G#", "A#", ""];

export default function Piano({ onKeyPress }: PianoProps) {
  const scrollRef = useRef<ScrollView>(null);
  const totalOctaves = 3;
  const touchWidth = 56;
  const touchHeight = 250;
  const blackTouchWidth = 35;
  const blackTouchHeight = 160;
  const totalWhiteKeys = totalOctaves * whiteNotes.length;
  const totalContentWidth = totalWhiteKeys * touchWidth;

  const [ready, setReady] = useState(false);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    if (ready) {
      const centerOffset = (totalContentWidth - screenWidth) / 2;
      scrollRef.current?.scrollTo({ x: centerOffset, animated: false });
    }
  }, [ready, totalContentWidth]);

  const handleKeyPress = (note: string) => {
    setActiveNote(note);
    onKeyPress(note);
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
              const noteName = whiteNotes[i % 7];
              const isActive = activeNote === noteName;

              return (
                <Rect
                  key={`white-${i}`}
                  x={i * touchWidth}
                  y={0}
                  width={touchWidth}
                  height={touchHeight}
                  fill={isActive ? "#ddd" : "white"}
                  stroke="black"
                  onPress={() => handleKeyPress(noteName)}
                />
              );
            })}

            {/* Touches noires */}
            {Array.from({ length: totalWhiteKeys }).map((_, i) => {
              const blackNote = blackNotes[i % 7];
              if (!blackNote) return null;

              const x = i * touchWidth + touchWidth - blackTouchWidth / 2;
              const isActive = activeNote === blackNote;

              return (
                <Rect
                  key={`black-${i}`}
                  x={x}
                  y={0}
                  width={blackTouchWidth}
                  height={blackTouchHeight}
                  fill={isActive ? "#444" : "black"}
                  onPress={() => handleKeyPress(blackNote)}
                />
              );
            })}
          </Svg>
        </View>
      </ScrollView>
    </View>
  );
}
