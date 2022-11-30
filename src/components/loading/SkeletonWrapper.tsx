import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { ApplicationContext } from '../../context/ApplicationContext';

interface Props {
  className?: string;
  count    ?: number;
}

const SkeletonWrapper = ({ className, count }: Props) => {

  const { appState } = useContext(ApplicationContext);

  return (
    <Skeleton 
      count={count}
      className={ className }
      baseColor={ appState.isDarkMode ? '#147ba6' : '#0abf86' }
      highlightColor={ appState.isDarkMode ? '#31b7df' : '#6aebba' }
    />
  )
}

export default SkeletonWrapper