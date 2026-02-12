import { addProduct, deleteAllProducts } from "./product.service";

const seedProducts = [
  { name: "Gold Bracelet", brand: "Traditional", price: 4500, quantity: 12, image: "/img/products/f1.jpeg", status: "Active" as const, description: "Handcrafted gold bracelet with traditional design" },
  { name: "Necklace Set", brand: "Traditional", price: 18000, quantity: 8, image: "/img/products/f2.jpeg", status: "Active" as const, description: "Elegant traditional necklace set" },
  { name: "Diamond Earrings", brand: "Modern", price: 12000, quantity: 5, image: "/img/products/f3.jpeg", status: "Active" as const, description: "Sparkling diamond earrings with modern design" },
  { name: "Stud Earrings", brand: "Modern", price: 3500, quantity: 20, image: "/img/products/f4.jpeg", status: "Active" as const, description: "Simple and elegant stud earrings" },
  { name: "Bridal Necklace", brand: "Bridal", price: 55000, quantity: 3, image: "/img/products/f5.jpeg", status: "Active" as const, description: "Exquisite bridal necklace for the special day" },
  { name: "Silver Rings", brand: "Minimal", price: 2500, quantity: 15, image: "/img/products/f6.jpeg", status: "Active" as const, description: "Minimalist silver ring set" },
  { name: "Choker Set", brand: "Bridal", price: 22000, quantity: 6, image: "/img/products/f7.jpeg", status: "Active" as const, description: "Beautiful bridal choker set" },
  { name: "Bangles Set", brand: "Traditional", price: 8000, quantity: 10, image: "/img/products/f8.jpeg", status: "Active" as const, description: "Traditional bangles set in gold" },
  { name: "Designer Necklace", brand: "Designer", price: 40000, quantity: 4, image: "/img/products/f10.jpeg", status: "Active" as const, description: "Premium designer necklace" },
  { name: "Pearl Earrings", brand: "Classic", price: 6000, quantity: 14, image: "/img/products/n1.jpeg", status: "Active" as const, description: "Classic pearl earrings" },
  { name: "Gold Bracelet Deluxe", brand: "Traditional", price: 5000, quantity: 9, image: "/img/products/n2.jpeg", status: "Active" as const, description: "Deluxe gold bracelet" },
  { name: "Bridal Set", brand: "Bridal", price: 65000, quantity: 2, image: "/img/products/n3.jpeg", status: "Active" as const, description: "Complete bridal jewellery set" },
  { name: "Jewellery Flatlay", brand: "Collection", price: 15000, quantity: 7, image: "/img/products/n4.jpeg", status: "Active" as const, description: "Curated jewellery collection" },
  { name: "Gemstone Earrings", brand: "Designer", price: 9000, quantity: 11, image: "/img/products/n5.jpeg", status: "Active" as const, description: "Designer gemstone earrings" },
  { name: "Traditional Bangles", brand: "Traditional", price: 7000, quantity: 13, image: "/img/products/n6.jpeg", status: "Active" as const, description: "Traditional design bangles" },
  { name: "Model Jewellery Set", brand: "Fashion", price: 25000, quantity: 5, image: "/img/products/n7.jpeg", status: "Active" as const, description: "Fashion-forward jewellery set" },
  { name: "Gold Kada", brand: "Traditional", price: 8500, quantity: 8, image: "/img/products/n8.jpeg", status: "Active" as const, description: "Traditional gold kada" },
  { name: "Embroidered Box Set", brand: "Gift", price: 3000, quantity: 18, image: "/img/products/n9.jpeg", status: "Active" as const, description: "Gift-ready embroidered box set" },
  { name: "Leaf Design Earrings", brand: "Minimal", price: 2000, quantity: 22, image: "/img/products/n10.jpeg", status: "Active" as const, description: "Minimal leaf design earrings" },
];

export async function seedDatabase() {
  await deleteAllProducts();
  for (const product of seedProducts) {
    await addProduct(product);
  }
  console.log("Seeded", seedProducts.length, "products");
}
