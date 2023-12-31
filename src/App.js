import { Routes, Route } from "react-router-dom"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Contact } from "./routes/Contact"
import { Posts } from "./routes/Posts"
import { PostIndex } from "./routes/PostIndex"
import { Post } from "./routes/Post"
import { Notfound } from "./routes/Notfound"
import { Footer } from "./routes/Footer"

function App() {
  return (
    <div className="App">
      <h1>React-router</h1>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact message="hello" /> } />
        <Route path="/posts" element={ <Posts /> }>
            <Route index element={<PostIndex />} />
            <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={ <Notfound /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
