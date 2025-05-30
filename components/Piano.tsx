import React, { useRef, useEffect, useState } from "react";
import { ScrollView, View, Dimensions, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Rect, Text } from "react-native-svg";
import { NOTES } from "@/constants/NOTES";
import { NOTE_ID } from "@/models/note";
import { getNoteWithEnharmonics, playNoteSound } from "@/utils/utilsFunction";
import Icon from "react-native-vector-icons/MaterialIcons";


type PianoProps = {
  onKeyPress: (noteIds: NOTE_ID[]) => void;
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Piano({ onKeyPress }: PianoProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [keyWidth, setKeyWidth] = useState(56);
  const whiteTouchWidth = keyWidth;
  const whiteTouchHeight = 250;
  const blackTouchWidth = keyWidth * 0.57;
  const blackTouchHeight = 160;
  const totalWhiteKeys = 52;
  const totalContentWidth = totalWhiteKeys * whiteTouchWidth;


  const [ready, setReady] = useState(false);
  const [activeNote, setActiveNote] = useState<[NOTE_ID, number] | null>(null);
  const [scrollX, setScrollX] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showNoteNames, setShowNoteNames] = useState(false);

  useEffect(() => {
    if (ready) {
      const centerOffset = (totalContentWidth - screenWidth) / 2;
      scrollRef.current?.scrollTo({ x: centerOffset, animated: false });
    }
  }, [ready, totalContentWidth]);

  const zoomIn = () => {
    setKeyWidth(prev => (prev < 150 ? prev + 10 : prev));
  };

  const zoomOut = () => {
    setKeyWidth(prev => (prev > 20 ? prev - 10 : prev));
  };

  const handleKeyPress = (noteId: NOTE_ID, octave: number) => {
    setActiveNote([noteId, octave]);
    console.log(NOTES[noteId]);
    if (!isMuted) {
      playNoteSound(noteId, octave.toString());
    }
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
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={zoomOut}>
          <Icon name="zoom-out" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={zoomIn}>
          <Icon name="zoom-in" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsMuted(!isMuted)}>
          <Icon name={isMuted ? "volume-off" : "volume-up"} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowNoteNames(!showNoteNames)}>
          <Icon name={showNoteNames ? "music-note" : "music-off"} style={styles.icon} />
        </TouchableOpacity>
      </View>
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
        scrollEventThrottle={16}
      >
        <View onLayout={() => setReady(true)} style={{ width: totalContentWidth, height: screenHeight * 0.25 }}>
          <Svg width="100%" height="100%" viewBox={`0 0 ${totalContentWidth} ${whiteTouchHeight}`}>
            <Rect onPress={() => handleKeyPress(NOTE_ID.A, 0)} fill={activeNote && activeNote[0] === NOTE_ID.A && activeNote[1] === 0 ? "#205b89" : "white"} x={0 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.B, 0)} fill={activeNote && activeNote[0] === NOTE_ID.B && activeNote[1] === 0 ? "#205b89" : "white"} x={1 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />

            <Rect onPress={() => handleKeyPress(NOTE_ID.C, 1)} fill={activeNote && activeNote[0] === NOTE_ID.C && activeNote[1] === 1 ? "#205b89" : "white"} x={2 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D, 1)} fill={activeNote && activeNote[0] === NOTE_ID.D && activeNote[1] === 1 ? "#205b89" : "white"} x={3 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.E, 1)} fill={activeNote && activeNote[0] === NOTE_ID.E && activeNote[1] === 1 ? "#205b89" : "white"} x={4 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F, 1)} fill={activeNote && activeNote[0] === NOTE_ID.F && activeNote[1] === 1 ? "#205b89" : "white"} x={5 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G, 1)} fill={activeNote && activeNote[0] === NOTE_ID.G && activeNote[1] === 1 ? "#205b89" : "white"} x={6 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A, 1)} fill={activeNote && activeNote[0] === NOTE_ID.A && activeNote[1] === 1 ? "#205b89" : "white"} x={7 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.B, 1)} fill={activeNote && activeNote[0] === NOTE_ID.B && activeNote[1] === 1 ? "#205b89" : "white"} x={8 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />

            <Rect onPress={() => handleKeyPress(NOTE_ID.C, 2)} fill={activeNote && activeNote[0] === NOTE_ID.C && activeNote[1] === 2 ? "#205b89" : "white"} x={9 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D, 2)} fill={activeNote && activeNote[0] === NOTE_ID.D && activeNote[1] === 2 ? "#205b89" : "white"} x={10 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.E, 2)} fill={activeNote && activeNote[0] === NOTE_ID.E && activeNote[1] === 2 ? "#205b89" : "white"} x={11 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F, 2)} fill={activeNote && activeNote[0] === NOTE_ID.F && activeNote[1] === 2 ? "#205b89" : "white"} x={12 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G, 2)} fill={activeNote && activeNote[0] === NOTE_ID.G && activeNote[1] === 2 ? "#205b89" : "white"} x={13 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A, 2)} fill={activeNote && activeNote[0] === NOTE_ID.A && activeNote[1] === 2 ? "#205b89" : "white"} x={14 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.B, 2)} fill={activeNote && activeNote[0] === NOTE_ID.B && activeNote[1] === 2 ? "#205b89" : "white"} x={15 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />

            <Rect onPress={() => handleKeyPress(NOTE_ID.C, 3)} fill={activeNote && activeNote[0] === NOTE_ID.C && activeNote[1] === 3 ? "#205b89" : "white"} x={16 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D, 3)} fill={activeNote && activeNote[0] === NOTE_ID.D && activeNote[1] === 3 ? "#205b89" : "white"} x={17 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.E, 3)} fill={activeNote && activeNote[0] === NOTE_ID.E && activeNote[1] === 3 ? "#205b89" : "white"} x={18 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F, 3)} fill={activeNote && activeNote[0] === NOTE_ID.F && activeNote[1] === 3 ? "#205b89" : "white"} x={19 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G, 3)} fill={activeNote && activeNote[0] === NOTE_ID.G && activeNote[1] === 3 ? "#205b89" : "white"} x={20 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" /> 
            <Rect onPress={() => handleKeyPress(NOTE_ID.A, 3)} fill={activeNote && activeNote[0] === NOTE_ID.A && activeNote[1] === 3 ? "#205b89" : "white"} x={21 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.B, 3)} fill={activeNote && activeNote[0] === NOTE_ID.B && activeNote[1] === 3 ? "#205b89" : "white"} x={22 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />

            <Rect onPress={() => handleKeyPress(NOTE_ID.C, 4)} fill={activeNote && activeNote[0] === NOTE_ID.C && activeNote[1] === 4 ? "#205b89" : "white"} x={23 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D, 4)} fill={activeNote && activeNote[0] === NOTE_ID.D && activeNote[1] === 4 ? "#205b89" : "white"} x={24 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.E, 4)} fill={activeNote && activeNote[0] === NOTE_ID.E && activeNote[1] === 4 ? "#205b89" : "white"} x={25 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F, 4)} fill={activeNote && activeNote[0] === NOTE_ID.F && activeNote[1] === 4 ? "#205b89" : "white"} x={26 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G, 4)} fill={activeNote && activeNote[0] === NOTE_ID.G && activeNote[1] === 4 ? "#205b89" : "white"} x={27 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A, 4)} fill={activeNote && activeNote[0] === NOTE_ID.A && activeNote[1] === 4 ? "#205b89" : "white"} x={28 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.B, 4)} fill={activeNote && activeNote[0] === NOTE_ID.B && activeNote[1] === 4 ? "#205b89" : "white"} x={29 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />

            <Rect onPress={() => handleKeyPress(NOTE_ID.C, 5)} fill={activeNote && activeNote[0] === NOTE_ID.C && activeNote[1] === 5 ? "#205b89" : "white"} x={30 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D, 5)} fill={activeNote && activeNote[0] === NOTE_ID.D && activeNote[1] === 5 ? "#205b89" : "white"} x={31 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.E, 5)} fill={activeNote && activeNote[0] === NOTE_ID.E && activeNote[1] === 5 ? "#205b89" : "white"} x={32 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F, 5)} fill={activeNote && activeNote[0] === NOTE_ID.F && activeNote[1] === 5 ? "#205b89" : "white"} x={33 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G, 5)} fill={activeNote && activeNote[0] === NOTE_ID.G && activeNote[1] === 5 ? "#205b89" : "white"} x={34 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A, 5)} fill={activeNote && activeNote[0] === NOTE_ID.A && activeNote[1] === 5 ? "#205b89" : "white"} x={35 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.B, 5)} fill={activeNote && activeNote[0] === NOTE_ID.B && activeNote[1] === 5 ? "#205b89" : "white"} x={36 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            
            <Rect onPress={() => handleKeyPress(NOTE_ID.C, 6)} fill={activeNote && activeNote[0] === NOTE_ID.C && activeNote[1] === 6 ? "#205b89" : "white"} x={37 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D, 6)} fill={activeNote && activeNote[0] === NOTE_ID.D && activeNote[1] === 6 ? "#205b89" : "white"} x={38 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.E, 6)} fill={activeNote && activeNote[0] === NOTE_ID.E && activeNote[1] === 6 ? "#205b89" : "white"} x={39 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F, 6)} fill={activeNote && activeNote[0] === NOTE_ID.F && activeNote[1] === 6 ? "#205b89" : "white"} x={40 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G, 6)} fill={activeNote && activeNote[0] === NOTE_ID.G && activeNote[1] === 6 ? "#205b89" : "white"} x={41 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A, 6)} fill={activeNote && activeNote[0] === NOTE_ID.A && activeNote[1] === 6 ? "#205b89" : "white"} x={42 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.B, 6)} fill={activeNote && activeNote[0] === NOTE_ID.B && activeNote[1] === 6 ? "#205b89" : "white"} x={43 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            
            <Rect onPress={() => handleKeyPress(NOTE_ID.C, 7)} fill={activeNote && activeNote[0] === NOTE_ID.C && activeNote[1] === 7 ? "#205b89" : "white"} x={44 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D, 7)} fill={activeNote && activeNote[0] === NOTE_ID.D && activeNote[1] === 7 ? "#205b89" : "white"} x={45 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.E, 7)} fill={activeNote && activeNote[0] === NOTE_ID.E && activeNote[1] === 7 ? "#205b89" : "white"} x={46 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F, 7)} fill={activeNote && activeNote[0] === NOTE_ID.F && activeNote[1] === 7 ? "#205b89" : "white"} x={47 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G, 7)} fill={activeNote && activeNote[0] === NOTE_ID.G && activeNote[1] === 7 ? "#205b89" : "white"} x={48 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A, 7)} fill={activeNote && activeNote[0] === NOTE_ID.A && activeNote[1] === 7 ? "#205b89" : "white"} x={49 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />
            <Rect onPress={() => handleKeyPress(NOTE_ID.B, 7)} fill={activeNote && activeNote[0] === NOTE_ID.B && activeNote[1] === 7 ? "#205b89" : "white"} x={50 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />

            <Rect onPress={() => handleKeyPress(NOTE_ID.C, 8)} fill={activeNote && activeNote[0] === NOTE_ID.C && activeNote[1] === 8 ? "#205b89" : "white"} x={51 * whiteTouchWidth} y={0} width={whiteTouchWidth} height={whiteTouchHeight} stroke="black" />

            <Rect onPress={() => handleKeyPress(NOTE_ID.A_SHARP, 0)} fill={activeNote && activeNote[0] === NOTE_ID.A_SHARP && activeNote[1] === 0 ? "#205b89" : "black"} x={0 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />

            <Rect onPress={() => handleKeyPress(NOTE_ID.C_SHARP, 1)} fill= {activeNote && activeNote[0] === NOTE_ID.C_SHARP && activeNote[1] === 1 ? "#205b89" : "black"} x={2 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D_SHARP, 1)} fill= {activeNote && activeNote[0] === NOTE_ID.D_SHARP && activeNote[1] === 1 ? "#205b89" : "black"} x={3 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F_SHARP, 1)} fill= {activeNote && activeNote[0] === NOTE_ID.F_SHARP && activeNote[1] === 1 ? "#205b89" : "black"} x={5 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G_SHARP, 1)} fill= {activeNote && activeNote[0] === NOTE_ID.G_SHARP && activeNote[1] === 1 ? "#205b89" : "black"} x={6 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A_SHARP, 1)} fill= {activeNote && activeNote[0] === NOTE_ID.A_SHARP && activeNote[1] === 1 ? "#205b89" : "black"} x={7 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />

            <Rect onPress={() => handleKeyPress(NOTE_ID.C_SHARP, 2)} fill= {activeNote && activeNote[0] === NOTE_ID.C_SHARP && activeNote[1] === 2 ? "#205b89" : "black"} x={9 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D_SHARP, 2)} fill= {activeNote && activeNote[0] === NOTE_ID.D_SHARP && activeNote[1] === 2 ? "#205b89" : "black"} x={10 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F_SHARP, 2)} fill= {activeNote && activeNote[0] === NOTE_ID.F_SHARP && activeNote[1] === 2 ? "#205b89" : "black"} x={12 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G_SHARP, 2)} fill= {activeNote && activeNote[0] === NOTE_ID.G_SHARP && activeNote[1] === 2 ? "#205b89" : "black"} x={13 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A_SHARP, 2)} fill= {activeNote && activeNote[0] === NOTE_ID.A_SHARP && activeNote[1] === 2 ? "#205b89" : "black"} x={14 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />

            <Rect onPress={() => handleKeyPress(NOTE_ID.C_SHARP, 3)} fill= {activeNote && activeNote[0] === NOTE_ID.C_SHARP && activeNote[1] === 3 ? "#205b89" : "black"} x={16 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D_SHARP, 3)} fill= {activeNote && activeNote[0] === NOTE_ID.D_SHARP && activeNote[1] === 3 ? "#205b89" : "black"} x={17 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F_SHARP, 3)} fill= {activeNote && activeNote[0] === NOTE_ID.F_SHARP && activeNote[1] === 3 ? "#205b89" : "black"} x={19 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G_SHARP, 3)} fill= {activeNote && activeNote[0] === NOTE_ID.G_SHARP && activeNote[1] === 3 ? "#205b89" : "black"} x={20 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A_SHARP, 3)} fill= {activeNote && activeNote[0] === NOTE_ID.A_SHARP && activeNote[1] === 3 ? "#205b89" : "black"} x={21 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            
            <Rect onPress={() => handleKeyPress(NOTE_ID.C_SHARP, 4)} fill= {activeNote && activeNote[0] === NOTE_ID.C_SHARP && activeNote[1] === 4 ? "#205b89" : "black"} x={23 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D_SHARP, 4)} fill= {activeNote && activeNote[0] === NOTE_ID.D_SHARP && activeNote[1] === 4 ? "#205b89" : "black"} x={24 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F_SHARP, 4)} fill= {activeNote && activeNote[0] === NOTE_ID.F_SHARP && activeNote[1] === 4 ? "#205b89" : "black"} x={26 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G_SHARP, 4)} fill= {activeNote && activeNote[0] === NOTE_ID.G_SHARP && activeNote[1] === 4 ? "#205b89" : "black"} x={27 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A_SHARP, 4)} fill= {activeNote && activeNote[0] === NOTE_ID.A_SHARP && activeNote[1] === 4 ? "#205b89" : "black"} x={28 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            
            <Rect onPress={() => handleKeyPress(NOTE_ID.C_SHARP, 5)} fill= {activeNote && activeNote[0] === NOTE_ID.C_SHARP && activeNote[1] === 5 ? "#205b89" : "black"} x={30 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D_SHARP, 5)} fill= {activeNote && activeNote[0] === NOTE_ID.D_SHARP && activeNote[1] === 5 ? "#205b89" : "black"} x={31 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F_SHARP, 5)} fill= {activeNote && activeNote[0] === NOTE_ID.F_SHARP && activeNote[1] === 5 ? "#205b89" : "black"} x={33 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G_SHARP, 5)} fill= {activeNote && activeNote[0] === NOTE_ID.G_SHARP && activeNote[1] === 5 ? "#205b89" : "black"} x={34 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A_SHARP, 5)} fill= {activeNote && activeNote[0] === NOTE_ID.A_SHARP && activeNote[1] === 5 ? "#205b89" : "black"} x={35 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            
            <Rect onPress={() => handleKeyPress(NOTE_ID.C_SHARP, 6)} fill= {activeNote && activeNote[0] === NOTE_ID.C_SHARP && activeNote[1] === 6 ? "#205b89" : "black"} x={37 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D_SHARP, 6)} fill= {activeNote && activeNote[0] === NOTE_ID.D_SHARP && activeNote[1] === 6 ? "#205b89" : "black"} x={38 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F_SHARP, 6)} fill= {activeNote && activeNote[0] === NOTE_ID.F_SHARP && activeNote[1] === 6 ? "#205b89" : "black"} x={40 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G_SHARP, 6)} fill= {activeNote && activeNote[0] === NOTE_ID.G_SHARP && activeNote[1] === 6 ? "#205b89" : "black"} x={41 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A_SHARP, 6)} fill= {activeNote && activeNote[0] === NOTE_ID.A_SHARP && activeNote[1] === 6 ? "#205b89" : "black"} x={42 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            
            <Rect onPress={() => handleKeyPress(NOTE_ID.C_SHARP, 7)} fill= {activeNote && activeNote[0] === NOTE_ID.C_SHARP && activeNote[1] === 7 ? "#205b89" : "black"} x={44 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.D_SHARP, 7)} fill= {activeNote && activeNote[0] === NOTE_ID.D_SHARP && activeNote[1] === 7 ? "#205b89" : "black"} x={45 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.F_SHARP, 7)} fill= {activeNote && activeNote[0] === NOTE_ID.F_SHARP && activeNote[1] === 7 ? "#205b89" : "black"} x={47 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.G_SHARP, 7)} fill= {activeNote && activeNote[0] === NOTE_ID.G_SHARP && activeNote[1] === 7 ? "#205b89" : "black"} x={48 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
            <Rect onPress={() => handleKeyPress(NOTE_ID.A_SHARP, 7)} fill= {activeNote && activeNote[0] === NOTE_ID.A_SHARP && activeNote[1] === 7 ? "#205b89" : "black"} x={49 * whiteTouchWidth + whiteTouchWidth - blackTouchWidth / 2} y={0} width={blackTouchWidth} height={blackTouchHeight} />
          </Svg>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#ddd"
  },
  icon: {
    fontSize: 28,
    color: "#333",
    marginHorizontal: 10
  }
});