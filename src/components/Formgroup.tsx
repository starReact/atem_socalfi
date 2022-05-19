import { Button } from 'antd';
import React, { Children, Dispatch, ReactElement, useRef } from 'react';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import Panel from './Panel';
import PoolTable from './PoolTable';
import Learn from './Learn';
import { Schedule } from '../App';
import { connect } from 'react-redux';
import { setLoanAction } from '../store/action';

interface IFromgroup {
    setPercent: (n: number) => void,
    percent: number,
    dispatch: any
}

function Formgroup({setPercent, percent, dispatch}: IFromgroup) {
    const formRef = useRef<any>();
    return (
        <div className='form_warp'>
            <div className='form'>
                { percent === Schedule.Learn ? <Learn /> : null}
                { percent === Schedule.FormOne ? <FormOne ref={formRef} /> : null}
                { percent === Schedule.FormTwo ? <FormTwo ref={formRef} /> : null}
                { percent === Schedule.PoolTable? <PoolTable /> : null}
                { percent === Schedule.Panel ? <Panel />: null}
            </div>
            <div style={{textAlign: 'center'}}>
                <Button
                    style={{borderRadius: 6, backgroundColor: 'green', color: '#fff'}}
                    size="large" onClick={async() => {
                        const dd = percent + 1;
                        if(percent === 2 || percent ===3) {
                            const result = await formRef.current.submit();
                            if(result === false) return;
                        }
                        if(dd < 6) {
                            setPercent(dd);
                        }
                    }}>
                    { percent === Schedule.Learn ?
                        `How much can I borrow?`:
                        percent === Schedule.PoolTable ?
                        'Confirm and calculate' :
                        percent === Schedule.Panel ?
                        'Get my Approval in Principle': 
                        'Continue'
                    }
                </Button>
            </div>
        </div>
    )
}

export default connect()(Formgroup);
