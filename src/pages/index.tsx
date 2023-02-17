import React, { useEffect } from 'react';
import { useDispatch } from 'umi';
import { useModelSelector } from '@/utils/hooks';
import styles from './index.less';
// import { connect } from 'dva';

export default function Access() {
  const dispatch = useDispatch();
  const { accessData } = useModelSelector('access');
  useEffect(() => {
    dispatch({
      type: 'access/getAccessData',
      payload: { id: 12 },
    });
  }, []);

  return (
    <div>
      <div className={styles.title}>{accessData}</div>
    </div>
  );
}
