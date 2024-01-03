package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.datatypes.Product;
import com.example.demo.services.CartService;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequiredArgsConstructor
@RestController
public class CartController {

    private final CartService cartService;

    @PostMapping("/addToCart")
    public void addToCart(@RequestBody Product product) {
        cartService.addToCart(product);
    }

    @PostMapping("/deleteFromCart")
    public void deleteFromCart(@RequestBody Product product) {
        System.out.println("delete " + product.getName());
        cartService.deleteFromCart(product);
    }

    @GetMapping("/cart")
    public List<Product> getCartProductList() {
        return cartService.getCartProductList();
    }

}
