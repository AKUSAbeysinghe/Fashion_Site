import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LookbookAdmin = () => {
  const [activeTab, setActiveTab] = useState("gallery");
  const [gallery, setGallery] = useState([]);
  const [galleryForm, setGalleryForm] = useState({ image: null });
  const [isGalleryEditing, setIsGalleryEditing] = useState(false);
  const [galleryEditId, setGalleryEditId] = useState(null);
  const [showcase, setShowcase] = useState([]);
  const [showcaseForm, setShowcaseForm] = useState({ image: null });
  const [isShowcaseEditing, setIsShowcaseEditing] = useState(false);
  const [showcaseEditId, setShowcaseEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [admin, setAdmin] = useState({
    name: "Loading...",
    email: "Loading...",
    profilePic: "https://i.pravatar.cc/100?img=25",
  });
  const [adminLoading, setAdminLoading] = useState(true);

  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { files } = e.target;
    if (activeTab === "gallery") {
      setGalleryForm({ image: files ? files[0] : null });
    } else {
      setShowcaseForm({ image: files ? files[0] : null });
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
      if (!adminId || isNaN(parseInt(adminId))) adminId = 1;

      let data = await fetchWithRetry(
        `http://localhost/react_admin_db/get_admin.php?id=${adminId}`,
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
          "http://localhost/react_admin_db/get_first_admin.php",
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
      console.error("Admin fetch error:", e.message);
      setAdmin({
        name: "Temporary Admin",
        email: "No email provided",
        profilePic: "https://i.pravatar.cc/100?img=25",
      });
    } finally {
      setAdminLoading(false);
    }
  };

  // Fetch Gallery
  const fetchGallery = async () => {
    try {
      const res = await fetch("http://localhost/react_admin_db/get_gallery.php");
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      console.log("Fetched gallery data:", data);
      setGallery(Array.isArray(data) ? data : []);
      if (!data.length) setError("No gallery images found.");
    } catch (e) {
      console.error("Fetch gallery error:", e);
      setError("⚠️ Could not fetch gallery images.");
    }
  };

  // Fetch Showcase
  const fetchShowcase = async () => {
    try {
      const res = await fetch("http://localhost/react_admin_db/get_showcase.php");
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      console.log("Fetched showcase data:", data);
      setShowcase(Array.isArray(data) ? data : []);
      if (!data.length) setError("No showcase images found.");
    } catch (e) {
      console.error("Fetch showcase error:", e);
      setError("⚠️ Could not fetch showcase images.");
    }
  };

  useEffect(() => {
    fetchAdmin();
    fetchGallery();
    fetchShowcase();
  }, []);

  // Save / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    const isGalleryTab = activeTab === "gallery";
    const form = isGalleryTab ? galleryForm : showcaseForm;
    const isEditing = isGalleryTab ? isGalleryEditing : isShowcaseEditing;
    const editId = isGalleryTab ? galleryEditId : showcaseEditId;

    const formData = new FormData();
    if (form.image) formData.append("image", form.image);
    if (isEditing) formData.append("id", editId);

    console.log("Submitting FormData for", isGalleryTab ? "Gallery" : "Showcase", {
      image: form.image ? form.image.name : null,
      id: isEditing ? editId : null,
    });

    const url = isGalleryTab
      ? isEditing
        ? "http://localhost/react_admin_db/update_gallery.php"
        : "http://localhost/react_admin_db/add_gallery.php"
      : isEditing
      ? "http://localhost/react_admin_db/update_showcase.php"
      : "http://localhost/react_admin_db/add_showcase.php";

    try {
      const res = await fetch(url, { method: "POST", body: formData });
      const result = await res.json();
      console.log("Backend response:", result);

      if (!res.ok || !result.success) {
        setError(result.message || `❌ Save failed (Status: ${res.status})`);
      } else {
        setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
        setShowForm(false);
        if (isGalleryTab) {
          setGalleryForm({ image: null });
          setIsGalleryEditing(false);
          setGalleryEditId(null);
          setGallery((prev) =>
            isEditing
              ? prev.map((g) =>
                  g.id === editId ? { ...g, image_url: result.image_url } : g
                )
              : [...prev, result.newItem]
          );
        } else {
          setShowcaseForm({ image: null });
          setIsShowcaseEditing(false);
          setShowcaseEditId(null);
          setShowcase((prev) =>
            isEditing
              ? prev.map((s) =>
                  s.id === editId ? { ...s, image_url: result.image_url } : s
                )
              : [...prev, result.newItem]
          );
        }
      }
    } catch (e) {
      console.error("Submit error:", e.message);
      setError(`⚠️ Server error while saving: ${e.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete
  const handleDelete = async () => {
    if (!itemToDelete) return;
    setShowConfirmModal(false);
    setMessage("");
    setError("");

    const url = activeTab === "gallery"
      ? "http://localhost/react_admin_db/delete_gallery.php"
      : "http://localhost/react_admin_db/delete_showcase.php";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${itemToDelete}`,
      });
      const result = await res.json();
      console.log("Delete response:", result);
      if (result.success) {
        if (activeTab === "gallery") {
          setGallery(gallery.filter((item) => item.id !== itemToDelete));
        } else {
          setShowcase(showcase.filter((item) => item.id !== itemToDelete));
        }
        setMessage("✅ Deleted!");
      } else {
        setError(result.message || `❌ Delete failed (Status: ${res.status})`);
      }
    } catch (e) {
      console.error("Delete error:", e);
      setError(`⚠️ Server error while deleting: ${e.message}`);
    } finally {
      setItemToDelete(null);
    }
  };

  // Edit
  const handleEdit = (item) => {
    setShowForm(true);
    if (activeTab === "gallery") {
      setIsGalleryEditing(true);
      setGalleryEditId(item.id);
      setGalleryForm({ image: null });
    } else {
      setIsShowcaseEditing(true);
      setShowcaseEditId(item.id);
      setShowcaseForm({ image: null });
    }
  };

  // Render Table
  const renderTable = (items, label) => (
    <div className="bg-gray-100 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{label}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr className="border-b-2 border-gray-300">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-6 text-center text-gray-400">
                  No {label.toLowerCase()} available
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={`${label} ${item.id}`}
                        className="w-14 h-14 object-cover rounded-md shadow-sm"
                      />
                    ) : (
                      <span className="text-gray-600">No image uploaded</span>
                    )}
                  </td>
                  <td className="p-4 space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-500 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setItemToDelete(item.id);
                        setShowConfirmModal(true);
                      }}
                      className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-500 transition-colors"
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
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 pt-16 font-sans">
      <div className="flex items-center justify-between mb-8 bg-gray-100 rounded-xl shadow-lg p-6 border-b-2 border-gray-200">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={admin.profilePic}
              alt="admin"
              className="w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-amber-600 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              {adminLoading ? "Loading..." : admin.name}
            </h1>
            <p className="text-md text-gray-500 mt-1">{admin.email}</p>
            <p className="text-sm font-semibold text-amber-600 mt-1 tracking-wide">
              Gallery & Showcase Admin Panel
            </p>
          </div>
        </div>
        <button
          className="px-8 py-3 rounded-full font-semibold text-lg bg-amber-600 text-white hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
          onClick={() => navigate("/admin")}
        >
          Manage Products & Lookbooks
        </button>
      </div>

      <div className="flex mb-6 space-x-4">
        <button
          onClick={() => setActiveTab("gallery")}
          className={`px-6 py-2 rounded-full font-semibold ${
            activeTab === "gallery"
              ? "bg-amber-600 text-white"
              : "bg-gray-200 text-gray-800"
          } hover:bg-amber-500 hover:text-white transition-colors`}
        >
          Gallery
        </button>
        <button
          onClick={() => setActiveTab("productShowcase")}
          className={`px-6 py-2 rounded-full font-semibold ${
            activeTab === "productShowcase"
              ? "bg-amber-600 text-white"
              : "bg-gray-200 text-gray-800"
          } hover:bg-amber-500 hover:text-white transition-colors`}
        >
          Product Showcase
        </button>
      </div>

      {message && (
        <div className="mb-6 p-4 rounded-lg bg-green-200 text-green-800 border-2 border-green-400 font-medium">
          {message}
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium">
          {error}
        </div>
      )}

      <div className="mb-6">
        <button
          className="bg-amber-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            setShowForm(true);
            if (activeTab === "gallery") {
              setIsGalleryEditing(false);
              setGalleryEditId(null);
              setGalleryForm({ image: null });
            } else {
              setIsShowcaseEditing(false);
              setShowcaseEditId(null);
              setShowcaseForm({ image: null });
            }
          }}
        >
          <span className="font-semibold">
            + Add {activeTab === "gallery" ? "Gallery Image" : "Showcase Image"}
          </span>
        </button>
      </div>

      {activeTab === "gallery"
        ? renderTable(gallery, "Gallery Images")
        : renderTable(showcase, "Product Showcase")}

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-60 p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 text-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {activeTab === "gallery"
                ? isGalleryEditing
                  ? "Edit Gallery Image"
                  : "Add New Gallery Image"
                : isShowcaseEditing
                ? "Edit Showcase Image"
                : "Add New Showcase Image"}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-600">Image</label>
              <input
                type="file"
                name="image"
                accept="image/jpeg,image/png,image/gif,image/bmp,image/webp"
                onChange={handleChange}
                className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-800 hover:file:bg-gray-300"
              />
              {(activeTab === "gallery" && galleryForm.image) ||
              (activeTab === "productShowcase" && showcaseForm.image) ? (
                <img
                  src={URL.createObjectURL(
                    activeTab === "gallery" ? galleryForm.image : showcaseForm.image
                  )}
                  alt="Preview"
                  className="mt-4 w-32 h-32 object-cover rounded-lg shadow-md"
                />
              ) : null}
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
                onClick={() => setShowForm(false)}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-amber-600 rounded-full font-semibold text-white hover:bg-amber-500 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Saving..."
                  : activeTab === "gallery"
                  ? isGalleryEditing
                    ? "Update"
                    : "Save"
                  : isShowcaseEditing
                  ? "Update"
                    : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-60 p-4">
          <div className="bg-gray-100 rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this image? This action cannot be undone.
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
                className="px-6 py-2 bg-red-600 rounded-full font-semibold text-white hover:bg-red-500 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        html, body {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default LookbookAdmin;