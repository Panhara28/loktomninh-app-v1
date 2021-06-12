import { useEffect, useState, useReducer } from "react";

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
        after: state.after + 1,
      };
    default:
      throw new Error("This is so sad :(");
  }
}

export function useOnScreen(options, fetchMore) {
  const [ref, setRef] = useState<any>(null);
  const [visible, setVisible] = useState(false);
  // const [counter, setCounter] = useState(1);
  const [more, setMore] = useState(true);

  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    after: 1,
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
            offset: after + 1,
          },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            if (fetchMoreResult.clientProductList.length === 0) {
              setMore(false);
            }

            fetchMoreResult.clientProductList = [
              ...prevResult.clientProductList,
              ...fetchMoreResult.clientProductList,
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
