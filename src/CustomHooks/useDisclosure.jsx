import { useState } from "react";

const useDisclosure = () => {
  const [isopen, setopen] = useState(false);

  const Onopen = () => {
    setopen(true);
  }
                                
  const Onclose = () => {
    setopen(false);
  }

  return {Onopen,Onclose,isopen};
};

export default useDisclosure;
