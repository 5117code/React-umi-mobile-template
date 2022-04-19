import React from 'react';
import { Button } from 'antd-mobile';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button
        onClick={() => {
          alert('hello.');
        }}
      >
        Default
      </Button>
      <Button color="primary">Primary</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
    </div>
  );
};
