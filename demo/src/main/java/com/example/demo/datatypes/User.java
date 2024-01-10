package com.example.demo.datatypes;

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
public class User {
    private long id;
    private String name;
    private String address; // Utilisé à la place de username
    private String password;
    private String info;

    // Constructeur, getters et setters
}
