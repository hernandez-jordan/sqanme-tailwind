import { useState, useEffect } from 'react';

const useHover = () => {
  const [value, setValue] = useState(false);
  const [node, setRef] = useState(null)


  //const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      //const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [setRef, node] // Recall only if ref changes
  );

  return [setRef, value];
}

export default useHover;