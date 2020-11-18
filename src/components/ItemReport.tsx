import React, { Fragment } from 'react';
import styled from 'styled-components';

import { getFizzBuzzTotals } from '../utils/fizzBuzz';
import { white, gray400, gray600, gray900 } from '../utils/colors';

import { FizzBuzzReturnValue } from '../types';

export const ItemReport = ({ items }: { items: number[] }) => {
  const reportResults = getFizzBuzzTotals(items);

  return (
    <Fragment>
      <ReportHeader>FizzBuzz Totals</ReportHeader>
      <ItemsContainer>
        {(Object.keys(reportResults) as FizzBuzzReturnValue[]).map((item, index) => (
          <ReportItem key={index} role="report-item">
            <ReportItemValue>
              {reportResults[item]}
            </ReportItemValue>
            <ReportItemKey>
              {item}
            </ReportItemKey>
          </ReportItem>
        ))}
      </ItemsContainer>
    </Fragment>
  )
}

const ReportHeader = styled.div`
  margin-top: 2em;
  font-size: 1.25em;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: ${white};
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  border-radius: 0.375em;
  border: 1px solid ${gray400};
  padding: 2em;
  margin-top: 1em;
`;

const ReportItem = styled.div`
  flex: 1;
  margin: 0.5em 0;
`;

const ReportItemKey = styled.span`
  color: ${gray600};
`;

const ReportItemValue = styled.span`
  color: ${gray900};
  font-weight: 900;
  margin-right: 1em;
`;