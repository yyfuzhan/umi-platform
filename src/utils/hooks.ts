import { useSelector } from 'umi';
import { get } from 'lodash';

/**
 * 获取 effect 请求 loading 状态
 * @param effect effect 路径, eg: 'resource/getResourceElementList'
 */
export const useModelLoading = (effect: string): boolean => {
  return useSelector(
    (state: { loading: { effects: { [effect: string]: boolean } } }) => {
      return state.loading.effects[effect];
    },
  );
};

/**
 * 获取 model 数据
 * @param path model 路径, eg: resource.resourceList
 */
export const useModelSelector = (path: string): any =>
  useSelector((state) => get(state, path));
