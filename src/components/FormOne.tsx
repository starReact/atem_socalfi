import { Form, Input, InputNumber } from 'antd';
import { connect } from 'react-redux'
import React, { useImperativeHandle } from 'react'
import { setLoanAction } from '../store/action';

function FormOne(props: any) {
    const { loan, dispatch,  } = props;
    const ref = props.refInstance;
    const [form] = Form.useForm();
    useImperativeHandle(ref, () => ({
        submit: async () => {
            try {
                form
                .validateFields()
                .then( values => {
                    console.log(values);
                    dispatch(setLoanAction(values));
                })
                .catch(errorInfo => {
                    return false
                })
              } catch (errorInfo) {
                console.log('Failed:', errorInfo);
              }
        },
    }))

    const finish = (value: any) => {
        console.log(value);
    }
    
    return (
        <>
            <h2>Will you have any regular monthly payments after you take out your mortgage?</h2><br />
            <Form form={form} layout="vertical" onFinish={finish}>
                {loan.map((item:{item: string, value: number}, index: number) =>         
                    <Form.Item name={item.item} key={index} label={item.item} initialValue={item.value}>
                        <InputNumber
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
    loan: store.loan,
}))(FormOne);

export default React.forwardRef((props, ref) => <Component {...props} refInstance={ref} />)
