


// import React, { useEffect, useState } from "react";

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState("products"); // "products" | "lookbook"
//   const [showForm, setShowForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Products state
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     collection: "",
//     gender: "",
//     brand: "",
//     name: "",
//     price: "",
//     stock: "",
//     image: null,
//   });

//   // Lookbook state (now only image)
//   const [lookbooks, setLookbooks] = useState([]);
//   const [lookbookData, setLookbookData] = useState({
//     image: null,
//   });

//   const admin = {
//     name: "John Doe",
//     email: "admin@fashion.com",
//     profilePic: "https://i.pravatar.cc/100?img=5",
//   };

//   const handleChange = (e, isLookbook = false) => {
//     const { name, value, files } = e.target;
//     if (isLookbook) {
//       setLookbookData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     }
//   };

//   // Fetch Products
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("http://localhost/react_admin_db/get_products.php");
//       const data = await res.json();
//       setProducts(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error(e);
//       setError("⚠️ Could not fetch products.");
//     }
//   };

//   // Fetch Lookbook
//   const fetchLookbook = async () => {
//     try {
//       const res = await fetch("http://localhost/react_admin_db/get_lookbook.php");
//       const data = await res.json();
//       setLookbooks(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error(e);
//       setError("⚠️ Could not fetch lookbook.");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchLookbook();
//   }, []);

//   // Add / Update Product or Lookbook
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     setIsSubmitting(true);

//     try {
//       const data = new FormData();
//       const isLookbook = activeTab === "lookbook";

//       const formObj = isLookbook ? lookbookData : formData;
//       Object.keys(formObj).forEach((k) => data.append(k, formObj[k]));
//       if (isEditing) data.append("id", editId);

//       const url = isLookbook
//         ? isEditing
//           ? "http://localhost/react_admin_db/update_lookbook.php"
//           : "http://localhost/react_admin_db/add_lookbook.php"
//         : isEditing
//         ? "http://localhost/react_admin_db/update_product.php"
//         : "http://localhost/react_admin_db/add_product.php";

//       const res = await fetch(url, { method: "POST", body: data });
//       const result = await res.json();

//       if (!res.ok || !result.success) {
//         setError(result.message || "❌ Save failed");
//       } else {
//         setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
//         setShowForm(false);
//         if (isLookbook) {
//           setLookbookData({ image: null });
//           fetchLookbook();
//         } else {
//           setFormData({
//             collection: "",
//             gender: "",
//             brand: "",
//             name: "",
//             price: "",
//             stock: "",
//             image: null,
//           });
//           fetchProducts();
//         }
//         setIsEditing(false);
//         setEditId(null);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("⚠️ Server error while saving");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Delete (Product or Lookbook)
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete?")) return;
//     try {
//       const url =
//         activeTab === "lookbook"
//           ? "http://localhost/react_admin_db/delete_lookbook.php"
//           : "http://localhost/react_admin_db/delete_product.php";

//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `id=${id}`,
//       });

//       const result = await res.json();
//       if (result.success) {
//         if (activeTab === "lookbook") {
//           setLookbooks(lookbooks.filter((l) => l.id !== id));
//         } else {
//           setProducts(products.filter((p) => p.id !== id));
//         }
//         setMessage("✅ Deleted!");
//       } else {
//         setError(result.message || "❌ Delete failed");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("⚠️ Server error while deleting");
//     }
//   };

//   // Edit (Product or Lookbook)
//   const handleEdit = (item) => {
//     setShowForm(true);
//     setIsEditing(true);
//     setEditId(item.id);

//     if (activeTab === "lookbook") {
//       setLookbookData({ image: null }); // only image
//     } else {
//       setFormData({
//         collection: item.collection,
//         gender: item.gender,
//         brand: item.brand,
//         name: item.name,
//         price: item.price,
//         stock: item.stock,
//         image: null,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       {/* Admin Profile */}
//       <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
//         <img
//           src={admin.profilePic}
//           alt="admin"
//           className="w-16 h-16 rounded-full border-2 border-gray-500"
//         />
//         <div>
//           <h2 className="text-xl font-bold">{admin.name}</h2>
//           <p className="text-sm text-gray-400">{admin.email}</p>
//           <p className="text-sm text-green-400">Admin Panel</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-4 mb-6">
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === "products" ? "bg-green-600" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("products")}
//         >
//           Products
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === "lookbook" ? "bg-green-600" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("lookbook")}
//         >
//           Lookbook
//         </button>
//       </div>

//       {/* Alerts */}
//       {message && (
//         <div className="mb-4 p-3 rounded bg-green-700 text-green-100 border border-green-500">
//           {message}
//         </div>
//       )}
//       {error && (
//         <div className="mb-4 p-3 rounded bg-red-700 text-red-100 border border-red-500">
//           {error}
//         </div>
//       )}

//       {/* Add Button */}
//       <button
//         className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
//         onClick={() => {
//           setShowForm(true);
//           setIsEditing(false);
//           setEditId(null);
//           activeTab === "lookbook"
//             ? setLookbookData({ image: null })
//             : setFormData({
//                 collection: "",
//                 gender: "",
//                 brand: "",
//                 name: "",
//                 price: "",
//                 stock: "",
//                 image: null,
//               });
//         }}
//       >
//         + Add {activeTab === "lookbook" ? "Lookbook" : "Product"}
//       </button>

