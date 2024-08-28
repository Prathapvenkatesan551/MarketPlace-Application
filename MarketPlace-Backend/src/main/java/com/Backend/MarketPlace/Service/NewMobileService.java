package com.Backend.MarketPlace.Service;

import com.Backend.MarketPlace.Entity.NewMobile;
import java.util.List;

public interface NewMobileService {

    // Method to get a list of all NewMobile entities
    List<NewMobile> getAllNewMobiles();

    // Method to create a new NewMobile entity
    String createNewMobile(NewMobile newMobile);

    // Method to delete a NewMobile entity by ID
    String deleteNewMobile(Long id);

    // Method to update an existing NewMobile entity
    NewMobile updateNewMobile(NewMobile newMobile, Long mobileId);
}
