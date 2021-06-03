import React, { useEffect, useState } from 'react';
import { List, Card } from 'antd';
import request from '../../fetdata';

const NewsList = ({ title, url, dataPath, svg, backgroundColor }) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    request({
      url,
      params: {},
      method: 'get' 
    }).then((response) => {
      setData(response);
    }).catch((error) => {
      console.log(error.message);
    }).finally(() => {
      setLoading(false);
    });
  }, [url])

  return (
    <Card 
      headStyle={{ background: backgroundColor }}
      title={
        <div style={{ display: 'flex' }}>
          <img src={svg} style={{ width: '3rem', height: '3rem' }} alt="" />
          <h2 style={{ marginLeft: '5px', marginTop: '5px' }}>{title}</h2>
        </div>
      }  
    >
      <List
        loading={loading}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            {
              index < 3
              ? <a href={item.url}><span style={{ color: '#f1403c' }}>[{index + 1}]</span> {item[dataPath]}</a>
              : <a href={item.url}><span style={{ color: '#c2a469' }}>[{index + 1}]</span> {item[dataPath]}</a>
            }
          </List.Item>
        )}
      />
    </Card>
  );
}

export default NewsList;
