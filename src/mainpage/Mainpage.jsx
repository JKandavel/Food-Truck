import React, { useState, useEffect, useRef } from "react";
import "./mainpage.css";
import image from "../Json/image.json";
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const sectionRefs = useRef({});
  const categories = [
    "All",
    "Popular",
    "%Offer",
    "Mexican",
    "Burger",
    "Pizza",
    "BBQ",
    "Chicken",
    "Asian",
    "Italian",
    "Healthy",
    "Desert",
  ];

 
  const updateCartCount = () => {
    const raw = localStorage.getItem("ft_cart");
    const cartArr = raw ? JSON.parse(raw) : [];
    const totalItems = cartArr.reduce((sum, item) => sum + (item.qty || 1), 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();

    const handler = () => updateCartCount();
    window.addEventListener("ft_cart_updated", handler);
    return () => window.removeEventListener("ft_cart_updated", handler);
  }, []);

  
  const addToCart = (product) => {
    try {
      const raw = localStorage.getItem("ft_cart");
      const cartArr = raw ? JSON.parse(raw) : [];
      const idx = cartArr.findIndex((p) => p.id === product.id);
      if (idx >= 0) {
        cartArr[idx].qty = (cartArr[idx].qty || 0) + 1;
      } else {
        const price =
          typeof product.Price === "number"
            ? product.Price
            : parseFloat(product.Price) || 0;
        cartArr.push({ ...product, Price: price, qty: 1 });
      }
      localStorage.setItem("ft_cart", JSON.stringify(cartArr));
      window.dispatchEvent(new Event("ft_cart_updated"));
    } catch (err) {
      console.error("addToCart error:", err);
    }
  };

  const filteredItems = image.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      item.category?.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });


  const goToCart = () => navigate("/cart");

  useEffect(() => {
    if (selectedCategory !== "All" && sectionRefs.current[selectedCategory]) {
      sectionRefs.current[selectedCategory].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedCategory]);

  
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const foundItem = image.find((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (foundItem && foundItem.category) {
        setSelectedCategory(foundItem.category);
      }
    } else {
      setSelectedCategory("All");
    }
  }, [searchTerm]);

  return (
    <>
      {/* 🔝 Top Navbar */}
      <nav>
        <input
          type="text"
          placeholder="Search for dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* 🛒 Cart Button with Live Count */}
        <button onClick={goToCart} className="cart-btn">
          🛒 Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </nav>

      {/* 🧭 Category Navbar */}
      <div className="anchor">
        {categories.map((category) => (
          <a
            key={category}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSearchTerm("");
              setSelectedCategory(category);
            }}
            className={
              selectedCategory === category ? "nav-item active" : "nav-item"
            }
          >
            {category}
          </a>
        ))}
      </div>

      
      <div className="mainheroo">
        <h2>{selectedCategory} Items</h2>
        <p>{filteredItems.length} Item(s) Available</p>

        <div className="menucard">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                className="rowone"
                key={item.id}
                ref={(el) => {
                  if (item.category) sectionRefs.current[item.category] = el;
                }}
              >
                <div className="itemone">
                  <img src={item.image} alt={item.name} />
                  <p className="names">{item.name}</p>
                  <p>
                    Delicious {item.name} freshly made and served hot from our
                    food truck!
                  </p>
                  <span>₹{item.Price}</span>{" "}
                  <mark>₹{Number(item.Price) + 30}</mark>
                  <br />
                  <span>
                    <button onClick={() => addToCart(item)}>+Add</button>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No items found 😕</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Mainpage;
