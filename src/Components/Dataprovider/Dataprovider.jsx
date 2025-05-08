import React, { useReducer } from 'react'
import { createContext } from "react";
import { initialState, reducer } from '../../Utility/reducer';

export const DataContext=createContext();


function Dataprovider({children, reducer, intialState}) {
  return (
    <div>
      <DataContext.Provider value={useReducer(reducer, initialState)}>
        { children}
        </DataContext.Provider>  
    </div>
  )
}

export default Dataprovider