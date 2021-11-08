import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rn-progressio-ccdee-default-rtdb.firebaseio.com/',
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

        let url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnJXnI7jzSpr3JbfQlbl00j7q1sS58EH4';
        if (isLogin) {
          url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnJXnI7jzSpr3JbfQlbl00j7q1sS58EH4';
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
