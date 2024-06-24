// import React, { useState } from "react";

// function ItemForm() {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("Produce");

//   return (
//     <form className="NewItem">
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//       </label>

//       <label>
//         Category:
//         <select
//           name="category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm; Original code




import React, { useState } from "react";

function ItemForm({ handleNewItems }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault()
    const itemObj = {
      name: name,
      category: category,
      isInCart: false
    }
    fetch('http://localhost:4000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemObj )
    })
      .then(res => res.json())
    .then(items => handleNewItems(items))
  }


  return (
    <form className="NewItem"
    onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;




