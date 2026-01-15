import { atomWithStorage } from "jotai/utils";
// type bgAtomType = 'RootDefaultBg' | 'RootMontainBg' | 'RootVolcanoBg' | Root'WaterBg' | 'RootWinterBg'
export var bgAtom = atomWithStorage('bg', 'RootDefaultBg')
