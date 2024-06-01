import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ isopen, Onclose , children}) => {
  return createPortal(
    <>            
      {isopen && (
        <>
          <Box>
            <div className="cut_icon_container">
              <AiOutlineClose className="cut_icon" onClick={Onclose} />
            </div>
            {children}
          </Box>
          <Box1 onClick={Onclose}></Box1>
        </>
      )}
    </>,document.getElementById('modal-root')
  );
};

export default Modal;

const Box = styled.div`
  position: relative;
  z-index: 50;
  margin: auto;
  padding: 8px;
  min-height: 210px;
  max-width: 355px;
  border-radius: 5px;
  background-color: white;

  .cut_icon_container {
    display: flex;
    justify-content: end;
  }
  .cut_icon {
    width: 20px;
    height: 20px;
  }
`;

const Box1 = styled.div`
  position: absolute;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(8px);
  height: 100vh;
  width: 100vw;
`