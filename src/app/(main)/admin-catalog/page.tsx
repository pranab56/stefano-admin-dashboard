"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Plus, Save, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
  status: "Active" | "Inactive";
  image: string;
}

const INITIAL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Château Margaux 2015",
    stock: 24,
    price: 850,
    status: "Active",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1341&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Dom Pérignon Vintage 2012",
    stock: 36,
    price: 220,
    status: "Active",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1341&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Penfolds Grange 2016",
    stock: 18,
    price: 680,
    status: "Active",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1341&auto=format&fit=crop",
  },
];

export default function AdminCatalogPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form states
  const [formName, setFormName] = useState("");
  const [formStock, setFormStock] = useState<number>(0);
  const [formPrice, setFormPrice] = useState<number>(0);
  const [formStatus, setFormStatus] = useState<"Active" | "Inactive">("Active");
  const [formImage, setFormImage] = useState("");

  const openAddModal = () => {
    setEditingProduct(null);
    setFormName("");
    setFormStock(0);
    setFormPrice(0);
    setFormStatus("Active");
    setFormImage("");
    setIsModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormName(product.name);
    setFormStock(product.stock);
    setFormPrice(product.price);
    setFormStatus(product.status);
    setFormImage(product.image);
    setIsModalOpen(true);
  };

  const saveProduct = () => {
    if (editingProduct) {
      // Update
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? { ...p, name: formName, stock: formStock, price: formPrice, status: formStatus, image: formImage }
            : p
        )
      );
    } else {
      // Create
      const newProduct: Product = {
        id: Math.random().toString(36).substr(2, 9),
        name: formName,
        stock: formStock,
        price: formPrice,
        status: formStatus,
        image: formImage || "https://images.unsplash.com/photo-1510850438980-282314a7547e?q=80&w=1470&auto=format&fit=crop", // placeholder
      };
      setProducts([...products, newProduct]);
    }
    setIsModalOpen(false);
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#1E1F26]">My Exclusive Catalog</h1>
        <Button
          onClick={openAddModal}
          className="bg-[#D3AB50] hover:bg-[#B89442] text-white px-6 h-11 rounded-xl flex items-center gap-2 font-semibold shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="border-none shadow-sm bg-white overflow-hidden rounded-2xl group transition-all duration-300 hover:shadow-md p-0">
            {/* Image section with delete option on hover */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-white/90 hover:bg-red-50 text-red-500 p-2 rounded-full shadow-lg transition-colors border border-red-100"
                  title="Delete Product"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <CardContent className="p-6 space-y-5">
              <h3 className="text-lg font-bold text-[#1E1F26] line-clamp-1">{product.name}</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6C757D] font-medium">Stock:</span>
                  <span className="text-[#1E1F26] font-semibold">{product.stock} bottles</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6C757D] font-medium">Auto-Accept:</span>
                  <span className="text-[#D3AB50] font-bold">€{product.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6C757D] font-medium">Status:</span>
                  <Badge className="bg-[#D1FAE5] text-[#10B981] border-none px-3 py-0.5 font-semibold rounded-full text-xs hover:bg-[#D1FAE5]">
                    {product.status}
                  </Badge>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full h-11 border-[#D3AB50] text-[#D3AB50] hover:bg-[#D3AB50] hover:text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all mt-6"
                onClick={() => openEditModal(product)}
              >
                <Pencil className="w-4 h-4" />
                Edit Product
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CRUD Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] rounded-2xl bg-white p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-bold text-[#1E1F26]">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-2">
            <div className="space-y-2">
              <Label htmlFor="productName" className="text-sm font-semibold text-gray-500 px-1">Product Name</Label>
              <Input
                id="productName"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Enter wine name..."
                className="h-12 bg-[#FCFBF8] border-gray-100 rounded-xl focus:ring-[#D3AB50]"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-semibold text-gray-500 px-1">Product Image</Label>
              
              <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed border-gray-100 rounded-2xl bg-[#FCFBF8] transition-all hover:border-[#D3AB50]/50 group">
                {formImage ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
                    <Image src={formImage} alt="Preview" fill className="object-cover" unoptimized />
                    <button 
                      onClick={() => setFormImage("")}
                      className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full shadow-lg text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#D3AB50] group-hover:scale-110 transition-transform">
                      <Plus className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#1E1F26]">Upload product image</p>
                      <p className="text-xs text-gray-400">Click to select from your local files</p>
                    </div>
                  </div>
                )}
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormImage(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="absolute inset-x-8 h-32 opacity-0 cursor-pointer"
                  style={{ top: "auto" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="stock" className="text-sm font-semibold text-gray-500 px-1">Stock (bottles)</Label>
                <Input
                  id="stock"
                  type="number"
                  value={formStock}
                  onChange={(e) => setFormStock(parseInt(e.target.value) || 0)}
                  className="h-12 bg-[#FCFBF8] border-gray-100 rounded-xl focus:ring-[#D3AB50]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price" className="text-sm font-semibold text-gray-500 px-1">Price (€)</Label>
                <Input
                  id="price"
                  type="number"
                  value={formPrice}
                  onChange={(e) => setFormPrice(parseInt(e.target.value) || 0)}
                  className="h-12 bg-[#FCFBF8] border-gray-100 rounded-xl focus:ring-[#D3AB50]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-500 px-1">Status</Label>
              <div className="flex gap-4">
                <button
                  onClick={() => setFormStatus("Active")}
                  className={`flex-1 h-11 rounded-xl font-medium text-sm transition-all border ${formStatus === "Active"
                      ? "bg-[#D1FAE5] text-[#10B981] border-[#10B981]"
                      : "bg-[#FCFBF8] text-gray-400 border-gray-100"
                    }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setFormStatus("Inactive")}
                  className={`flex-1 h-11 rounded-xl font-medium text-sm transition-all border ${formStatus === "Inactive"
                      ? "bg-[#FEE2E2] text-[#EF4444] border-[#EF4444]"
                      : "bg-[#FCFBF8] text-gray-400 border-gray-100"
                    }`}
                >
                  Inactive
                </button>
              </div>
            </div>
          </div>

          <DialogFooter className="mt-8 flex gap-3">
            <Button
              variant="ghost"
              onClick={() => setIsModalOpen(false)}
              className="flex-1 h-12 rounded-xl text-gray-500 font-semibold"
            >
              Cancel
            </Button>
            <Button
              onClick={saveProduct}
              className="flex-1 bg-[#D3AB50] hover:bg-[#B89442] text-white h-12 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              {editingProduct ? "Update Product" : "Save Product"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
