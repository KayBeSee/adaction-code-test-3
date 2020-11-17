import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Adjustments } from '@styled-icons/heroicons-outline';

import { Button } from '.';

import { white, blue600 } from '../utils/colors'

interface Props {
  setAdjustRangeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ setAdjustRangeModalOpen }: Props) => {

  return (
    <PageHeader>
      <HeaderContent>
        <HeaderText><LightWeight>Real</LightWeight>FizzBuzz</HeaderText>
      </HeaderContent>
      <Buttons>
        <Button
          backgroundColor={blue600}
          textColor={white}
          onClick={() => setAdjustRangeModalOpen(true)}>
          <Fragment>
            <AdjustIcon />
            <ButtonText>Adjust Range</ButtonText>
          </Fragment>
        </Button>
      </Buttons>
    </PageHeader>
  )
}

const AdjustIcon = styled(Adjustments)`
  width: 1.5em;
  margin-right: 0.5em;
  margin-left: -0.75em;
`;

const LightWeight = styled.span`
  font-weight: 100;
`;

const ButtonText = styled.span`
  margin-top: 0.15em;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2em auto;
  color: ${white};
`;

const HeaderText = styled.h2`
  line-height: 2.25rem;
  font-size: 1.875rem;
  margin: 0;
`;

const Buttons = styled.div`
  display: flex;
  margin-left: 3rem;
`;