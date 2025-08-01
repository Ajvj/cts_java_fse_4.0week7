import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selected, setSelected] = useState('');

  return (
    <div className="App">
      <h1>📚 BloggerApp - Conditional Rendering Demo</h1>
      <div className="button-group">
        <button onClick={() => setSelected('book')}>Show Book</button>
        <button onClick={() => setSelected('blog')}>Show Blog</button>
        <button onClick={() => setSelected('course')}>Show Course</button>
      </div>

      {/* Conditional Rendering (Using if-else via function) */}
      {selected === 'book' && <BookDetails />}
      {selected === 'blog' && <BlogDetails />}
      {selected === 'course' ? <CourseDetails /> : null}

      {/* Ternary Example */}
      {/* {selected === 'blog' ? <BlogDetails /> : <p>Select Blog to see details</p>} */}
    </div>
  );
}

export default App;
