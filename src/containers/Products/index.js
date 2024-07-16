import React, { useState, useEffect } from 'react';
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles';
import ProductsImage from '../../assets/products-image.svg';
import api from '../../services/api';
import { CardProduct } from '../../components';
import formatCurrency from '../../utils/formatCurrency';
import { useLocation } from 'react-router-dom';

export function Products() {
  const location = useLocation();
  const categoryIdFromState = location.state?.categoryId ?? 0;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryIdFromState);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      // Use the spread operator to create a new category called "All" with id 0 and still have all categories
      const newCategories = [{ id: 0, name: 'Todos' }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('products');

      const newData = data.map(product => ({
        ...product,
        formatedPrice: formatCurrency(product.price),
      }));

      setProducts(newData);
    }

    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(product => product.category_id === activeCategory);
      setFilteredProducts(newFilteredProducts);
    }
  }, [activeCategory, products]);

  useEffect(() => {
    if (categoryIdFromState !== 0) {
      setActiveCategory(categoryIdFromState);
    }
  }, [categoryIdFromState]);

  return (
    <Container>
      <ProductsImg src={ProductsImage} alt="Products Image" />
      <CategoriesMenu>
        {categories && categories.map(category => (
          <CategoryButton
            key={category.id}
            onClick={() => { setActiveCategory(category.id); }}
            isActiveCategory={activeCategory === category.id}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts && filteredProducts.map(product => (
          // Sending product via props
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}