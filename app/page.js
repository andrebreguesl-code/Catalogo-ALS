"use client";

import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Rede Casal Premium", price: 79.9 },
    { id: 2, name: "Manta Algodão Luxo", price: 99.9 },
    { id: 3, name: "Lençol Queen 3 Peças", price: 119.9 },
    { id: 4, name: "Toalha de Mesa PVC", price: 49.9 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const sendWhatsApp = () => {
    if (cart.length === 0) return;

    const message =
      "Olá! Quero comprar:%0A" +
      cart.map(p => `- ${p.name} R$ ${p.price}`).join("%0A");

    window.open(
      `https://wa.me/5583996355523?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white p-4 font-sans">

      {/* HEADER */}
      <header className="bg-green-600 text-white p-4 rounded-xl text-center">
        <h1 className="text-2xl font-bold">Catálogo ALS</h1>
        <p className="text-sm">Entregamos para todo o Brasil 🇧🇷</p>
      </header>

      {/* PRODUTOS */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {products.map((p) => (
          <div key={p.id} className="border rounded-xl p-2 shadow">
            <div className="h-20 bg-gray-200 rounded"></div>

            <h2 className="font-bold mt-2">{p.name}</h2>

            <p className="text-green-700 font-bold">
              R$ {p.price.toFixed(2)}
            </p>

            <button
              onClick={() => addToCart(p)}
              className="bg-green-600 text-white w-full mt-2 p-2 rounded"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>

      {/* BOTÃO WHATSAPP */}
      <button
        onClick={sendWhatsApp}
        className="fixed bottom-5 right-5 bg-green-700 text-white p-4 rounded-full shadow-xl"
      >
        WhatsApp ({cart.length})
      </button>

    </div>
  );
}
