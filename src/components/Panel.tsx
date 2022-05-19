import { Button, Input, Slider } from 'antd'
import React, { Dispatch, useState } from 'react'
import { connect } from 'react-redux';
import PanelLayout from './PanelLayout';

interface IProps {
    panel: any,
    dispatch: Dispatch<any>
}

function Panel({panel, dispatch}: IProps) {
    const [mortgage, setMortgage] = useState(35);
  return (
      <>
        <PanelLayout>
            <>
            <h3>Remember, the max we can lend you over 35 years is: </h3>
            <Button></Button>
            <ul className='record'>
                {Object.keys(panel).map((item: any, index) => {
                    if(index < 2) {
                        return <li>
                            <span>{item}</span>
                            <Input style={{width: 200}} value={panel[item] * mortgage /100 } />
                        </li>
                    }
                    return <li><span>{item}</span><b>{panel[item] * mortgage /100}</b></li>
                })}
            </ul>
            </>
        </PanelLayout>
        <PanelLayout>
            <>
                <h3>Adjust your mortgage term:</h3>
                <br/>
                <Slider onChange={(value) => {
                    setMortgage(value);
                }} tooltipVisible={true} tipFormatter={(value) => <span>{value + 'year'}</span>} value={mortgage} step={5} min={5} max={35} />
            </>
        </PanelLayout>
    </>
  )
}

export default connect((store: any) => ({
    panel: store.panel
}))(Panel)
