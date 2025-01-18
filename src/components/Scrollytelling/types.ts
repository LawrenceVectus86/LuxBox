export interface ScrollStep {
  image: string;
  title: string;
  description: string;
}

export interface ProgressIndicatorProps {
  currentIndex: number;
  imageIndex: any; // MotionValue<number>
  stepsLength: number;
}