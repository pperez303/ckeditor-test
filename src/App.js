import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import logo from './logo.svg';
import './App.css';

// code to test ckeditor using a custom ckeditor build.

function App() {
  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor 
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
        onInit={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
        } }
        config={{
          ckfinder: { uploadUrl: "http://localhost:8000/api/ckloads/uploads" },
          types: ['png', 'jpeg'],
        }}
      />
    </div>
  );
}

export default App;