//       {/* Products Table */}
//       {activeTab === "products" && (
//         <div className="mt-6 overflow-x-auto">
//           <table className="min-w-full border border-gray-700 text-sm">
//             <thead className="bg-gray-800 text-gray-200">
//               <tr>
//                 <th className="p-2 border border-gray-700">ID</th>
//                 <th className="p-2 border border-gray-700">Image</th>
//                 <th className="p-2 border border-gray-700">Name</th>
//                 <th className="p-2 border border-gray-700">Brand</th>
//                 <th className="p-2 border border-gray-700">Collection</th>
//                 <th className="p-2 border border-gray-700">Gender</th>
//                 <th className="p-2 border border-gray-700">Price</th>
//                 <th className="p-2 border border-gray-700">Stock</th>
//                 <th className="p-2 border border-gray-700">Created</th>
//                 <th className="p-2 border border-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length === 0 ? (
//                 <tr>
//                   <td colSpan="10" className="p-4 text-center text-gray-400">
//                     No products available
//                   </td>
//                 </tr>
//               ) : (
//                 products.map((p) => (
//                   <tr key={p.id} className="hover:bg-gray-800">
//                     <td className="p-2 border border-gray-700">{p.id}</td>
//                     <td className="p-2 border border-gray-700">
//                       <img
//                         src={p.image_url}
//                         alt={p.name}
//                         className="w-14 h-14 object-cover rounded"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-700">{p.name}</td>
//                     <td className="p-2 border border-gray-700">{p.brand}</td>
//                     <td className="p-2 border border-gray-700 capitalize">
//                       {p.collection}
//                     </td>
//                     <td className="p-2 border border-gray-700 capitalize">
//                       {p.gender}
//                     </td>
//                     <td className="p-2 border border-gray-700">
//                       ₹{Number(p.price).toFixed(2)}
//                     </td>
//                     <td className="p-2 border border-gray-700">{p.stock}</td>
//                     <td className="p-2 border border-gray-700">
//                       {p.created_at}
//                     </td>
//                     <td className="p-2 border border-gray-700 space-x-2">
//                       <button
//                         onClick={() => handleEdit(p)}
//                         className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-400"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(p.id)}
//                         className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-400"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Lookbook Table */}
//       {activeTab === "lookbook" && (
//         <div className="mt-6 overflow-x-auto">
//           <table className="min-w-full border border-gray-700 text-sm">
//             <thead className="bg-gray-800 text-gray-200">
//               <tr>
//                 <th className="p-2 border border-gray-700">ID</th>
//                 <th className="p-2 border border-gray-700">Image</th>
//                 <th className="p-2 border border-gray-700">Created</th>
//                 <th className="p-2 border border-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {lookbooks.length === 0 ? (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-400">
//                     No lookbook entries available
//                   </td>
//                 </tr>
//               ) : (
//                 lookbooks.map((l) => (
//                   <tr key={l.id} className="hover:bg-gray-800">
//                     <td className="p-2 border border-gray-700">{l.id}</td>
//                     <td className="p-2 border border-gray-700">
//                       <img
//                         src={l.image_url}
//                         alt={`Lookbook ${l.id}`}
//                         className="w-14 h-14 object-cover rounded"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-700">
//                       {l.created_at}
//                     </td>
//                     <td className="p-2 border border-gray-700 space-x-2">
//                       <button
//                         onClick={() => handleEdit(l)}
//                         className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-400"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(l.id)}
//                         className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-400"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Popup Form */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96"
//           >
//             <h3 className="text-lg font-bold mb-4">
//               {isEditing
//                 ? `Edit ${activeTab === "lookbook" ? "Lookbook Image" : "Product"}`
//                 : `Add ${activeTab === "lookbook" ? "Lookbook Image" : "Product"}`}
//             </h3>

//             {activeTab === "products" ? (
//               <>
//                 <select
//                   name="collection"
//                   value={formData.collection}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Collection</option>
//                   <option value="clothing">Clothing</option>
//                   <option value="footwear">Footwear</option>
//                   <option value="bags">Bags</option>
//                   <option value="accessories">Accessories</option>
//                 </select>

//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="men">Men</option>
//                   <option value="women">Women</option>
//                   <option value="kids">Kids</option>
//                 </select>

//                 <input
//                   type="text"
//                   name="brand"
//                   placeholder="Brand"
//                   value={formData.brand}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Product Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   step="0.01"
//                   min="0"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="stock"
//                   placeholder="Stock"
//                   value={formData.stock}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   min="0"
//                   required
//                 />
//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={handleChange}
//                   className="w-full mb-3"
//                 />
//               </>
//             ) : (
//               <>
//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={(e) => handleChange(e, true)}
//                   className="w-full mb-3"
//                   required
//                 />
//               </>
//             )}

//             <div className="flex justify-between">
//               <button
//                 type="button"
//                 className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
//                 onClick={() => {
//                   setShowForm(false);
//                   setIsEditing(false);
//                 }}
//                 disabled={isSubmitting}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 disabled:opacity-60"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Saving..." : isEditing ? "Update" : "Save"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;

//perfect one

// import React, { useEffect, useState } from "react";

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState("products"); // products | lookbook
//   const [showForm, setShowForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Products state
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     collection: "",
//     gender: "",
//     brand: "",
//     name: "",
//     price: "",
//     stock: "",
//     image: null,
//   });

//   // Lookbook state
//   const [lookbooks, setLookbooks] = useState([]);
//   const [lookbookData, setLookbookData] = useState({ image: null });

//   const admin = {
//     name: "John Doe",
//     email: "admin@fashion.com",
//     profilePic: "https://i.pravatar.cc/100?img=5",
//   };

//   // Input change
//   const handleChange = (e, isLookbook = false) => {
//     const { name, value, files } = e.target;
//     if (isLookbook) {
//       setLookbookData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     }
//   };

//   // Fetch Products
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("http://localhost/react_admin_db/get_products.php");
//       const data = await res.json();
//       setProducts(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error(e);
//       setError("⚠️ Could not fetch products.");
//     }
//   };

//   // Fetch Lookbook
//   const fetchLookbook = async () => {
//     try {
//       const res = await fetch("http://localhost/react_admin_db/get_lookbook.php");
//       const data = await res.json();
//       setLookbooks(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error(e);
//       setError("⚠️ Could not fetch lookbook.");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchLookbook();
//   }, []);

//   // Save / Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     setIsSubmitting(true);

//     try {
//       const data = new FormData();
//       const isLookbook = activeTab === "lookbook";

//       const formObj = isLookbook ? lookbookData : formData;
//       Object.keys(formObj).forEach((k) => data.append(k, formObj[k]));
//       if (isEditing) data.append("id", editId);

//       const url = isLookbook
//         ? isEditing
//           ? "http://localhost/react_admin_db/update_lookbook.php"
//           : "http://localhost/react_admin_db/add_lookbook.php"
//         : isEditing
//         ? "http://localhost/react_admin_db/update_product.php"
//         : "http://localhost/react_admin_db/add_product.php";

//       const res = await fetch(url, { method: "POST", body: data });
//       const result = await res.json();

//       if (!res.ok || !result.success) {
//         setError(result.message || "❌ Save failed");
//       } else {
//         setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
//         setShowForm(false);
//         if (isLookbook) {
//           setLookbookData({ image: null });
//           fetchLookbook();
//         } else {
//           setFormData({
//             collection: "",
//             gender: "",
//             brand: "",
//             name: "",
//             price: "",
//             stock: "",
//             image: null,
//           });
//           fetchProducts();
//         }
//         setIsEditing(false);
//         setEditId(null);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("⚠️ Server error while saving");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Delete
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete?")) return;
//     try {
//       const url =
//         activeTab === "lookbook"
//           ? "http://localhost/react_admin_db/delete_lookbook.php"
//           : "http://localhost/react_admin_db/delete_product.php";

//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `id=${id}`,
//       });

//       const result = await res.json();
//       if (result.success) {
//         if (activeTab === "lookbook") {
//           setLookbooks(lookbooks.filter((l) => l.id !== id));
//         } else {
//           setProducts(products.filter((p) => p.id !== id));
//         }
//         setMessage("✅ Deleted!");
//       } else {
//         setError(result.message || "❌ Delete failed");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("⚠️ Server error while deleting");
//     }
//   };

//   // Edit
//   const handleEdit = (item) => {
//     setShowForm(true);
//     setIsEditing(true);
//     setEditId(item.id);

