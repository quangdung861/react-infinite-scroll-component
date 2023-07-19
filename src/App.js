import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  border: "1px solid green",
  margin: 12,
  padding: 8,
};

function App() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };
  return (
    <div className="App">
      <p>
        Title: <b>InfiniteScroll Tutorial</b>
      </p>
      <div id="parentScrollDiv" style={{ height: 500, overflow: "auto", padding: "0 16px" }}>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>You are all set!</p>}
          height={500}
          scrollableTarget="parentScrollDiv"
        >
          {dataSource.map((item, index) => {
            return (
              <div key={index} style={style}>
                This is a div #{index + 1} inside InfiniteScroll
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
