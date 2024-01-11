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
public class User {
    @NotNull
    private long id;
    @NotNull
    private String name;
    @NotNull
    private String address; // Utilisé à la place de username
    @NotNull
    private String password;
    @NotNull
    private String info;
}
