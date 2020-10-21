package com.example.assessmentproductservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.assessmentproductservice.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
