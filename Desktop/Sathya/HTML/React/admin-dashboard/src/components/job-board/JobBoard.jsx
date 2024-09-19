import React, { useEffect, useState } from "react";
import JobPosts from "./JobPosts";
import "./Job.css";
const JobBoard = () => {
  let itemsForPage = 6;
  const API = "https://hacker-news.firebaseio.com/v0";
  /* const example_response = {
    by: "justicz",
    id: 41535079,
    score: 1,
    time: 1726261246,
    title:
      "Charge Robotics (YC S21) is hiring MechEs to build robots that build solar farms",
    type: "job",
    url: "https://www.ycombinator.com/companies/charge-robotics/jobs/ml4f9l4-senior-mechanical-engineer",
  }; */

  const [items, setItems] = useState([]);
  const [itemIds, setItemIds] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchItems = async (currPage) => {
    setCurrentPage(currPage);
    setLoading(true);
    

    let itemsList = itemIds;
    if (itemsList === null) {
        const response = await fetch(`${API}/jobstories.json`);
        itemsList = await response.json();
        setItemIds(itemsList);
    }

    const itemIdsForPage = itemsList.slice(
        currPage * itemsForPage, 
        currPage* itemsForPage + itemsForPage
    );

    itemsForPage = await Promise.all(
      itemIdsForPage.map((itemId) =>
        fetch(`${API}/item/${itemId}.json`).then((res) => res.json())
      )
    );

    setItems([...items, ...itemsForPage]);
    setLoading(false);
  };

  useEffect(() => {
    if (currentPage === 0) fetchItems(currentPage);
  }, []);
  return (
    <div className="app">
      <h1 className="title">Hacker News Job Board</h1>
      {itemIds === null || items.length < 1 ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="">
          <div className="items" role="list">
            {items.map((item) => {
              return <JobPosts key={item.id} {...item} />;
            })}
          </div>
          <button
            onClick={() => fetchItems(currentPage + 1)}
            className="load-more-button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load more Jobs"}
          </button>
        </div>
      )}
    </div>
  );
};

export default JobBoard;
