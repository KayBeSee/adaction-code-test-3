import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ReactModal from 'react-modal'
import { CloseOutline } from '@styled-icons/evaicons-outline';

import { mobile } from '../utils/media';
import { white, gray100, gray600, gray700 } from '../utils/colors';

interface Props {
  isOpen: boolean,
  onRequestClose(): void,
  children: React.ReactChild,
  icon?: React.ReactChild,
}

export const Modal = ({
  isOpen,
  onRequestClose,
  children,
  icon
}: Props) => {
  const [localOpen, setLocalOpen] = useState(false);

  const afterOpen = () => {
    setLocalOpen(true);
  }

  const requestClose = () => {
    setLocalOpen(false);
    setTimeout(() => { onRequestClose() }, 100) // wait for transition to complete
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={afterOpen}
      onRequestClose={requestClose}
      style={getStyles(localOpen)}
      contentLabel="Example Modal"
    >
      <Container>
        <ModalImage>
          {icon}
        </ModalImage>
        <ModalRightContent>
          <CloseButtonContainer onClick={() => requestClose()}>
            <CloseIcon />
          </CloseButtonContainer>
          {children}
        </ModalRightContent>
      </Container>
    </ReactModal>
  )
}

const getStyles = (localOpen: boolean) => {
  return {
    content: {
      background: white,
      opacity: 1,
      boxShadow: '0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)',
      borderRadius: '.5rem',
      border: 'none',
      maxWidth: '50em',
      position: 'relative',
      width: '100%',
      transform: localOpen ? 'scale(1)' : 'scale(0.9)',
      transition: 'transform 0.25s',
      padding: 0,
      minHeight: '12em',
      display: 'flex',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    overlay: {
      background: localOpen ? 'rgba(31, 31, 31, 0.65)' : 'rgba(31, 31, 31, 0)',
      transition: 'background 0.25s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }
  } as ReactModal.Styles;
}

const Container = styled.div`
  display: flex;
  flex: 1;

  ${mobile(css`
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 2em;
    padding-bottom: 0em;
  `)}
`;

const ModalImage = styled.div`
  padding: 2em;

  ${mobile(css`
  padding: 0em;
  `)}
`;

const ModalRightContent = styled.div`
  flex: 1;
  width: 100%;
`;

const CloseButtonContainer = styled.button`
  position: absolute;
  top: .5em;
  right: .5em;
  padding: 1em;
  color: ${gray700};
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px !important;
  cursor: pointer;

  &:hover {
    color: ${gray600};
    background: ${gray100};
  }

  ${mobile(css`
    display: none;
  `)}
`;

const CloseIcon = styled(CloseOutline)`
  width: 1.5rem;
`;