import { useMediaQuery } from 'react-responsive';

export function MediaBasicScreen({ children }) {
  const isBasicScreen = useMediaQuery({ query: '(min-width:900px)' });
  return <>{isBasicScreen && children}</>;
}
export function MediaSmallScreen({ children }) {
  const isSmallScreen = useMediaQuery({ query: '(max-width:900px)' });
  return <>{isSmallScreen && children}</>;
}
