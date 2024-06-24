// import React, { useState } from "react";
// import ItemForm from "./ItemForm";
// import Filter from "./Filter";
// import Item from "./Item";


// function ShoppingList() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [items, setItems] = useState([]);

//   function handleCategoryChange(category) {
//     setSelectedCategory(category);
//   }

//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;

//     return item.category === selectedCategory;
//   });

//   return (
//     <div className="ShoppingList">
//       <ItemForm />
//       <Filter
//         category={selectedCategory}
//         onCategoryChange={handleCategoryChange}
//       />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} item={item} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList; Original code


import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All")
    { return true }
    else

    {return item.category === selectedCategory};
  });
  //function handleNewItems(newItem) {
  useEffect(() => {
    fetch('http://localhost:4000/items')
      .then(res => res.json())
      .then(items => setItems(items))
    .catch(e=> console.log('Error:', e))
  }, [])
  ////////////
  function handleNewItems(newItem) {
   setItems([...items,newItem])
  }

  function handleUpdatedItems(updatedItem) {
    const updatedItems = items.map(item => {
      if (item.id === updatedItem.id) {
      return updatedItem
      } else {
        return item
    }
  })
  // console.log('In shopping list',updatedItem)
  setItems(updatedItems)
  }
  
  function handleDeletedItem(deletedItem) {
    const updatedItems = items.filter(item =>
      deletedItem.id !== item.id)
    setItems(updatedItems)
}
  return (
    <div className="ShoppingList">
      <ItemForm handleNewItems={handleNewItems}/>
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item}
            onUpdateItem={handleUpdatedItems}
            onDeleteItem = {handleDeletedItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList; 


