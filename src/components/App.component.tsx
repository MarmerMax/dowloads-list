import React, {useEffect} from 'react';
import Button from "@material-ui/core/Button";
import {useDownloadsStore} from "../stores/useStores.hooks";


function App() {

  const { items, fetchDownloads} = useDownloadsStore();

  useEffect(() => {
    fetchDownloads();
  }, [fetchDownloads]);
  return (



        <Button variant="contained" color="primary" onClick={console.log}>
          Primary
        </Button>
  )
}

export default App;
