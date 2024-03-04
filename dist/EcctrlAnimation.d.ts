/// <reference types="react" />
import { type AnimationSet } from "./stores/useGame";
export declare function EcctrlAnimation(props: EcctrlAnimationProps): import("react/jsx-runtime").JSX.Element;
export type EcctrlAnimationProps = {
    characterURL: string;
    animationSet: AnimationSet;
    children: React.ReactNode;
};