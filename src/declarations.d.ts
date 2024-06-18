declare module 'react-infinite-logo-slider' {
    import * as React from 'react';

    export interface SliderProps {
        className?: string;
        duration?: number;
        pauseOnHover?: boolean;
        reverse?: boolean;
        unit?: string;
        children: React.ReactNode;
    }

    export default class Slider extends React.Component<SliderProps> {
        static Slide: React.FC<{ className?: string; key: React.Key }>;
    }
}
