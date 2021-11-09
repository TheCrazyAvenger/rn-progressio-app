import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {FIREBASE_API_KEY, BASE_URL} from '@env';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    importProjects: builder.mutation({
      query: email => ({
        url: `/${email!.split('.')[0]}.json`,
        method: 'GET',
      }),
    }),
    exportProjects: builder.mutation({
      query: data => {
        const {userEmail, projects} = data;
        return {
          url: `/${userEmail.split('.')[0]}.json`,
          method: 'PUT',
          body: projects,
        };
      },
    }),
    auth: builder.mutation({
      query: data => {
        const {email, password, isLogin} = data;

        const authData = {
          email,
          password,
          returnSecureToken: true,
        };

        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
        if (isLogin) {
          url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
        }

        return {
          url,
          method: 'POST',
          body: authData,
        };
      },
    }),
  }),
});

export const {
  useImportProjectsMutation,
  useExportProjectsMutation,
  useAuthMutation,
} = authApi;
