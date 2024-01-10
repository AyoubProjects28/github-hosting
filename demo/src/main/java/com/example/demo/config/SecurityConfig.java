package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity

public class SecurityConfig {

    @Bean
    public InMemoryUserDetailsManager userDetailManager() {
        UserDetails user = User.withDefaultPasswordEncoder()
                .username("user")
                .password("password")
                .roles("USER")
                .build();

        UserDetails seller = User.withDefaultPasswordEncoder()
                .username("seller")
                .password("password")
                .roles("SELLER")
                .build();

        return new InMemoryUserDetailsManager(user, seller);
    }

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/products/**").permitAll();
                    auth.requestMatchers("/login_user").permitAll();
                    auth.requestMatchers("/seller").hasRole("SELLER");
                })
                .httpBasic(Customizer.withDefaults())
                .build();
    }
}