//     if (activeTab === "lookbook") {
//       setLookbookData({ image: null });
//     } else {
//       setFormData({
//         collection: item.collection,
//         gender: item.gender,
//         brand: item.brand,
//         name: item.name,
//         price: item.price,
//         stock: item.stock,
//         image: null,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       {/* Profile */}
//       <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
//         <img
//           src={admin.profilePic}
//           alt="admin"
//           className="w-16 h-16 rounded-full border-2 border-gray-500"
//         />
//         <div>
//           <h2 className="text-xl font-bold">{admin.name}</h2>
//           <p className="text-sm text-gray-400">{admin.email}</p>
//           <p className="text-sm text-green-400">Admin Panel</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-4 mb-6">
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === "products" ? "bg-green-600" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("products")}
//         >
//           Products
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === "lookbook" ? "bg-green-600" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("lookbook")}
//         >
//           Lookbook
//         </button>
//       </div>

//       {/* Alerts */}
//       {message && (
//         <div className="mb-4 p-3 rounded bg-green-700 text-green-100 border border-green-500">
//           {message}
//         </div>
//       )}
//       {error && (
//         <div className="mb-4 p-3 rounded bg-red-700 text-red-100 border border-red-500">
//           {error}
//         </div>
//       )}

//       {/* Add */}
//       <button
//         className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
//         onClick={() => {
//           setShowForm(true);
//           setIsEditing(false);
//           setEditId(null);
//           activeTab === "lookbook"
//             ? setLookbookData({ image: null })
//             : setFormData({
//                 collection: "",
//                 gender: "",
//                 brand: "",
//                 name: "",
//                 price: "",
//                 stock: "",
//                 image: null,
//               });
//         }}
//       >
//         + Add {activeTab === "lookbook" ? "Lookbook" : "Product"}
//       </button>

//       {/* Products Table */}
//       {activeTab === "products" && (
//         <div className="mt-6 overflow-x-auto">
//           <table className="min-w-full border border-gray-700 text-sm">
//             <thead className="bg-gray-800 text-gray-200">
//               <tr>
//                 <th className="p-2 border border-gray-700">ID</th>
//                 <th className="p-2 border border-gray-700">Image</th>
//                 <th className="p-2 border border-gray-700">Name</th>
//                 <th className="p-2 border border-gray-700">Brand</th>
//                 <th className="p-2 border border-gray-700">Collection</th>
//                 <th className="p-2 border border-gray-700">Gender</th>
//                 <th className="p-2 border border-gray-700">Price</th>
//                 <th className="p-2 border border-gray-700">Stock</th>
//                 <th className="p-2 border border-gray-700">Created</th>
//                 <th className="p-2 border border-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length === 0 ? (
//                 <tr>
//                   <td colSpan="10" className="p-4 text-center text-gray-400">
//                     No products available
//                   </td>
//                 </tr>
//               ) : (
//                 products.map((p) => (
//                   <tr key={p.id} className="hover:bg-gray-800">
//                     <td className="p-2 border border-gray-700">{p.id}</td>
//                     <td className="p-2 border border-gray-700">
//                       <img
//                         src={p.image_url}
//                         alt={p.name}
//                         className="w-14 h-14 object-cover rounded"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-700">{p.name}</td>
//                     <td className="p-2 border border-gray-700">{p.brand}</td>
//                     <td className="p-2 border border-gray-700">{p.collection}</td>
//                     <td className="p-2 border border-gray-700">{p.gender}</td>
//                     <td className="p-2 border border-gray-700">
//                       ₹{Number(p.price).toFixed(2)}
//                     </td>
//                     <td className="p-2 border border-gray-700">{p.stock}</td>
//                     <td className="p-2 border border-gray-700">{p.created_at}</td>
//                     <td className="p-2 border border-gray-700 space-x-2">
//                       <button
//                         onClick={() => handleEdit(p)}
//                         className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-400"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(p.id)}
//                         className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-400"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Lookbook Table */}
//       {activeTab === "lookbook" && (
//         <div className="mt-6 overflow-x-auto">
//           <table className="min-w-full border border-gray-700 text-sm">
//             <thead className="bg-gray-800 text-gray-200">
//               <tr>
//                 <th className="p-2 border border-gray-700">ID</th>
//                 <th className="p-2 border border-gray-700">Image</th>
//                 <th className="p-2 border border-gray-700">Created</th>
//                 <th className="p-2 border border-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {lookbooks.length === 0 ? (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-400">
//                     No lookbook entries available
//                   </td>
//                 </tr>
//               ) : (
//                 lookbooks.map((l) => (
//                   <tr key={l.id} className="hover:bg-gray-800">
//                     <td className="p-2 border border-gray-700">{l.id}</td>
//                     <td className="p-2 border border-gray-700">
//                       <img
//                         src={l.image_url}
//                         alt={`Lookbook ${l.id}`}
//                         className="w-14 h-14 object-cover rounded"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-700">{l.created_at}</td>
//                     <td className="p-2 border border-gray-700 space-x-2">
//                       <button
//                         onClick={() => handleEdit(l)}
//                         className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-400"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(l.id)}
//                         className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-400"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Popup Form */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96"
//           >
//             <h3 className="text-lg font-bold mb-4">
//               {isEditing
//                 ? `Edit ${activeTab === "lookbook" ? "Lookbook Image" : "Product"}`
//                 : `Add ${activeTab === "lookbook" ? "Lookbook Image" : "Product"}`}
//             </h3>

//             {activeTab === "products" ? (
//               <>
//                 <select
//                   name="collection"
//                   value={formData.collection}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Collection</option>
//                   <option value="clothing">Clothing</option>
//                   <option value="footwear">Footwear</option>
//                   <option value="bags">Bags</option>
//                   <option value="accessories">Accessories</option>
//                 </select>

//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="men">Men</option>
//                   <option value="women">Women</option>
//                   <option value="kids">Kids</option>
//                 </select>

//                 <input
//                   type="text"
//                   name="brand"
//                   placeholder="Brand"
//                   value={formData.brand}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Product Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   step="0.01"
//                   min="0"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="stock"
//                   placeholder="Stock"
//                   value={formData.stock}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   min="0"
//                   required
//                 />
//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={handleChange}
//                   className="w-full mb-3"
//                 />
//               </>
//             ) : (
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={(e) => handleChange(e, true)}
//                 className="w-full mb-3"
//                 required
//               />
//             )}

//             <div className="flex justify-between">
//               <button
//                 type="button"
//                 className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
//                 onClick={() => {
//                   setShowForm(false);
//                   setIsEditing(false);
//                 }}
//                 disabled={isSubmitting}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 disabled:opacity-60"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Saving..." : isEditing ? "Update" : "Save"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;






// import React, { useEffect, useState } from "react";

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState("products"); // products | lookbook
//   const [showForm, setShowForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Products state
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     collection: "",
//     gender: "",
//     brand: "",
//     name: "",
//     price: "",
//     stock: "",
//     image: null,
//   });

