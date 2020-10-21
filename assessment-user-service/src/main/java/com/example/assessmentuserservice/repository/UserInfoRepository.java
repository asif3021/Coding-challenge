package com.example.assessmentuserservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.assessmentuserservice.model.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {

}
