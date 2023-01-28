import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Jobs from "./components/Jobs/Jobs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/jobs",
        element: <Jobs/>,
    },
]);



const client = new ApolloClient({
    uri: "http://localhost:3003/graphql",
    cache: new InMemoryCache({
        addTypename: false,
    }),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "cache-and-network",
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <RouterProvider router={router} />
        </ApolloProvider>
    </React.StrictMode>
);

