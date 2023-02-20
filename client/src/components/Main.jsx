import React from 'react';
import { useGetUsersQuery } from 'state/api';

const Main = () => {
  const { data } = useGetUsersQuery();
  console.log('data', data);
  return (
    <div>Main</div>
  )
}

export default Main;