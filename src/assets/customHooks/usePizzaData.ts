import { useEffect } from "react"
import { PizzaFromApi } from "../ts/interfacePizza"
import { useDispatch } from "react-redux"
import { setPizzas, updatingStatus } from "../redux/slices/pizzasSlice"
import { useGetPizzasQuery } from "../redux/api/fetchPizzasAPI";

export const usePizzaData = (category: number | string, sortBy: string, order: string) => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetPizzasQuery({ category, sortBy, order });

  useEffect(() => {
    if (data) {
      dispatch(setPizzas(data));
      dispatch(updatingStatus('success'));
    } else if (isLoading) dispatch(updatingStatus('loading'));
    else dispatch(updatingStatus('error'));

    window.scrollTo(0, 0);
  }, [data, error, isLoading, dispatch]);
};