//   // Lookbook state
//   const [lookbooks, setLookbooks] = useState([]);
//   const [lookbookData, setLookbookData] = useState({
//     collection: "",
//     gender: "",
//     image: null,
//   });

//   const admin = {
//     name: "John Doe",
//     email: "admin@fashion.com",
//     profilePic: "https://i.pravatar.cc/100?img=5",
//   };

//   // Input change
//   const handleChange = (e, isLookbook = false) => {
//     const { name, value, files } = e.target;
//     if (isLookbook) {
//       setLookbookData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     }
//   };

//   // Fetch Products
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("http://localhost/react_admin_db/get_products.php");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       setProducts(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error(e);
//       setError("⚠️ Could not fetch products.");
//     }
//   };

//   // Fetch Lookbook
//   const fetchLookbook = async () => {
//     try {
//       const res = await fetch("http://localhost/react_admin_db/get_lookbook.php");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       setLookbooks(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error(e);
//       setError("⚠️ Could not fetch lookbook.");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchLookbook();
//   }, []);

//   // Save / Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     setIsSubmitting(true);

//     const isLookbook = activeTab === "lookbook";
//     const formObj = isLookbook ? lookbookData : formData;

//     // Validate image for lookbook (required for new entries)
//     if (isLookbook && !formObj.image && !isEditing) {
//       setError("⚠️ Please select an image.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const data = new FormData();
//       Object.keys(formObj).forEach((k) => data.append(k, formObj[k]));
//       if (isEditing) data.append("id", editId);

//       // Debug FormData
//       for (let pair of data.entries()) {
//         console.log(pair[0] + ': ' + pair[1]);
//       }

//       const url = isLookbook
//         ? isEditing
//           ? "http://localhost/react_admin_db/update_lookbook.php"
//           : "http://localhost/react_admin_db/add_lookbook.php"
//         : isEditing
//         ? "http://localhost/react_admin_db/update_product.php"
//         : "http://localhost/react_admin_db/add_product.php";

//       const res = await fetch(url, { method: "POST", body: data });
//       const result = await res.json();

//       if (!res.ok || !result.success) {
//         setError(result.message || "❌ Save failed");
//       } else {
//         setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
//         setShowForm(false);
//         if (isLookbook) {
//           setLookbookData({ collection: "", gender: "", image: null });
//           await fetchLookbook();
//         } else {
//           setFormData({
//             collection: "",
//             gender: "",
//             brand: "",
//             name: "",
//             price: "",
//             stock: "",
//             image: null,
//           });
//           await fetchProducts();
//         }
//         setIsEditing(false);
//         setEditId(null);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("⚠️ Server error while saving");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Delete
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete?")) return;
//     try {
//       const url =
//         activeTab === "lookbook"
//           ? "http://localhost/react_admin_db/delete_lookbook.php"
//           : "http://localhost/react_admin_db/delete_product.php";

//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `id=${id}`,
//       });

//       const result = await res.json();
//       if (result.success) {
//         if (activeTab === "lookbook") {
//           setLookbooks(lookbooks.filter((l) => l.id !== id));
//         } else {
//           setProducts(products.filter((p) => p.id !== id));
//         }
//         setMessage("✅ Deleted!");
//       } else {
//         setError(result.message || "❌ Delete failed");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("⚠️ Server error while deleting");
//     }
//   };

//   // Edit
//   const handleEdit = (item) => {
//     setShowForm(true);
//     setIsEditing(true);
//     setEditId(item.id);

//     if (activeTab === "lookbook") {
//       setLookbookData({
//         collection: item.collection || "",
//         gender: item.gender || "",
//         image: null,
//       });
//     } else {
//       setFormData({
//         collection: item.collection,
//         gender: item.gender,
//         brand: item.brand,
//         name: item.name,
//         price: item.price,
//         stock: item.stock,
//         image: null,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       {/* Profile */}
//       <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
//         <img
//           src={admin.profilePic}
//           alt="admin"
//           className="w-16 h-16 rounded-full border-2 border-gray-500"
//         />
//         <div>
//           <h2 className="text-xl font-bold">{admin.name}</h2>
//           <p className="text-sm text-gray-400">{admin.email}</p>
//           <p className="text-sm text-green-400">Admin Panel</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-4 mb-6">
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === "products" ? "bg-green-600" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("products")}
//         >
//           Products
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === "lookbook" ? "bg-green-600" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("lookbook")}
//         >
//           Lookbook
//         </button>
//       </div>

//       {/* Alerts */}
//       {message && (
//         <div className="mb-4 p-3 rounded bg-green-700 text-green-100 border border-green-500">
//           {message}
//         </div>
//       )}
//       {error && (
//         <div className="mb-4 p-3 rounded bg-red-700 text-red-100 border border-red-500">
//           {error}
//         </div>
//       )}

//       {/* Add */}
//       <button
//         className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
//         onClick={() => {
//           setShowForm(true);
//           setIsEditing(false);
//           setEditId(null);
//           activeTab === "lookbook"
//             ? setLookbookData({ collection: "", gender: "", image: null })
//             : setFormData({
//                 collection: "",
//                 gender: "",
//                 brand: "",
//                 name: "",
//                 price: "",
//                 stock: "",
//                 image: null,
//               });
//         }}
//       >
//         + Add {activeTab === "lookbook" ? "Lookbook" : "Product"}
//       </button>

