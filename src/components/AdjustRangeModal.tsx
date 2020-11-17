import React from 'react'
import styled, { css } from 'styled-components';
import { Adjustments, Minus, Plus } from '@styled-icons/heroicons-outline';

import { Modal, Button } from '.'

import { mobile } from '../utils/media';
import { white, adActionLightBlue, blue100, blue600 } from '../utils/colors';

interface Props {
  maxItems: number
  setMaxItems: React.Dispatch<React.SetStateAction<number>>
  isOpen: boolean
  onRequestClose: () => void
}

export const AdjustRangeModal = ({ maxItems, setMaxItems, isOpen, onRequestClose }: Props) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      icon={<AdjustIcon />}
    >
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>
            Adjust FizzBuzz Range
        </ModalTitle>
        </ModalHeader>
        <SelectionContainer>
          <SelectionWrapper>
            <IncrementButton
              backgroundColor={adActionLightBlue}
              textColor={white}
              onClick={() => setMaxItems(maxItems - 1)}>
              <MinusIcon />
            </IncrementButton>
            <CurrentSelection>
              {maxItems}
            </CurrentSelection>
            <IncrementButton
              backgroundColor={adActionLightBlue}
              textColor={white}
              onClick={() => setMaxItems(maxItems + 1)}>
              <PlusIcon />
            </IncrementButton>
          </SelectionWrapper>
        </SelectionContainer>
      </ModalContainer>
    </Modal >
  )
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: space-between;
`;

const ModalTitle = styled.h2`
  padding: 0.75em 0;
  width: 100%;
`;

const AdjustIcon = styled(Adjustments)`
  color: ${blue600};
  background: ${blue100};
  border-radius: 9999px;
  width: 3em;
`;

const PlusIcon = styled(Plus)`
  height: 1em;
  width: 1em;
`;

const MinusIcon = styled(Minus)`
  height: 1em;
  width: 1em;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

const SelectionWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 4em;
  align-items: center;
  justify-content: center;
`;

const CurrentSelection = styled.div`
  padding: 1em;
  font-size: 2.5em;

  ${mobile(css`
    margin-bottom: 0.5em;
  `)}
`;

const IncrementButton = styled(Button)`
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;