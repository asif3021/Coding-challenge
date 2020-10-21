package com.example.assessmentproductservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.assessmentproductservice.model.Product;
import com.example.assessmentproductservice.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;

	public List<Product> getAllProduct() {  
		List<Product> products = new ArrayList<Product>();  
		productRepository.findAll().forEach(product -> products.add(product));  
		return products;  
	}

	public Product getProductById(int id) { 
		
		return productRepository.findById(id).get();  
	}  
	
	public void saveOrUpdate(Product product) {  
		
		productRepository.save(product);  
	}

	public void delete(int id) {  
		productRepository.deleteById(id);  
	}  

}
