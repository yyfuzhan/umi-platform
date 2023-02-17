import request from '@/utils/request';

export const getAccessData = (params: any) => {
  return request.get('https://jsonplaceholder.typicode.com/posts/1', {
    params,
  });
};
