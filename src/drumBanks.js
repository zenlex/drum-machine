//drum bank audio imports and pad properties
/*********************************
 * SteelDrum Sounds
 ********************************/
import SteelD_Q from './assets/audio/SteelD_Q.mp3'
import BD from './assets/audio/BD.mp3'
import Snare from './assets/audio/Snare.mp3'
import SteelD_A from './assets/audio/SteelD_A.mp3'
import SteelD_S from './assets/audio/SteelD_S.mp3'
import SteelD_D from './assets/audio/SteelD_D.mp3'
import SteelD_Z from './assets/audio/SteelD_Z.mp3'
import SteelD_X from './assets/audio/SteelD_X.mp3'
import SteelD_C from './assets/audio/SteelD_C.mp3'
/*********************************
 * DubStep Kit Sounds
 ********************************/
import dsQ from './assets/audio/DS-Q-HiTom.mp3'
import dsW from './assets/audio/DS-W-MidTom.mp3'
import dsE from './assets/audio/DS-E-LowTom.mp3'
import dsA from './assets/audio/DS-A-ClosedHat.mp3'
import dsS from './assets/audio/DS-S-OpenHat.mp3'
import dsD from './assets/audio/DS-D-CymLow.mp3'
import dsZ from './assets/audio/DS-Z-Kick1.mp3'
import dsX from './assets/audio/DS-X-Kick2.mp3'
import dsC from './assets/audio/DS-C-Snare.mp3'
/*********************************
 * Swedish Chef Sounds
 ********************************/
import scOne from './assets/audio/SC-1.mp3'
import scTwo from './assets/audio/SC-2.mp3'
import scThree from './assets/audio/SC-3.mp3'
import scFour from './assets/audio/SC-4.mp3'
import scFive from './assets/audio/SC-5.mp3'
import scSix from './assets/audio/SC-6.mp3'
import scSeven from './assets/audio/SC-7.mp3'
import scEight from './assets/audio/SC-8.mp3'
import scNine from './assets/audio/SC-9.mp3'


export const SteelDrum = [
  {
    hotkey: 'Q',
    keyCode: 81,
    audioSrc: SteelD_Q,
    id: 'Steel Drum D5'
  },
  {
    hotkey: 'W',
    keyCode: 87,
    audioSrc: BD,
    id: 'Kick'
  },
  {
    hotkey: 'E',
    keyCode: 69,
    audioSrc: Snare,
    id: 'Snare'
  },
  {
    hotkey: 'A',
    keyCode: 65,
    audioSrc: SteelD_A,
    id: 'Steel Drum D4'
  },
  {
    hotkey: 'S',
    keyCode: 83,
    audioSrc: SteelD_S,
    id: 'Steel Drum F#4'
  },
  {
    hotkey: 'D',
    keyCode: 68,
    audioSrc: SteelD_D,
    id: 'Steel Drum A4'
  },
  {
    hotkey: 'Z',
    keyCode: 90,
    audioSrc: SteelD_Z,
    id: 'Steel Drum D3'
  },
  {
    hotkey: 'X',
    keyCode: 88,
    audioSrc: SteelD_X,
    id: 'Steel Drum F#3'
  },
  {
    hotkey: 'C',
    keyCode: 67,
    audioSrc: SteelD_C,
    id: 'Steel Drum A3'
  },
]

export const dubStep = [
  {
    hotkey: 'Q',
    keyCode: 81,
    audioSrc: dsQ,
    id: 'Hi Tom'
  },
  {
    hotkey: 'W',
    keyCode: 87,
    audioSrc: dsW,
    id: 'Mid Tom'
  },
  {
    hotkey: 'E',
    keyCode: 69,
    audioSrc: dsE,
    id: 'Low Tom'
  },
  {
    hotkey: 'A',
    keyCode: 65,
    audioSrc: dsA,
    id: 'Closed Hat'
  },
  {
    hotkey: 'S',
    keyCode: 83,
    audioSrc: dsS,
    id: 'Open Hat'
  },
  {
    hotkey: 'D',
    keyCode: 68,
    audioSrc: dsD,
    id: 'Crash'
  },
  {
    hotkey: 'Z',
    keyCode: 90,
    audioSrc: dsZ,
    id: 'Kick 1'
  },
  {
    hotkey: 'X',
    keyCode: 88,
    audioSrc: dsX,
    id: 'Kick 2'
  },
  {
    hotkey: 'C',
    keyCode: 67,
    audioSrc: dsC,
    id: 'Snare'
  },
]

export const swedishChef = [
  {
    hotkey: 'Q',
    keyCode: 81,
    audioSrc: scOne,
    id: 'Shrimpees'
  },
  {
    hotkey: 'W',
    keyCode: 87,
    audioSrc: scTwo,
    id: 'Bursh'
  },
  {
    hotkey: 'E',
    keyCode: 69,
    audioSrc: scThree,
    id: 'Geif'
  },
  {
    hotkey: 'A',
    keyCode: 65,
    audioSrc: scFour,
    id: 'Gurndib'
  },
  {
    hotkey: 'S',
    keyCode: 83,
    audioSrc: scFive,
    id: 'Sigiv'
  },
  {
    hotkey: 'D',
    keyCode: 68,
    audioSrc: scSix,
    id: 'Versht'
  },
  {
    hotkey: 'Z',
    keyCode: 90,
    audioSrc: scSeven,
    id: 'Duurrndiv'
  },
  {
    hotkey: 'X',
    keyCode: 88,
    audioSrc: scEight,
    id: 'B\u00D8rdig'
  },
  {
    hotkey: 'C',
    keyCode: 67,
    audioSrc: scNine,
    id: 'G\u00D8\u00D8rt'
  },
]