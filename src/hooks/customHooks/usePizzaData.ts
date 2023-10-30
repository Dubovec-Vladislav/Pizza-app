import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPizzas, updatingStatus } from "@pizzasSlice"
import { useGetPizzasQuery } from "@fetchPizzasAPI"

export const usePizzaData = (category: number | string, sortBy: string, order: string) => {
  const dispatch = useDispatch();
  const { data, error, isFetching } = useGetPizzasQuery({ category, sortBy, order });

  useEffect(() => {
    if (data) {
      dispatch(setPizzas(data));
      dispatch(updatingStatus('success'));
    } else if (isFetching) dispatch(updatingStatus('loading'));
    else dispatch(updatingStatus('error'));

    window.scrollTo(0, 0);
  }, [data, error, isFetching, dispatch]);

  return { data, error, isFetching };
};
