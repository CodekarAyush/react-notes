# React Notes - Simple Hindi Explanation

## React Kya Hota Hai?
React ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai. Isko Facebook ne develop kiya hai aur ye ek **component-based approach** follow karta hai. Iska main kaam fast aur interactive web applications banana hai.

## SPA (Single Page Application) Kya Hai?
SPA ek aisa web application hota hai jo ek hi HTML page load karta hai aur JavaScript ki madad se content ko update karta hai bina page refresh kare. Isse user ko fast experience milta hai.

## Kab React Choose Kare Aur Kab Next.js Jaise Frameworks?
- **React** tab choose kare jab aapko ek simple aur flexible frontend chahiye aur backend aap alag se manage kar rahe hain.
- **Next.js** choose kare jab aapko **SEO-friendly, server-side rendering (SSR)** aur **static site generation (SSG)** features chahiye.

## React DOM Kya Hai?
React DOM ek library hai jo React components ko browser ke actual DOM (Document Object Model) ke sath interact karne deti hai.

### Types of DOM
1. **Real DOM** - Jo browser ke andar hota hai aur slow hota hai.
2. **Virtual DOM** - React ka khud ka ek optimized DOM jo fast updates karne me madad karta hai.

## Diffing Algorithm & Reconciliation
React Virtual DOM ko use karta hai aur diffing algorithm ki madad se changes detect karta hai. Agar changes milte hain toh reconciliation process hota hai jo sirf badle huye parts ko update karta hai, na ki pura DOM.

## React Fiber
React Fiber ek advanced algorithm hai jo React 16+ versions me aaya hai. Ye performance optimize karta hai aur UI updates ko fast aur smooth banata hai.

## React Components
Components React ka main building block hote hain.
1. **Functional Components** - Ye simple functions hote hain jo UI return karte hain.
2. **Class Components** - Ye JavaScript classes hote hain jo state aur lifecycle methods use kar sakte hain.

## Props (Properties)
Props ek tarika hai data pass karne ka ek component se dusre component me.
### Types of Props
1. **String Props** - `name="John"`
2. **Number Props** - `age={25}`
3. **Boolean Props** - `isActive={true}`
4. **Function Props** - `handleClick={() => alert('Clicked!')}`
5. **Array/Object Props** - `data={[1,2,3]}`

### Child Props Kya Hote Hain?
Agar ek parent component kisi child component ko koi UI ya function bhejta hai toh usse **child prop** kehte hain.
```jsx
function Parent() {
  return <Child>Hello from Parent</Child>;
}
function Child({ children }) {
  return <h1>{children}</h1>;
}
```

## Prop Drilling & Solution
Agar hume ek prop ko deeply nested components tak bhejna ho toh usse **prop drilling** kehte hain. Iska solution **Context API** ya **Redux** hai.

## React Ka Scalable Folder Structure
```
/src
  /components
  /pages
  /hooks
  /context
  /utils
  /services (API calls)
  /assets
  index.js
  App.js
```

## React With TypeScript vs JavaScript
TypeScript strict typing provide karta hai jo errors ko jaldi pakadne me madad karta hai. Performance par koi bada farak nahi padta lekin TypeScript bade projects ke liye better hai.

## React Router DOM
React Router DOM SPA ke andar navigation handle karta hai.
### Installation:
```sh
npm install react-router-dom
```
### Usage:
```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

## Component Re-render
Jab React kisi component ko dubara render karta hai toh us process ko re-render kehte hain. Ye state change hone ya props update hone par hota hai.

## React Lifecycle Methods
Class components ke liye lifecycle methods hote hain:
- `componentDidMount` (Jab component mount hota hai)
- `componentDidUpdate` (Jab component update hota hai)
- `componentWillUnmount` (Jab component remove hota hai)

## Hooks in React
Hooks functional components me state aur lifecycle methods use karne ka tarika hai.

### `useState` - State manage karne ke liye
```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
```

### `useEffect` - Side effects handle karne ke liye
- **Without Cleanup:**
```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```
- **With Cleanup:**
```jsx
useEffect(() => {
  const interval = setInterval(() => console.log("Running"), 1000);
  return () => clearInterval(interval);
}, []);
```

### `useRef` - DOM ya variable ko reference dene ke liye
Use ref hook mei ginti k 2 hi scenerios hote hai yr , 
1) Variable jo apni value ko persist krta hai re render k baad . 
use ref hook object return krta hai jisme current:null hota hai . jisme hum data insert krte hai ya toh access kr rhe hote hai . 
  But isme value change krne k baad bhi component mei koi fark nahi padega qki re render trigger hoga hhi nahi . 

2) Toh isko q hi bnaaya gya ? Isko bnaane ka reason ye hai ki DOM mei se kisi bhi element ko hum directly access kr paaye .  

```jsx
const inputRef = useRef(null);
<input ref={inputRef} />
```

## Axios vs Fetch
Axios ek HTTP request library hai jo API calls ko easy aur error-free banati hai. Fetch se better hai kyunki:
- Auto JSON conversion karta hai
- Better error handling deta hai
- Request aur Response interceptors provide karta hai

### Axios Example
```jsx
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

### Axios Interceptors
Interceptors ka use tab hota hai jab hume har request ya response ke sath kuch common kaam karna ho jaise **authentication tokens add karna ya error handling**.

```jsx
axios.interceptors.request.use(request => {
  request.headers['Authorization'] = 'Bearer token';
  return request;
});
```

### Axios Instance
Agar hume ek base URL aur common headers set karne hain toh hum ek Axios instance bana sakte hain.
```jsx
const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: { 'Authorization': 'Bearer token' }
});
```

## ENV Files
Configuration aur secret keys ko secure rakhne ke liye `.env` file use hoti hai.
```env
REACT_APP_API_KEY=12345
```
Usage:
```jsx
const apiKey = process.env.REACT_APP_API_KEY;
```

---