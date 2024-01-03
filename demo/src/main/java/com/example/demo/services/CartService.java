package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.datatypes.Product;

@Service
public class CartService {

    private final List<Product> cartProductList = new ArrayList<>();

    public void addToCart(Product product) {
        cartProductList.add(product);
    }

    public List<Product> getCartProductList() {
        return cartProductList;
    }

    public void deleteFromCart(Product product) {
        int productIdToRemove = product.getId();

        for (Product currentProduct : cartProductList) {
            if (currentProduct.getId() == productIdToRemove) {
                cartProductList.remove(currentProduct);
                System.out.println("Product with ID " + productIdToRemove + " removed successfully");
                return;
            }
        }
    }
}
