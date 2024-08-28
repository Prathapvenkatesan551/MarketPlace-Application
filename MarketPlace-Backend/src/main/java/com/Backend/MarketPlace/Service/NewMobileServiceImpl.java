package com.Backend.MarketPlace.Service;

import com.Backend.MarketPlace.Entity.NewMobile;
import com.Backend.MarketPlace.Repository.NewMobileRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class NewMobileServiceImpl implements NewMobileService {
    private final NewMobileRepository newMobileRepository;
    private Long nextId = 1L;

    public NewMobileServiceImpl(NewMobileRepository newMobileRepository) {
        this.newMobileRepository = newMobileRepository;
    }

    // Retrieve all NewMobile entities
    public List<NewMobile> getAllNewMobiles() {
        return newMobileRepository.findAll();
    }

    // Create a new NewMobile entity
    @Transactional
    public String createNewMobile(NewMobile newMobile) {
        newMobile.setMobileId(nextId++);
        newMobileRepository.save(newMobile);
        return "Mobile created successfully";
    }

    // Delete a NewMobile entity by ID
    // Delete a NewMobile entity by ID
    public String deleteNewMobile(Long mobileId) {
        NewMobile newMobile = (NewMobile) newMobileRepository.findById(mobileId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Mobile not found"));
        newMobileRepository.delete(newMobile);
        return "Mobile with Id: " + mobileId + " deleted successfully!";
    }


    // Update an existing NewMobile entity
    public NewMobile updateNewMobile(NewMobile newMobile, Long mobileId) {
        NewMobile existingMobile = (NewMobile) newMobileRepository.findById(mobileId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Mobile not found"));

        existingMobile.setMobileName(newMobile.getMobileName());
        existingMobile.setMobileColour(newMobile.getMobileColour());
        existingMobile.setRam(newMobile.getRam());
        existingMobile.setRom(newMobile.getRom());
        existingMobile.setCost(newMobile.getCost());
        existingMobile.setWarranty(newMobile.getWarranty());
        // Update other fields as needed

        return newMobileRepository.save(existingMobile);
    }

}
