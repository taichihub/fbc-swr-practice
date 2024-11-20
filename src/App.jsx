import React from "react";
import useSWR from "swr";
import "./App.css";

function HttpStatus({ url, headers }) {
  const fetcher = (url) => fetch(url, { headers }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p className="spinner">Loading...</p>;
  return <p>Status: {data.description}</p>;
}

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  return (
    <div className="App">
      <header className="App-header">
        <h1>HTTP Status</h1>
        <HttpStatus url={url} headers={headers} />
      </header>
    </div>
  );
}

export default App;
