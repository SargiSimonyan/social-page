import React, { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import { Anchor, Col, Row } from 'antd';
const style = {
  height: '30vh',
  backgroundColor: 'rgba(5,41,99,255)',
  position: 'fixed',
  top: 0,
  insetInlineStart: 0,
  width: '90%',
  color: '#fff',
};

export default function OpeningPage () {
  const navigate = useNavigate();

  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  useEffect(() => {
    var _a;
    setTargetOffset((_a = topRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight);
  }, []);
  return (
    <div style={{width: "120%", }}>
      <Row>
        <Col span={18}>
          <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)', marginTop: '30vh' }}>
            Home
          </div>
          <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }}>
            Product
          </div>
          <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }}>
            About us
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              { key: 'part-1', href: '#part-1', title: 'Home' },
              { key: 'part-2', href: '#part-2', title: 'Product' },
              { key: 'part-3', href: '#part-3', title: 'About us' },
            ]}
          />
        </Col>
      </Row>
      <div style={style} ref={topRef}>
        <div>
          <h2>Social page</h2>
          <button style={{}} onClick={()=>{
            navigate('/login')
          }}>Log in</button>
        </div>
      </div>
    </div>
  );

}