import { useQuery ,useMutation,useQueryClient} from "@tanstack/react-query";
import axios from "axios";

 const fetchData = () => {
    return axios.get("http://localhost:3000/students");
};

const AddStud = (addStud) => {
  return axios.post("http://localhost:3000/students", addStud);
}
  
export const ReactQueryCoustomHook = (onSuccess, onError) => {
    return useQuery( ["stud"],fetchData,
    {
      cacheTime:2000,
      staleTime: 3000,
      refetchOnMount: false,
      refetchInterval: 600000,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground:false,
      onSuccess,
      onError,
      // select: (data) => {
      //   const userName = data.data.map((stud) => stud.name)
      //   return userName;
      // }
    }
  );
}
export const useAddStud = () => {
  const queryClint=useQueryClient()
  return useMutation(AddStud, {
    onSuccess: () => {
      // queryClint.invalidateQueries('students'),
      // below query is handiling Mutation
        queryClint.setQueryData('student', (oldQueryData) => {
          return {
            ...oldQueryData,
            data:[...oldQueryData,data.data],
          }
        })

    }
  })
}