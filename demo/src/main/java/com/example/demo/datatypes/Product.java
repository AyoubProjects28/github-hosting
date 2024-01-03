package com.example.demo.datatypes;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
public class Product {

    @NotNull
    private int id;
    @NotNull
    private String name;
    @NotNull
    private double price;
    @NotNull
    private String category;
    @NotNull
    private String gender;
    @NotNull
    private String[] sizes;
    @NotNull
    private String[] images;
    @NotNull
    private String color;
    @NotNull
    private String seller;
    @NotNull
    private String addedDate;
    @NotNull
    private int stock;

}
