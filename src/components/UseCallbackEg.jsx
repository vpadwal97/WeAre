// import React, { useCallback, useState } from 'react';

// // List item component
// const ListItem = React.memo(({ item, onClick }) => {
//   console.log('ListItem rendered:', item);
//   return <li onClick={() => onClick(item)}>{item}</li>;
// });

// const List = ({ items }) => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Memoized click handler
//   const handleItemClick = useCallback((item) => {
//     console.log('ListItem handleItemClick:', item);
//     setSelectedItem(item);
//   }, []); // Stable reference

//   return (
//     <>
//     <ul>
//       {items.map((item) => (
//         <ListItem key={item} item={item} onClick={handleItemClick} />
//       ))}
//     </ul>
    
//     selectedItem
//     <ul>
//       <li>{selectedItem}</li>
//     </ul>
//     </>
//   );
// };

// const UseCallbackEg = () => {
//   const items = ['Item 1', 'Item 2', 'Item 3'];

//   return <List items={items} />;
// };

// export default UseCallbackEg;

// import React, { useCallback, useEffect, useState } from 'react';

// const UseCallbackEg = () => {
//   const [count, setCount] = useState(0);

//   // Memoized function used in useEffect
//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//   }, []); // Stable function reference

//   useEffect(() => {
//     console.log('Effect ran because handleClick changed');
//     // The effect only runs if handleClick changes

//     return () => {
//       console.log('Cleanup for handleClick');
//     };
//   }, [handleClick]); // Dependencies array includes handleClick

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Click Me</button>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default UseCallbackEg;



import React, { useState } from 'react';

// A functional component
const Child = React.memo(({ value }) => {
  console.log('Child re-rendered');
  return <div>{value}</div>;
});

const UseCallbackEg = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setText(text === 'Hello' ? 'World' : 'Hello')}>
        Toggle Text
      </button>
      <Child value={text} />
    </div>
  );
};

export default UseCallbackEg;
