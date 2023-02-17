import { getAccessData } from '../services/access';

export default {
  namespace: 'access',
  state: {
    accessData: null,
  },

  effects: {
    *getAccessData({ payload }, { call, put }) {
      const { body, id } = yield call(getAccessData, payload);
      if (id === 1) {
        console.log(1111);
        yield put({ type: 'save', payload: { accessData: body } });
      }
    },
  },

  reducers: {
    save: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
};
