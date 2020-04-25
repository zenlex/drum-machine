//drum bank audio imports and pad properties
/*********************************
 * SteelDrum Sounds
 ********************************/
import SteelD_Q from './assets/audio/SteelD_Q.wav'
import BD from './assets/audio/BD.wav'
import Snare from './assets/audio/Snare.wav'
import SteelD_A from './assets/audio/SteelD_A.wav'
import SteelD_S from './assets/audio/SteelD_S.wav'
import SteelD_D from './assets/audio/SteelD_D.wav'
import SteelD_Z from './assets/audio/SteelD_Z.wav'
import SteelD_X from './assets/audio/SteelD_X.wav'
import SteelD_C from './assets/audio/SteelD_C.wav'
/*********************************
 * DubStep Kit Sounds
 ********************************/
import dsQ from './assets/audio/DS-Q-HiTom.wav'
import dsW from './assets/audio/DS-W-MidTom.wav'
import dsE from './assets/audio/DS-E-LowTom.wav'
import dsA from './assets/audio/DS-A-ClosedHat.wav'
import dsS from './assets/audio/DS-S-OpenHat.wav'
import dsD from './assets/audio/DS-D-CymLow.wav'
import dsZ from './assets/audio/DS-Z-Kick1.wav'
import dsX from './assets/audio/DS-X-Kick2.wav'
import dsC from './assets/audio/DS-C-Snare.wav'
/*********************************
 * Swedish Chef Sounds
 ********************************/
import scOne from './assets/audio/SC-1.wav'
import scTwo from './assets/audio/SC-2.wav'
import scThree from './assets/audio/SC-3.wav'
import scFour from './assets/audio/SC-4.wav'
import scFive from './assets/audio/SC-5.wav'
import scSix from './assets/audio/SC-6.wav'
import scSeven from './assets/audio/SC-7.wav'
import scEight from './assets/audio/SC-8.wav'
import scNine from './assets/audio/SC-9.wav'


export const SteelDrum=[
    {
        hotkey: 'Q',
        keyCode: 81,
        audioSrc: SteelD_Q,
        id:'Steel Drum D5'
    },
    {
        hotkey: 'W',
        keyCode: 87,
        audioSrc: BD,
        id:'Kick'
    },
    {
        hotkey: 'E',
        keyCode: 69,
        audioSrc: Snare,
        id:'Snare'
    },
    {
        hotkey: 'A',
        keyCode: 65,
        audioSrc: SteelD_A,
        id:'Steel Drum D4'
    },
    {
        hotkey: 'S',
        keyCode: 83,
        audioSrc: SteelD_S,
        id:'Steel Drum F#4'
    },
    {
        hotkey: 'D',
        keyCode: 68,
        audioSrc: SteelD_D,
        id:'Steel Drum A4'
    },
    {
        hotkey: 'Z',
        keyCode: 90,
        audioSrc: SteelD_Z,
        id:'Steel Drum D3'
    },
    {
        hotkey: 'X',
        keyCode: 88,
        audioSrc: SteelD_X,
        id:'Steel Drum F#3'
    },
    {
        hotkey: 'C',
        keyCode: 67,
        audioSrc: SteelD_C,
        id:'Steel Drum A3'
    },
]

export const dubStep=[
    {
        hotkey: 'Q',
        keyCode: 81,
        audioSrc: dsQ,
        id:'Hi Tom'
    },
    {
        hotkey: 'W',
        keyCode: 87,
        audioSrc: dsW,
        id:'Mid Tom'
    },
    {
        hotkey: 'E',
        keyCode: 69,
        audioSrc: dsE,
        id:'Low Tom'
    },
    {
        hotkey: 'A',
        keyCode: 65,
        audioSrc: dsA,
        id:'Closed Hat'
    },
    {
        hotkey: 'S',
        keyCode: 83,
        audioSrc: dsS,
        id:'Open Hat'
    },
    {
        hotkey: 'D',
        keyCode: 68,
        audioSrc: dsD,
        id:'Crash'
    },
    {
        hotkey: 'Z',
        keyCode: 90,
        audioSrc: dsZ,
        id:'Kick 1'
    },
    {
        hotkey: 'X',
        keyCode: 88,
        audioSrc: dsX,
        id:'Kick 2'
    },
    {
        hotkey: 'C',
        keyCode: 67,
        audioSrc: dsC,
        id:'Snare'
    },
]

export const swedishChef=[
    {
        hotkey: 'Q',
        keyCode: 81,
        audioSrc: scOne,
        id:'Shrimpees'
    },
    {
        hotkey: 'W',
        keyCode: 87,
        audioSrc: scTwo,
        id:'Bursh'
    },
    {
        hotkey: 'E',
        keyCode: 69,
        audioSrc: scThree,
        id:'Geif'
    },
    {
        hotkey: 'A',
        keyCode: 65,
        audioSrc: scFour,
        id:'Gurndib'
    },
    {
        hotkey: 'S',
        keyCode: 83,
        audioSrc: scFive,
        id:'Sigiv'
    },
    {
        hotkey: 'D',
        keyCode: 68,
        audioSrc: scSix,
        id:'Versht'
    },
    {
        hotkey: 'Z',
        keyCode: 90,
        audioSrc: scSeven,
        id:'Duurrndiv'
    },
    {
        hotkey: 'X',
        keyCode: 88,
        audioSrc: scEight,
        id:'B\u00D8rdig'
    },
    {
        hotkey: 'C',
        keyCode: 67,
        audioSrc: scNine,
        id:'G\u00D8\u00D8rt'
    },
]