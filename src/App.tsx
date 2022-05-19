import React, { useState } from 'react';
import { Button, Progress } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Formgroup from './components/Formgroup';
import store from './store';
import { Provider } from 'react-redux';

export enum Schedule {
  Learn = 1,
  FormOne,
  FormTwo,
  PoolTable,
  Panel
}

function App() {
  const [percent, setPercent] = useState<number>(1);
  return (
    <Provider store={store}>
        <div className="App">
        <header className="App-header">
          <div className='header_left' onClick={() => setPercent(percent - 1)}>
            <svg style={{width: 30, height: 30 }} xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" stroke="#995595"
              fill="transparent">
                <g>
                  <path d="M12 19.5L5 12.5L12 5.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  </path>
                  <path d="M19 12.5H5" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                </g>
              </svg>
          </div>
          <div className='header_center'>How much can I borrow?</div>
          <div className='header_right' onClick={() => setPercent(1)} title="home">
            <svg style={{width: 30, height: 30 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="#995595" fill="#ffffff"><g><path d="M18 6L6 18" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 6L18 18" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
          </div>
        </header>
        <div style={{marginTop: 55, height: "100%",boxSizing: 'border-box', display: "flex", padding: 30, flexDirection: 'column', textAlign: 'center'}}>
          <div style={{maxWidth: 1200, width: '100%', margin: '0 auto'}}>
            <Progress
              strokeColor={{
                '0%': 'rgb(81, 45, 109)',
                '100%': 'rgb(224, 8, 133)',
              }}
              percent={percent * 20}
              strokeWidth={12}
              showInfo={false} />
          </div>
          <Formgroup setPercent={setPercent} percent={percent} />
        </div>
      </div>
    </Provider>
  );
}

export default App;