//       {/* Products Table */}
//       {activeTab === "products" && (
//         <div className="mt-6 overflow-x-auto">
//           <table className="min-w-full border border-gray-700 text-sm">
//             <thead className="bg-gray-800 text-gray-200">
//               <tr>
//                 <th className="p-2 border border-gray-700">ID</th>
//                 <th className="p-2 border border-gray-700">Image</th>
//                 <th className="p-2 border border-gray-700">Name</th>
//                 <th className="p-2 border border-gray-700">Brand</th>
//                 <th className="p-2 border border-gray-700">Collection</th>
//                 <th className="p-2 border border-gray-700">Gender</th>
//                 <th className="p-2 border border-gray-700">Price</th>
//                 <th className="p-2 border border-gray-700">Stock</th>
//                 <th className="p-2 border border-gray-700">Created</th>
//                 <th className="p-2 border border-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length === 0 ? (
//                 <tr>
//                   <td colSpan="10" className="p-4 text-center text-gray-400">
//                     No products available
//                   </td>
//                 </tr>
//               ) : (
//                 products.map((p) => (
//                   <tr key={p.id} className="hover:bg-gray-800">
//                     <td className="p-2 border border-gray-700">{p.id}</td>
//                     <td className="p-2 border border-gray-700">
//                       <img
//                         src={p.image_url}
//                         alt={p.name}
//                         className="w-14 h-14 object-cover rounded"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-700">{p.name}</td>
//                     <td className="p-2 border border-gray-700">{p.brand}</td>
//                     <td className="p-2 border border-gray-700">{p.collection}</td>
//                     <td className="p-2 border border-gray-700">{p.gender}</td>
//                     <td className="p-2 border border-gray-700">
//                       ₹{Number(p.price).toFixed(2)}
//                     </td>
//                     <td className="p-2 border border-gray-700">{p.stock}</td>
//                     <td className="p-2 border border-gray-700">{p.created_at}</td>
//                     <td className="p-2 border border-gray-700 space-x-2">
//                       <button
//                         onClick={() => handleEdit(p)}
//                         className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-400"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(p.id)}
//                         className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-400"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Lookbook Table */}
//       {activeTab === "lookbook" && (
//         <div className="mt-6 overflow-x-auto">
//           <table className="min-w-full border border-gray-700 text-sm">
//             <thead className="bg-gray-800 text-gray-200">
//               <tr>
//                 <th className="p-2 border border-gray-700">ID</th>
//                 <th className="p-2 border border-gray-700">Image</th>
//                 <th className="p-2 border border-gray-700">Collection</th>
//                 <th className="p-2 border border-gray-700">Gender</th>
//                 <th className="p-2 border border-gray-700">Created</th>
//                 <th className="p-2 border border-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {lookbooks.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="p-4 text-center text-gray-400">
//                     No lookbook entries available
//                   </td>
//                 </tr>
//               ) : (
//                 lookbooks.map((l) => (
//                   <tr key={l.id} className="hover:bg-gray-800">
//                     <td className="p-2 border border-gray-700">{l.id}</td>
//                     <td className="p-2 border border-gray-700">
//                       <img
//                         src={l.image_url}
//                         alt={`Lookbook ${l.id}`}
//                         className="w-14 h-14 object-cover rounded"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-700">{l.collection}</td>
//                     <td className="p-2 border border-gray-700">{l.gender}</td>
//                     <td className="p-2 border border-gray-700">{l.created_at}</td>
//                     <td className="p-2 border border-gray-700 space-x-2">
//                       <button
//                         onClick={() => handleEdit(l)}
//                         className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-400"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(l.id)}
//                         className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-400"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Popup Form */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96"
//           >
//             <h3 className="text-lg font-bold mb-4">
//               {isEditing
//                 ? `Edit ${activeTab === "lookbook" ? "Lookbook Image" : "Product"}`
//                 : `Add ${activeTab === "lookbook" ? "Lookbook Image" : "Product"}`}
//             </h3>

//             {activeTab === "products" ? (
//               <>
//                 <select
//                   name="collection"
//                   value={formData.collection}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Collection</option>
//                   <option value="clothing">Clothing</option>
//                   <option value="footwear">Footwear</option>
//                   <option value="bags">Bags</option>
//                   <option value="accessories">Accessories</option>
//                 </select>

//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="men">Men</option>
//                   <option value="women">Women</option>
//                   <option value="kids">Kids</option>
//                 </select>

//                 <input
//                   type="text"
//                   name="brand"
//                   placeholder="Brand"
//                   value={formData.brand}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Product Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   step="0.01"
//                   min="0"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="stock"
//                   placeholder="Stock"
//                   value={formData.stock}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   min="0"
//                   required
//                 />
//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={handleChange}
//                   className="w-full mb-3"
//                 />
//               </>
//             ) : (
//               <>
//                 <select
//                   name="collection"
//                   value={lookbookData.collection}
//                   onChange={(e) => handleChange(e, true)}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Collection</option>
//                   <option value="clothing">Clothing</option>
//                   <option value="footwear">Footwear</option>
//                   <option value="bags">Bags</option>
//                   <option value="accessories">Accessories</option>
//                 </select>

//                 <select
//                   name="gender"
//                   value={lookbookData.gender}
//                   onChange={(e) => handleChange(e, true)}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="men">Men</option>
//                   <option value="women">Women</option>
//                   <option value="kids">Kids</option>
//                 </select>

//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={(e) => handleChange(e, true)}
//                   className="w-full mb-3"
//                   required={!isEditing} // Image required only for new entries
//                 />
//               </>
//             )}

//             <div className="flex justify-between">
//               <button
//                 type="button"
//                 className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
//                 onClick={() => {
//                   setShowForm(false);
//                   setIsEditing(false);
//                 }}
//                 disabled={isSubmitting}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 disabled:opacity-60"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Saving..." : isEditing ? "Update" : "Save"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;



// import React, { useEffect, useState } from "react";

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState("products"); // products | lookbook
//   const [showForm, setShowForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Products state
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     collection: "",
//     gender: "",
//     brand: "",
//     name: "",
//     price: "",
//     stock: "",
//     image: null,
//   });

//   // Lookbook state
//   const [lookbooks, setLookbooks] = useState([]);
//   const [lookbookData, setLookbookData] = useState({
//     collection: "",
//     gender: "",
//     image: null,
//   });

//   const admin = {
//     name: "John Doe",
//     email: "admin@fashion.com",
//     profilePic: "https://i.pravatar.cc/100?img=5",
//   };

//   // Input change
//   const handleChange = (e, isLookbook = false) => {
//     const { name, value, files } = e.target;
//     if (isLookbook) {
//       setLookbookData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     }
//   };

