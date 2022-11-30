import { useEffect, useRef } from 'react';

const useArrayMemo = <T, >(array: Array<T>) => {

  const storedArray = useRef(array);

  const isSameArray =
    storedArray.current && array.length === storedArray.current.length
      ? array.every((element, i) => {
        return element === storedArray.current[i];
      })
    : false; 


  useEffect(() => {

    if (!isSameArray) {
      console.log('Array changed')
      storedArray.current = array;
    }

  }, [isSameArray, array]);


  return isSameArray ? storedArray.current : array;
}

export default useArrayMemo;