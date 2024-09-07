package com.Backend.MarketPlace.Controller;

import com.Backend.MarketPlace.Entity.NewMobile;
import com.Backend.MarketPlace.Service.NewMobileService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

//@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class NewMobileController {

    private final NewMobileService newMobileService;

    @Autowired
    public NewMobileController(NewMobileService newMobileService) {
        this.newMobileService = newMobileService;
    }
    @CrossOrigin(origins = "http://192.168.24.176:5173")
    @GetMapping("/public/newmobiles")
    public ResponseEntity<List<NewMobile>> getAllNewMobiles() {
        List<NewMobile> newMobiles = newMobileService.getAllNewMobiles();
        return new ResponseEntity<>(newMobiles, HttpStatus.OK);
    }

    @PostMapping("/public/newmobiles")
    public ResponseEntity<String> createNewMobile(@Valid @RequestBody NewMobile newMobile) {
        String result = newMobileService.createNewMobile(newMobile);
        if ("Email already exists".equals(result)) {
            return new ResponseEntity<>(result, HttpStatus.CONFLICT);
        } else {
            return new ResponseEntity<>("NewMobile added successfully", HttpStatus.CREATED);
        }
    }

    @DeleteMapping("/admin/newmobiles/{mobileId}")
    public ResponseEntity<String> deleteNewMobile(@PathVariable Long mobileId) {
        try {
            String status = newMobileService.deleteNewMobile(mobileId);
            return ResponseEntity.status(HttpStatus.OK).body(status);
        } catch (ResponseStatusException e) {
            return new ResponseEntity<>(e.getReason(), e.getStatusCode());
        }
    }

    @PutMapping("/public/newmobiles/{mobileId}")
    public ResponseEntity<String> updateNewMobile(@Valid @RequestBody NewMobile newMobile, @PathVariable Long mobileId) {
        try {
            NewMobile updatedMobile = newMobileService.updateNewMobile(newMobile, mobileId);
            return new ResponseEntity<>("NewMobile with ID: " + mobileId + " updated successfully", HttpStatus.OK);
        } catch (ResponseStatusException e) {
            return new ResponseEntity<>(e.getReason(), e.getStatusCode());
        }
    }
}
