export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchProductById = async (id: any) => {
  try {
    const response = await fetch("https://dummyjson.com/products/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchProductsCategories = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category: string) => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/" + category
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchDataAllItem = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/?limit=100");
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
