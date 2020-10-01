import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import useId from '../../../customHooks/useId';
import thunkLoadData from '../../../redux/action.ts';
import ListData from '../ListData.tsx';

const ListDataContainer = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  // Загрузка данных в стор при внедрении этого компонента

  useEffect(() => {
    if (data.length === 0) {
      dispatch(thunkLoadData());
    }
  }, [dispatch]);

  return <ListData data={data} genId={useId} />;
};

export default ListDataContainer;
