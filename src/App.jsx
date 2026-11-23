import { useState, useEffect } from 'react';
import Index from './Index.jsx';
import Content from './Content.jsx'

function App() {

  
  const [pageNum, setPageNum] = useState(1);

  return (
    <>
      { pageNum === 1 && <Index setPageNum={setPageNum} /> }
      { pageNum === 2 && <Content setPageNum={setPageNum} /> }
    </>
  )
}

export default App
