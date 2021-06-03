import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import { Row, Col } from 'antd';
import zhihuSvg from './svg/zhihu.svg';
import weiboSvg from './svg/weibo.svg';
import v2exSvg from './svg/v2ex.svg';
import './index.css'

ReactDOM.render(
  <React.Fragment>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ opacity: 0.85, margin: '2rem' }}>
      <Col className="gutter-row" span={8}>
        <List title="知乎热榜" url='https://tenapi.cn/zhihuresou/' dataPath="query" svg={zhihuSvg} backgroundColor='#7ec1ff' />
      </Col>
      <Col className="gutter-row" span={8}>
        <List title="微博热榜" url='https://tenapi.cn/resou/' dataPath="name" svg={weiboSvg} backgroundColor='#c16789'/>
      </Col>
      <Col className="gutter-row" span={8}>
        <List title="V2EX热榜" url='https://www.v2ex.com/api/topics/hot.json' dataPath="query" svg={v2exSvg} backgroundColor='#4a5258' /> 
      </Col>
    </Row>
  </React.Fragment>,
  document.getElementById('root')
);
