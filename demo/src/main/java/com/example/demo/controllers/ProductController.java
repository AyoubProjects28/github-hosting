package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.HandlerMapping;

import com.example.demo.datatypes.Product;
import com.example.demo.services.ProductService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RequiredArgsConstructor
@RestController
public class ProductController {

    private final ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProduct() {
        return ResponseEntity.ok(productService.getProductList());
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Integer id) {
        return ResponseEntity.ok(productService.getProduct(id));
    }

    @GetMapping("/products/{param1}/**")
    public List<Product> getProductsByPath(@PathVariable("param1") String param1,
            HttpServletRequest request) {

        String restOfTheUrl = new AntPathMatcher().extractPathWithinPattern(
                request.getAttribute(HandlerMapping.BEST_MATCHING_PATTERN_ATTRIBUTE).toString(),
                request.getRequestURI());

        String allParams = param1 + "/" + restOfTheUrl;
        String[] paramArray = allParams.split("/");

        // Initialize variables for all parameters
        String category = null;

        String gender = null;
        String price = null;
        String size = null;
        String seller = null;

        // Extract parameter values based on the URL structure
        for (int i = 0; i < paramArray.length; i += 2) {
            if (i + 1 < paramArray.length) {
                String paramName = paramArray[i];
                String paramValue = paramArray[i + 1];

                // Switch to assign values to corresponding variables based on parameter names
                switch (paramName) {
                    case "category":
                        category = paramValue;
                        break;
                    case "gender":
                        gender = paramValue;
                        break;
                    case "price":
                        price = paramValue;
                        break;
                    case "size":
                        size = paramValue;
                        break;
                    case "seller":
                        seller = paramValue;
                        break;
                    // Add more cases for additional parameters if necessary
                }
            }
        }

        // Example of using the ProductService to get filtered products
        return productService.getFilteredProducts(category, gender, price, size, seller);
    }

}
