import "./App.css";
import Page from "./component/page";
import PostList from "./container/post-list";

function App() {
  return (
    <div className="App">
      <Page>
        <PostList></PostList>
      </Page>
    </div>
  )
}

export default App;
