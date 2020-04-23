//drum bank audio imports and pad properties
/*********************************
 * bankA Sounds
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

export const bankA=[
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