//   // Fetch Products
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("http://localhost/react_admin_db/get_products.php");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       setProducts(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error(e);
//       setError("⚠️ Could not fetch products.");
//     }
//   };

//   // Fetch Lookbook
//   const fetchLookbook = async () => {
//     try {
//       const res = await fetch("http://localhost/react_admin_db/get_lookbook.php");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       setLookbooks(Array.isArray(data) ? data : []);
//     } catch (e) {
//       console.error(e);
//       setError("⚠️ Could not fetch lookbook.");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchLookbook();
//   }, []);

//   // Save / Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     setIsSubmitting(true);

//     const isLookbook = activeTab === "lookbook";
//     const formObj = isLookbook ? lookbookData : formData;

//     // Validate image for lookbook (required for new entries)
//     if (isLookbook && !formObj.image && !isEditing) {
//       setError("⚠️ Please select an image.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const data = new FormData();
//       Object.keys(formObj).forEach((k) => data.append(k, formObj[k]));
//       if (isEditing) data.append("id", editId);

//       // Debug FormData
//       for (let pair of data.entries()) {
//         console.log(pair[0] + ': ' + pair[1]);
//       }

//       const url = isLookbook
//         ? isEditing
//           ? "http://localhost/react_admin_db/update_lookbook.php"
//           : "http://localhost/react_admin_db/add_lookbook.php"
//         : isEditing
//         ? "http://localhost/react_admin_db/update_product.php"
//         : "http://localhost/react_admin_db/add_product.php";

//       const res = await fetch(url, { method: "POST", body: data });
//       const result = await res.json();

//       if (!res.ok || !result.success) {
//         setError(result.message || "❌ Save failed");
//       } else {
//         setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
//         setShowForm(false);
//         if (isLookbook) {
//           setLookbookData({ collection: "", gender: "", image: null });
//           await fetchLookbook();
//         } else {
//           setFormData({
//             collection: "",
//             gender: "",
//             brand: "",
//             name: "",
//             price: "",
//             stock: "",
//             image: null,
//           });
//           await fetchProducts();
//         }
//         setIsEditing(false);
//         setEditId(null);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("⚠️ Server error while saving");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Delete
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete?")) return;
//     try {
//       const url =
//         activeTab === "lookbook"
//           ? "http://localhost/react_admin_db/delete_lookbook.php"
//           : "http://localhost/react_admin_db/delete_product.php";

//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `id=${id}`,
//       });

//       const result = await res.json();
//       if (result.success) {
//         if (activeTab === "lookbook") {
//           setLookbooks(lookbooks.filter((l) => l.id !== id));
//         } else {
//           setProducts(products.filter((p) => p.id !== id));
//         }
//         setMessage("✅ Deleted!");
//       } else {
//         setError(result.message || "❌ Delete failed");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("⚠️ Server error while deleting");
//     }
//   };

//   // Edit
//   const handleEdit = (item) => {
//     setShowForm(true);
//     setIsEditing(true);
//     setEditId(item.id);

//     if (activeTab === "lookbook") {
//       setLookbookData({
//         collection: item.collection || "",
//         gender: item.gender || "",
//         image: null,
//       });
//     } else {
//       setFormData({
//         collection: item.collection,
//         gender: item.gender,
//         brand: item.brand,
//         name: item.name,
//         price: item.price,
//         stock: item.stock,
//         image: null,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       {/* Profile */}
//       <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
//         <img
//           src={admin.profilePic}
//           alt="admin"
//           className="w-16 h-16 rounded-full border-2 border-gray-500"
//         />
//         <div>
//           <h2 className="text-xl font-bold">{admin.name}</h2>
//           <p className="text-sm text-gray-400">{admin.email}</p>
//           <p className="text-sm text-green-400">Admin Panel</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-4 mb-6">
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === "products" ? "bg-green-600" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("products")}
//         >
//           Products
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === "lookbook" ? "bg-green-600" : "bg-gray-700"
//           }`}
//           onClick={() => setActiveTab("lookbook")}
//         >
//           Lookbook
//         </button>
//       </div>

//       {/* Alerts */}
//       {message && (
//         <div className="mb-4 p-3 rounded bg-green-700 text-green-100 border border-green-500">
//           {message}
//         </div>
//       )}
//       {error && (
//         <div className="mb-4 p-3 rounded bg-red-700 text-red-100 border border-red-500">
//           {error}
//         </div>
//       )}

//       {/* Add */}
//       <button
//         className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
//         onClick={() => {
//           setShowForm(true);
//           setIsEditing(false);
//           setEditId(null);
//           activeTab === "lookbook"
//             ? setLookbookData({ collection: "", gender: "", image: null })
//             : setFormData({
//                 collection: "",
//                 gender: "",
//                 brand: "",
//                 name: "",
//                 price: "",
//                 stock: "",
//                 image: null,
//               });
//         }}
//       >
//         + Add {activeTab === "lookbook" ? "Lookbook" : "Product"}
//       </button>

//       {/* Products Table */}
//       {activeTab === "products" && (
//         <div className="mt-6 overflow-x-auto">
//           <table className="min-w-full border border-gray-700 text-sm">
//             <thead className="bg-gray-800 text-gray-200">
//               <tr>
//                 <th className="p-2 border border-gray-700">ID</th>
//                 <th className="p-2 border border-gray-700">Image</th>
//                 <th className="p-2 border border-gray-700">Name</th>
//                 <th className="p-2 border border-gray-700">Brand</th>
//                 <th className="p-2 border border-gray-700">Collection</th>
//                 <th className="p-2 border border-gray-700">Gender</th>
//                 <th className="p-2 border border-gray-700">Price</th>
//                 <th className="p-2 border border-gray-700">Stock</th>
//                 <th className="p-2 border border-gray-700">Created</th>
//                 <th className="p-2 border border-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length === 0 ? (
//                 <tr>
//                   <td colSpan="10" className="p-4 text-center text-gray-400">
//                     No products available
//                   </td>
//                 </tr>
//               ) : (
//                 products.map((p) => (
//                   <tr key={p.id} className="hover:bg-gray-800">
//                     <td className="p-2 border border-gray-700">{p.id}</td>
//                     <td className="p-2 border border-gray-700">
//                       <img
//                         src={p.image_url}
//                         alt={p.name}
//                         className="w-14 h-14 object-cover rounded"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-700">{p.name}</td>
//                     <td className="p-2 border border-gray-700">{p.brand}</td>
//                     <td className="p-2 border border-gray-700">{p.collection}</td>
//                     <td className="p-2 border border-gray-700">{p.gender}</td>
//                     <td className="p-2 border border-gray-700">
//                       Rs. {Number(p.price).toFixed(2)}
//                     </td>
//                     <td className="p-2 border border-gray-700">{p.stock}</td>
//                     <td className="p-2 border border-gray-700">{p.created_at}</td>
//                     <td className="p-2 border border-gray-700 space-x-2">
//                       <button
//                         onClick={() => handleEdit(p)}
//                         className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-400"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(p.id)}
//                         className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-400"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Lookbook Table */}
//       {activeTab === "lookbook" && (
//         <div className="mt-6 overflow-x-auto">
//           <table className="min-w-full border border-gray-700 text-sm">
//             <thead className="bg-gray-800 text-gray-200">
//               <tr>
//                 <th className="p-2 border border-gray-700">ID</th>
//                 <th className="p-2 border border-gray-700">Image</th>
//                 <th className="p-2 border border-gray-700">Collection</th>
//                 <th className="p-2 border border-gray-700">Gender</th>
//                 <th className="p-2 border border-gray-700">Created</th>
//                 <th className="p-2 border border-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {lookbooks.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="p-4 text-center text-gray-400">
//                     No lookbook entries available
//                   </td>
//                 </tr>
//               ) : (
//                 lookbooks.map((l) => (
//                   <tr key={l.id} className="hover:bg-gray-800">
//                     <td className="p-2 border border-gray-700">{l.id}</td>
//                     <td className="p-2 border border-gray-700">
//                       <img
//                         src={l.image_url}
//                         alt={`Lookbook ${l.id}`}
//                         className="w-14 h-14 object-cover rounded"
//                       />
//                     </td>
//                     <td className="p-2 border border-gray-700">{l.collection}</td>
//                     <td className="p-2 border border-gray-700">{l.gender}</td>
//                     <td className="p-2 border border-gray-700">{l.created_at}</td>
//                     <td className="p-2 border border-gray-700 space-x-2">
//                       <button
//                         onClick={() => handleEdit(l)}
//                         className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-400"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(l.id)}
//                         className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-400"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Popup Form */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96"
//           >
//             <h3 className="text-lg font-bold mb-4">
//               {isEditing
//                 ? `Edit ${activeTab === "lookbook" ? "Lookbook Image" : "Product"}`
//                 : `Add ${activeTab === "lookbook" ? "Lookbook Image" : "Product"}`}
//             </h3>

