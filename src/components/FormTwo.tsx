import { Form, Input, InputNumber } from 'antd'
import { connect } from 'react-redux';
import React, { useImperativeHandle } from 'react'
import { setIncomeAction } from '../store/action';

function FormTwo(props: any) {
    const { income, dispatch } = props;
    const [form] = Form.useForm();
    const ref = props.refInstance;
    useImperativeHandle(ref, () => ({
        submit: async () => {
            return form
            .validateFields()
            .then( values => {
                dispatch(setIncomeAction(values));
                return true;
            })
            .catch(errorInfo => {
                console.log(errorInfo);
                return false
            })
        },
    }))
    return (
        <>
            <h2>What type of employment income do you earn?</h2>
            <span>(annual amount before tax)</span>
            <br/>
            <Form form={form} layout="vertical">
            {income.map((item:{item: string, value: number}, index: number) =>
                index === 0 ? 
                <Form.Item rules={[
                    { required: true},
                    {validator: (_, value, callback) => {
                        if(value > 0) {
                            callback();
                        }
                        callback(`${item.item} must be greater than 0`)
                    }}
                ]} name={item.item} key={index} label={item.item} initialValue={item.value}>
                    <InputNumber
                        min={0}
                        max={10000000000}
                        placeholder='0'
                        style={{width: '100%'}}
                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    />
                </Form.Item>
                : <Form.Item name={item.item} key={index} label={item.item} initialValue={item.value}>
                    <InputNumber
                        min={0}
                        max={10000000000}
                        placeholder='0'
                        style={{width: '100%'}}
                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    />
                </Form.Item>
            )}
            </Form>
        </>
  )
}

const Component = connect((store: any) => ({
    income: store.income
}))(FormTwo);

export default React.forwardRef((props, ref) => <Component {...props} refInstance={ref} />)
