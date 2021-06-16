import { useEffect, useReducer, useState } from "react";

type ReducerState = {
  isLoading: boolean;
  after: number;
};

function reducer(state, action): ReducerState {
  switch (action.type) {
    case "start":
      return {
        ...state,
        isLoading: true,
      };
    case "loaded":
      return {
        ...state,
        isLoading: false,
        after: state.after + 20,
      };
    default:
      throw new Error("This is so sad :(");
  }
}

export function useOnScreenCategory(options, fetchMore) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);
  // const [counter, setCounter] = useState(1);
  const [more, setMore] = useState(true);

  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    after: 0,
  });

  const { isLoading, after } = state;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  useEffect(() => {
    if (visible) {
      dispatch({ type: "start" });

      setTimeout(async () => {
        await fetchMore({
          variables: {
            offset: after + 20,
          },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            if (fetchMoreResult.clientCategoryDetail.product.length === 0) {
              setMore(false);
            }

            fetchMoreResult.clientCategoryDetail.product = [
              ...prevResult.clientCategoryDetail.product,
              ...fetchMoreResult.clientCategoryDetail.product,
            ];

            return fetchMoreResult;
          },
        });

        dispatch({
          type: "loaded",
        });
      }, 1000);
    }
  }, [visible]);

  return [setRef, more, isLoading];
}