//             {activeTab === "products" ? (
//               <>
//                 <select
//                   name="collection"
//                   value={formData.collection}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Collection</option>
//                   <option value="clothing">Clothing</option>
//                   <option value="footwear">Footwear</option>
//                   <option value="bags">Bags</option>
//                   <option value="accessories">Accessories</option>
//                 </select>

//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="men">Men</option>
//                   <option value="women">Women</option>
//                   <option value="kids">Kids</option>
//                 </select>

//                 <input
//                   type="text"
//                   name="brand"
//                   placeholder="Brand"
//                   value={formData.brand}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Product Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   step="0.01"
//                   min="0"
//                   required
//                 />
//                 <input
//                   type="number"
//                   name="stock"
//                   placeholder="Stock"
//                   value={formData.stock}
//                   onChange={handleChange}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   min="0"
//                   required
//                 />
//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={handleChange}
//                   className="w-full mb-3"
//                 />
//               </>
//             ) : (
//               <>
//                 <select
//                   name="collection"
//                   value={lookbookData.collection}
//                   onChange={(e) => handleChange(e, true)}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Collection</option>
//                   <option value="clothing">Clothing</option>
//                   <option value="footwear">Footwear</option>
//                   <option value="bags">Bags</option>
//                   <option value="accessories">Accessories</option>
//                 </select>

//                 <select
//                   name="gender"
//                   value={lookbookData.gender}
//                   onChange={(e) => handleChange(e, true)}
//                   className="bg-gray-700 border p-2 w-full mb-2 rounded"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="men">Men</option>
//                   <option value="women">Women</option>
//                   <option value="kids">Kids</option>
//                 </select>

//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={(e) => handleChange(e, true)}
//                   className="w-full mb-3"
//                   required={!isEditing} // Image required only for new entries
//                 />
//               </>
//             )}

