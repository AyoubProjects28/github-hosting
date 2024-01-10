package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.datatypes.AuthRequest;
import com.example.demo.datatypes.User;

@Service
public class AuthService {

    private final List<User> userList = new ArrayList<>();

    public AuthService() {
        userList.add(new User(1, "John Doe", "john@example.com", "password123", "Some user info"));
        userList.add(new User(2, "Jane Doe", "jane@example.com", "password456", "Some other user info"));
        userList.add(new User(3, "Alice Smith", "alice@example.com", "password789", "Additional user info"));
        userList.add(new User(4, "Bob Johnson", "bob@example.com", "passwordABC", "More user info"));
        userList.add(new User(5, "Eva Brown", "eva@example.com", "passwordXYZ", "Extra user info"));
    }

    public ResponseEntity<String> loginUser(AuthRequest authRequest) {
        // Récupérez les informations d'identification de la requête
        String username = authRequest.getUsername();
        String password = authRequest.getPassword();

        // Recherchez l'utilisateur dans la liste par adresse e-mail (utilisée à la
        // place de username)
        User foundUser = userList.stream()
                .filter(user -> user.getAddress().equals(username))
                .findFirst()
                .orElse(null);

        // Vérifiez si l'utilisateur a été trouvé et si le mot de passe correspond
        if (foundUser != null && foundUser.getPassword().equals(password)) {
            // L'utilisateur a été authentifié avec succès
            return ResponseEntity.ok("Authentication successful for USER");
        } else {
            // Échec de l'authentification
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed for USER");
        }
    }

}
