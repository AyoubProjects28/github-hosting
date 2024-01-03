package com.example.demo.services;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.datatypes.Product;
import com.example.demo.exceptions.AppException;

@Service
public class ProductService {

        private final List<Product> productList = Arrays.asList(
                        new Product(1, "T-shirt", 19.99, "Top", "Men", new String[] { "S", "M", "L" },
                                        new String[] {
                                                        "https://assets.vogue.com/photos/5c6e80f08237212d6ee1bd3f/master/w_1920,c_limit/_FIO0227.jpg",
                                                        "https://assets.vogue.com/photos/5c6e808ad7f4fc2d663d322c/master/w_1920,c_limit/_FIO0030.jpg",
                                                        "https://assets.vogue.com/photos/5c6e80a257b95a2d61524979/master/w_1920,c_limit/_FIO0084.jpg" },
                                        "Red", "FashionSeller", "2023-01-01", 10),

                        new Product(2, "Jeans", 49.99, "Bottom", "Men",
                                        new String[] { "30x32", "32x32", "34x32" },
                                        new String[] {
                                                        "https://assets.vogue.com/photos/5c6e80a257b95a2d61524979/master/w_1920,c_limit/_FIO0084.jpg" },
                                        "Blue", "FashionSeller", "2023-01-02", 15),

                        new Product(3, "Dress", 39.99, "Top", "Women", new String[] { "S", "M", "L" },
                                        new String[] {
                                                        "https://assets.vogue.com/photos/5c6e808ad7f4fc2d663d322c/master/w_1920,c_limit/_FIO0030.jpg" },
                                        "Pink", "FashionSeller", "2023-01-03", 20),

                        new Product(4, "Running Shoes", 79.99, "Shoes", "Unisex",
                                        new String[] { "US 8", "US 9", "US 10" },
                                        new String[] {
                                                        "https://media.vogue.fr/photos/62288a131e172ef4df5c40cd/master/w_1600%2Cc_limit/00014-Dior-Mens-Fall-2022-Paris-credit-Filippo-Fior-GuRunway.jpg" },
                                        "Black",
                                        "SportswearSeller", "2023-01-04", 25),

                        new Product(5, "Winter Jacket", 99.99, "Top", "Men",
                                        new String[] { "M", "L", "XL" },
                                        new String[] { "https://www.tendances-de-mode.com/images/upload/1655886599.jpg" },
                                        "Green",
                                        "OuterwearSeller", "2023-01-05", 30),

                        new Product(6, "Hoodie", 59.99, "Top", "Men", new String[] { "M", "L", "XL" },
                                        new String[] {
                                                        "https://assets.vogue.com/photos/5c6e80f08237212d6ee1bd3f/master/w_1920,c_limit/_FIO0227.jpg" },
                                        "Gray", "FashionSeller", "2023-01-06", 15),

                        new Product(7, "Shorts", 29.99, "Bottom", "Women", new String[] { "S", "M", "L" },
                                        new String[] {
                                                        "https://assets.vogue.com/photos/5c6e80a257b95a2d61524979/master/w_1920,c_limit/_FIO0084.jpg" },
                                        "Black", "FashionSeller", "2023-01-07", 20),

                        new Product(8, "Sneakers", 69.99, "Shoes", "Children",
                                        new String[] { "US 5", "US 6", "US 7" },
                                        new String[] {
                                                        "https://assets.vogue.com/photos/5c6e808ad7f4fc2d663d322c/master/w_1920,c_limit/_FIO0030.jpg" },
                                        "Blue", "FashionSeller", "2023-01-08", 25),

                        new Product(9, "Dress Shirt", 34.99, "Top", "Men", new String[] { "S", "M", "L" },
                                        new String[] {
                                                        "https://media.vogue.fr/photos/62288a131e172ef4df5c40cd/master/w_1600%2Cc_limit/00014-Dior-Mens-Fall-2022-Paris-credit-Filippo-Fior-GuRunway.jpg" },
                                        "White", "FashionSeller", "2023-01-09", 30),

                        new Product(10, "Winter Boots", 89.99, "Shoes", "Women",
                                        new String[] { "US 8", "US 9", "US 10" },
                                        new String[] { "https://www.tendances-de-mode.com/images/upload/1655886599.jpg" },
                                        "Brown", "OuterwearSeller", "2023-01-10", 35),

                        new Product(11, "Skirt", 39.99, "Bottom", "Women", new String[] { "S", "M", "L" },
                                        new String[] {
                                                        "https://assets.vogue.com/photos/5c6e80f08237212d6ee1bd3f/master/w_1920,c_limit/_FIO0227.jpg" },
                                        "Yellow", "FashionSeller", "2023-01-11", 25),

                        new Product(12, "Sweatpants", 44.99, "Bottom", "Men",
                                        new String[] { "M", "L", "XL" },
                                        new String[] {
                                                        "https://assets.vogue.com/photos/5c6e80a257b95a2d61524979/master/w_1920,c_limit/_FIO0084.jpg" },
                                        "Gray", "FashionSeller", "2023-01-12", 20),

                        new Product(13, "Sandals", 24.99, "Shoes", "Children",
                                        new String[] { "US 5", "US 6", "US 7" },
                                        new String[] {
                                                        "https://assets.vogue.com/photos/5c6e808ad7f4fc2d663d322c/master/w_1920,c_limit/_FIO0030.jpg" },
                                        "Pink", "FashionSeller", "2023-01-13", 15),

                        new Product(14, "Jacket", 79.99, "Top", "Women", new String[] { "S", "M", "L" },
                                        new String[] {
                                                        "https://media.vogue.fr/photos/62288a131e172ef4df5c40cd/master/w_1600%2Cc_limit/00014-Dior-Mens-Fall-2022-Paris-credit-Filippo-Fior-GuRunway.jpg" },
                                        "Black", "OuterwearSeller", "2023-01-14", 30),

                        new Product(15, "Sweater", 54.99, "Top", "Men", new String[] { "M", "L", "XL" },
                                        new String[] { "https://www.tendances-de-mode.com/images/upload/1655886599.jpg" },
                                        "Blue", "FashionSeller", "2023-01-15", 25)

        );

        public List<Product> getProductList() {
                return productList;
        }

        public Product getProduct(Integer id) {
                Product product_found = productList.stream().filter(product -> id.equals(product.getId()))
                                .findFirst()
                                .orElseThrow(() -> new AppException("Product not found", HttpStatus.NOT_FOUND));
                return product_found;

        }

        public List<Product> getFilteredProducts(String category, String gender, String price, String size,
                        String seller) {
                return productList.stream()
                                .filter(product -> (category == null
                                                || product.getCategory().equalsIgnoreCase(category))
                                                && (gender == null || product.getGender().equalsIgnoreCase(gender))
                                                && (price == null || price.isEmpty()
                                                                || product.getPrice() < Integer.parseInt(price))
                                                && (size == null || size.isEmpty()
                                                                || containsSize(product.getSizes(), size))
                                                && (seller == null || seller.isEmpty()
                                                                || product.getSeller().equalsIgnoreCase(seller)))
                                .collect(Collectors.toList());
        }

        private boolean containsSize(String[] sizes, String targetSize) {
                if (sizes != null && targetSize != null) {
                        for (String size : sizes) {
                                if (size.equalsIgnoreCase(targetSize)) {
                                        return true;
                                }
                        }
                }
                return false;
        }

}
