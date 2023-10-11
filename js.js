
class ProductsService {
  static async getAllProducts() {
    const url = new URL('https://dummyjson.com/products');
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Усі продукти:', data);
    } catch (e) {
      console.log(e);
    }
  }

  static async getSingleProduct(productId) {
    try {
      const url = new URL(`https://dummyjson.com/products/${productId}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log('Один продукт:', data);
    } catch (e) {
      console.log(e);
    }
    }
    static async searchProducts(query = 'phone') {
    try {
      const params = new URLSearchParams();
      params.append('q', query);
      const url = new URL(`https://dummyjson.com/products/search?${params}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log('Результати пошуку продуктів:', data);
    } catch (e) {
      console.log(e);
    }
  }

  static async limitAndSkipProducts() {
    try {
    const url = new URL('https://dummyjson.com/products');
    url.searchParams.set('limit', '10');
    url.searchParams.set('skip', '10');
    url.searchParams.set('select', 'title,price');

    const response = await fetch(url);
    const data = await response.json();
    console.log(`Обмежено ${url.searchParams.get('limit')} продуктів, пропущено ${url.searchParams.get('skip')} продуктів:`, data);
    } catch (e) {
      console.log(e);
    }
  }

  static async getAllCategories() {
    try {
      const url = new URL('https://dummyjson.com/products/categories');
      const response = await fetch(url);
      const data = await response.json();
      console.log('Усі категорії продуктів:', data);
    } catch (e) {
      console.log(e);
    }
  }

  static async getProductsOfCategory(categoryId=smartphones) {
    try {
      const url = new URL(`https://dummyjson.com/products/categories/${categoryId}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log(`Продукти категорії з ID ${categoryId}:`, data);
    } catch (e) {
      console.log(e);
    }
  }

  static async addProduct(newProduct) {
      try {
      newProduct.title = 'BMW Pencil';
      const url = new URL(`https://dummyjson.com/products/add`);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      console.log('Продукт успішно доданий:', data);
    } catch (e) {
      console.log(e);
    }
  }

  static async updateProduct(productId, updatedProduct) {
    try {
      const url = new URL(`https://dummyjson.com/products/1`);
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
            title: 'iPhone Galaxy +1'
        }),
      });
      const data = await response.json();
      console.log('Продукт успішно оновлено:', data);
    } catch (e) {
      console.log(e);
    }
  }

static async deleteProducts(productIds) {
  const deletePromises = productIds.map(productId => {
    return new Promise(async (resolve, reject) => {
      try {
        const url = new URL(`https://dummyjson.com/products/${productId}`);
        await fetch(url, {
          method: 'DELETE',
        });
        resolve(`Продукт ${productId} успішно видалено`);
      } catch (e) {
        reject(`Помилка при видаленні продукта ${productId}: ${e}`);
      }
    });
  });

  Promise.all(deletePromises)
    .then(results => {
      results.forEach(result => {
        console.log(result);
      });
    })
    .catch(error => {
      console.log(`Помилка при видаленні продуктів: ${error}`);
    });
}
}


ProductsService.getAllProducts();
ProductsService.getSingleProduct(1);
ProductsService.searchProducts('phone');
ProductsService.limitAndSkipProducts(10, 20);
ProductsService.getAllCategories();
ProductsService.getProductsOfCategory(1);
ProductsService.addProduct({
  name: 'Новий продукт',
  price: 19.99,
});
ProductsService.updateProduct(1, {
  name: 'Оновлений продукт',
  price: 24.99,
});
ProductsService.deleteProducts([1, 2, 3, 4, 5]);


