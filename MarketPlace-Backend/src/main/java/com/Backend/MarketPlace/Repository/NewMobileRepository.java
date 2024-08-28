package com.Backend.MarketPlace.Repository;

import com.Backend.MarketPlace.Entity.NewMobile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NewMobileRepository extends JpaRepository<NewMobile, Long> {

    Optional<NewMobile> findById(Long mobileId);
}