//             <div className="flex justify-between">
//               <button
//                 type="button"
//                 className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
//                 onClick={() => {
//                   setShowForm(false);
//                   setIsEditing(false);
//                 }}
//                 disabled={isSubmitting}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 disabled:opacity-60"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Saving..." : isEditing ? "Update" : "Save"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("products"); // products | lookbook
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Products state
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    collection: "",
    gender: "",
    brand: "",
    name: "",
    price: "",
    stock: "",
    image: null,
  });

  // Lookbook state
  const [lookbooks, setLookbooks] = useState([]);
  const [lookbookData, setLookbookData] = useState({
    collection: "",
    gender: "",
    image: null,
  });

  // Admin state
  const [admin, setAdmin] = useState({
    name: "Loading...",
    email: "Loading...",
    profilePic: "https://i.pravatar.cc/100?img=25",
  });
  const [adminLoading, setAdminLoading] = useState(true);

  const navigate = useNavigate();

  // Input change
  const handleChange = (e, isLookbook = false) => {
    const { name, value, files } = e.target;
    if (isLookbook) {
      setLookbookData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    }
  };

  // Fetch Admin Details with Retry
  const fetchAdmin = async () => {
    setAdminLoading(true);
    const maxRetries = 2;
    const retryDelay = 1000;

    const fetchWithRetry = async (url, options, retries) => {
      for (let i = 0; i <= retries; i++) {
        try {
          const res = await fetch(url, options);
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          const data = await res.json();
          return data;
        } catch (e) {
          if (i < retries) {
            await new Promise((resolve) => setTimeout(resolve, retryDelay));
            continue;
          }
          throw e;
        }
      }
    };

    try {
      let adminId = localStorage.getItem("adminId");
      if (!adminId || isNaN(parseInt(adminId))) {
        adminId = 1;
      }

      let data = await fetchWithRetry(
        `http://localhost/skincare_db/get_admin.php?id=${adminId}`,
        { method: "GET", headers: { "Content-Type": "application/json" } },
        maxRetries
      );

      if (data.success && data.admin) {
        setAdmin({
          name: data.admin.username || "Temporary Admin",
          email: data.admin.email || "No email provided",
          profilePic: "https://i.pravatar.cc/100?img=25",
        });
      } else {
        data = await fetchWithRetry(
          "http://localhost/skincare_db/get_first_admin.php",
          { method: "GET", headers: { "Content-Type": "application/json" } },
          maxRetries
        );

        if (data.success && data.admin) {
          setAdmin({
            name: data.admin.username || "Temporary Admin",
            email: data.admin.email || "No email provided",
            profilePic: "https://i.pravatar.cc/100?img=25",
          });
        } else {
          setAdmin({
            name: "Temporary Admin",
            email: "No email provided",
            profilePic: "https://i.pravatar.cc/100?img=25",
          });
        }
      }
    } catch (e) {
      try {
        const data = await fetchWithRetry(
          "http://localhost/skincare_db/get_first_admin.php",
          { method: "GET", headers: { "Content-Type": "application/json" } },
          maxRetries
        );

        if (data.success && data.admin) {
          setAdmin({
            name: data.admin.username || "Temporary Admin",
            email: data.admin.email || "No email provided",
            profilePic: "https://i.pravatar.cc/100?img=25",
          });
        } else {
          setAdmin({
            name: "Temporary Admin",
            email: "No email provided",
            profilePic: "https://i.pravatar.cc/100?img=25",
          });
        }
      } catch (fallbackError) {
        setAdmin({
          name: "Temporary Admin",
          email: "No email provided",
          profilePic: "https://i.pravatar.cc/100?img=25",
        });
      }
    } finally {
      setAdminLoading(false);
    }
  };

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost/skincare_db/get_products.php");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (e) {
      setError("⚠️ Could not fetch products.");
    }
  };

  // Fetch Lookbook
  const fetchLookbook = async () => {
    try {
      const res = await fetch("http://localhost/skincare_db/get_lookbook.php");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setLookbooks(Array.isArray(data) ? data : []);
    } catch (e) {
      setError("⚠️ Could not fetch lookbook.");
    }
  };

  useEffect(() => {
    fetchAdmin();
    fetchProducts();
    fetchLookbook();
  }, []);

  // Save / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    const isLookbook = activeTab === "lookbook";
    const formObj = isLookbook ? lookbookData : formData;

    if (isLookbook && !formObj.image && !isEditing) {
      setError("⚠️ Please select an image.");
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      Object.keys(formObj).forEach((k) => data.append(k, formObj[k]));
      if (isEditing) data.append("id", editId);

      const url = isLookbook
        ? isEditing
          ? "http://localhost/react_admin_db/update_lookbook.php"
          : "http://localhost/react_admin_db/add_lookbook.php"
        : isEditing
        ? "http://localhost/react_admin_db/update_product.php"
        : "http://localhost/react_admin_db/add_product.php";

      const res = await fetch(url, { method: "POST", body: data });
      const result = await res.json();

      if (!res.ok || !result.success) {
        setError(result.message || "❌ Save failed");
      } else {
        setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
        setShowForm(false);
        if (isLookbook) {
          setLookbookData({ collection: "", gender: "", image: null });
          await fetchLookbook();
        } else {
          setFormData({
            collection: "",
            gender: "",
            brand: "",
            name: "",
            price: "",
            stock: "",
            image: null,
          });
          await fetchProducts();
        }
        setIsEditing(false);
        setEditId(null);
      }
    } catch (err) {
      setError("⚠️ Server error while saving");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Confirmation
  const confirmDelete = (id) => {
    setItemToDelete(id);
    setShowConfirmModal(true);
  };

  // Delete
  const handleDelete = async () => {
    if (!itemToDelete) return;
    setShowConfirmModal(false);
    setMessage("");
    setError("");

    try {
      const url =
        activeTab === "lookbook"
          ? "http://localhost/react_admin_db/delete_lookbook.php"
          : "http://localhost/react_admin_db/delete_product.php";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${itemToDelete}`,
      });

      const result = await res.json();
      if (result.success) {
        if (activeTab === "lookbook") {
          setLookbooks(lookbooks.filter((l) => l.id !== itemToDelete));
        } else {
          setProducts(products.filter((p) => p.id !== itemToDelete));
        }
        setMessage("✅ Deleted!");
      } else {
        setError(result.message || "❌ Delete failed");
      }
    } catch (err) {
      setError("⚠️ Server error while deleting");
    } finally {
      setItemToDelete(null);
    }
  };

  // Edit
  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setEditId(item.id);

    if (activeTab === "lookbook") {
      setLookbookData({
        collection: item.collection || "",
        gender: item.gender || "",
        image: null,
      });
    } else {
      setFormData({
        collection: item.collection || "",
        gender: item.gender || "",
        brand: item.brand || "",
        name: item.name || "",
        price: item.price || "",
        stock: item.stock || "",
        image: null,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
      {/* Admin Panel Header */}
      <div className="flex items-center justify-between mb-8 bg-white rounded-xl shadow-lg p-6 border-b-2 border-gray-200">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={admin.profilePic}
              alt="admin"
              className="w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{admin.name}</h1>
            <p className="text-md text-gray-600 mt-1">{admin.email}</p>
            <p className="text-sm font-semibold text-green-600 mt-1 tracking-wide">Admin Panel</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === "products" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === "lookbook" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("lookbook")}
          >
            Lookbook
          </button>
          <button
            className="px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={() => navigate("/adminLookbook")}
          >
            Manage Lookbook & Gallery
          </button>
        </div>
      </div>

      {/* Alerts & Messages */}
      {message && (
        <div className="mb-6 p-4 rounded-lg bg-green-200 text-green-800 border-2 border-green-400 font-medium transition-all duration-300">
          {message}
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium transition-all duration-300">
          {error}
        </div>
      )}

      {/* Action Button */}
      <div className="mb-6">
        <button
          className="bg-gray-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);
            setEditId(null);
            activeTab === "lookbook"
              ? setLookbookData({ collection: "", gender: "", image: null })
              : setFormData({
                  collection: "",
                  gender: "",
                  brand: "",
                  name: "",
                  price: "",
                  stock: "",
                  image: null,
                });
          }}
        >
          <span className="font-semibold">+ Add {activeTab === "lookbook" ? "Lookbook" : "Product"}</span>
        </button>
      </div>

      {/* Products Table */}
      {activeTab === "products" && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Products Inventory</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr className="border-b-2 border-gray-300">
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Brand</th>
                  <th className="p-4 text-left">Collection</th>
                  <th className="p-4 text-left">Gender</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Stock</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="p-6 text-center text-gray-400">
                      No products available
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">{p.id}</td>
                      <td className="p-4">
                        <img
                          src={p.image_url}
                          alt={p.name}
                          className="w-14 h-14 object-cover rounded-md shadow-sm"
                        />
                      </td>
                      <td className="p-4 font-medium">{p.name}</td>
                      <td className="p-4">{p.brand}</td>
                      <td className="p-4">{p.collection}</td>
                      <td className="p-4">{p.gender}</td>
                      <td className="p-4 text-gray-600">Rs {Number(p.price).toFixed(2)}</td>
                      <td className="p-4">{p.stock}</td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleEdit(p)}
                          className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => confirmDelete(p.id)}
                          className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Lookbook Table */}
      {activeTab === "lookbook" && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Lookbook Images</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr className="border-b-2 border-gray-300">
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Collection</th>
                  <th className="p-4 text-left">Gender</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {lookbooks.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-6 text-center text-gray-400">
                      No lookbook entries available
                    </td>
                  </tr>
                ) : (
                  lookbooks.map((l) => (
                    <tr key={l.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">{l.id}</td>
                      <td className="p-4">
                        <img
                          src={l.image_url}
                          alt={`Lookbook ${l.id}`}
                          className="w-14 h-14 object-cover rounded-md shadow-sm"
                        />
                      </td>
                      <td className="p-4">{l.collection}</td>
                      <td className="p-4">{l.gender}</td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleEdit(l)}
                          className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => confirmDelete(l.id)}
                          className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg transform scale-100 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {isEditing
                ? `Edit ${activeTab === "lookbook" ? "Lookbook" : "Product"}`
                : `Add New ${activeTab === "lookbook" ? "Lookbook" : "Product"}`}
            </h3>

            {activeTab === "products" ? (
              <>
                <select
                  name="collection"
                  value={formData.collection}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                >
                  <option value="">Select Collection</option>
                  <option value="clothing">Clothing</option>
                  <option value="footwear">Footwear</option>
                  <option value="bags">Bags</option>
                  <option value="accessories">Accessories</option>
                </select>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>

                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  step="0.01"
                  min="0"
                  required
                />
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  min="0"
                  required
                />
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Image</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </div>
              </>
            ) : (
              <>
                <select
                  name="collection"
                  value={lookbookData.collection}
                  onChange={(e) => handleChange(e, true)}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                >
                  <option value="">Select Collection</option>
                  <option value="clothing">Clothing</option>
                  <option value="footwear">Footwear</option>
                  <option value="bags">Bags</option>
                  <option value="accessories">Accessories</option>
                </select>

                <select
                  name="gender"
                  value={lookbookData.gender}
                  onChange={(e) => handleChange(e, true)}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Image</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => handleChange(e, true)}
                    className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    required={!isEditing}
                  />
                </div>
              </>
            )}

            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
                onClick={() => {
                  setShowForm(false);
                  setIsEditing(false);
                }}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gray-900 rounded-full font-semibold text-white hover:bg-gray-700 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : isEditing ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2 bg-red-600 rounded-full font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;