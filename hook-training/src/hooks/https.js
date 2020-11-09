import {useReducer, useCallback} from "react"

const httpReducer = (currHttpState, action) => {
    switch(action.type) {
      case "SEND":
        return {loading: true, error: null, data:null};
      case "RESPONSE":
        return {...currHttpState, loading: false, data: action.responseData}
      case "ERROR":
        return {loading: false, error: action.errorMessage}
      case "CLEAR":
        return {...currHttpState, error: null}
      default: 
        throw new Error("Should not be reached!")
    }
  }

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null, data:null});

    //pour ne pas lancer la req tt le temps, uniquement quand la fonction est call
    const sendRequest = useCallback((url, method, body) => {
        fetch(url, 
        {method: method,
        body: body,
    headers: {
        "Content-Type": "application/json"
    }}
         ).then(response => {
          return response.json()
        }
         ).then(responseData => {
            dispatchHttp({type: "RESPONSE", responseData: responseData})
         }
         ).catch(error => {
          dispatchHttp({type: "ERROR", errorMessage: error.message});
           //setError("Something went wrong");
           //setIsLoading(false);
         })
    }, [])

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
    }
};

export default useHttp;