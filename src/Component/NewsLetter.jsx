import React, { useState } from 'react'
import { Col } from 'react-bootstrap';

const NewsLetter = () => {
    const [email,setEmail]=useState('');
    const handleSubmit=(e)=>{
        e.preventDEfault()
    }
  return (
    <Col lg={12}>
        <div className='newsletter-bx'>
            <Col lg={12} xl={5}>
                <h3>Subscribe to our NewsLetter</h3>
            </Col>
            <Col md={6} xl={7}>
                <form action="">
                    <div className='new-email-bx'>
                        <input type="email" placeholder='Enter Email Address'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <button type='submit'>Submit</button>

                    </div>
                </form>
            </Col>
        </div>
    </Col>
  )
}

export default NewsLetter