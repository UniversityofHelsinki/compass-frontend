import React from 'react';
import { render as testingLibraryRender } from '@testing-library/react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { MockProvider } from './../reducers/MockProvider';

const router = (ui) => createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ui} errorElement={<p>error</p>}>
    </Route>
  )
);

const Mock = ({ children, mockReducers }) => {
  return (
    <MockProvider mockReducers={mockReducers}>
      <RouterProvider router={router(children)} />
    </MockProvider>
  );
};


const render = (ui, options = {}, mockReducers = {}) => {
  return testingLibraryRender(
    <Mock mockReducers={mockReducers}>{ui}</Mock>, { ...options }
  );
};

export * from '@testing-library/react';
export { render }
  
