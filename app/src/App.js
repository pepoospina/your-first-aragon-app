import React from "react";
import { useAragonApi } from "@aragon/api-react";
import {
  Header,
  Main,
  SyncIndicator,
} from "@aragon/ui";

import Wiki from './Wiki';
import { initUprtcl } from './initUprtcl';

async function App() {
  const { appState } = useAragonApi();
  const { isSyncing } = appState;

  await initUprtcl();
  
  return (
    <Main>
      {isSyncing && <SyncIndicator />}
      <Header primary="Wiki"/>
      <Wiki/>
    </Main>
  );
}

export default App;
