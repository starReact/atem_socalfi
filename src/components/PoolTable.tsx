import { connect } from 'react-redux';
import React from 'react'
import Record from './Record';

function PoolTable(props: any) {
    const { state } = props;
    return (
        <div style={{width: '100%'}}>
            <h2>About you</h2>
            <ul className='record'>
                { state.aboutYou.map((i: {item: string, value: number}) => <Record key={i.item} {...i} />) }
            </ul>
            <h2>Income</h2>
            <ul className='record'>
                { state.income.map((i: {item: string, value: number}) => <Record key={i.item} {...i} />) }
            </ul>
            <h2>Outgoings</h2>
            <ul className='record'>
                { state.loan.map((i: {item: string, value: number}) => <Record key={i.item} {...i} />) }
            </ul>
        </div>
    )
}

export default connect((store: any) => ({
    state: store
}))(PoolTable);
