import React, { useState } from 'react';
import styled from 'styled-components';

import { Header, ItemList, AdjustRangeModal, ItemReport } from './components';

import { blue900 } from './utils/colors';

const DEFAULT_MAX_ITEMS = 20;

function App() {
  const [maxItems, setMaxItems] = useState(DEFAULT_MAX_ITEMS);
  const [adjustRangeModalOpen, setAdjustRangeModalOpen] = useState(false);

  // create an array and fill it with values 1 - maxNumber
  const numbers = Array.from({ length: maxItems }, (x, i) => i + 1);

  return (
    <PageWrapper>
      <PageOverlay />
      <PageContainer>
        <Header setAdjustRangeModalOpen={setAdjustRangeModalOpen} />
        <ItemList items={numbers} />
        <ItemReport items={numbers} />
      </PageContainer>
      <AdjustRangeModal
        maxItems={maxItems}
        setMaxItems={setMaxItems}
        isOpen={adjustRangeModalOpen}
        onRequestClose={() => setAdjustRangeModalOpen(false)}
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  font-family: nimbus-sans, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const PageContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2em;
`;

const PageOverlay = styled.div`
  background: ${blue900};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 25vh;
  z-index: -1;
`;

export default App;
