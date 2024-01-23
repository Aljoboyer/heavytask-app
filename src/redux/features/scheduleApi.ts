import { api } from "../api/api";

const userApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
 
    // getIndividualTeam: builder.query({
    //   query: (id) => `/user/v1/individual-team-data?id=${id}`,
    //   providesTags: ['getTeams'],
    // }),

  }),
});

export const {
  // useGetIndividualTeamQuery,
} = userApi;