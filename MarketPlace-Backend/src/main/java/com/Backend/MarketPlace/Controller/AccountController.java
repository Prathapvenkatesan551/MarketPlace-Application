package com.Backend.MarketPlace.Controller;

import com.Backend.MarketPlace.Entity.Account;
import com.Backend.MarketPlace.Service.AccountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@RestController
@RequestMapping("/api")
public class AccountController {


    @Autowired
    private AccountService accountService;

    @GetMapping("/public/accounts")
    //@RequestMapping(value = "/public/categories", method = RequestMethod.GET)
    public ResponseEntity<List<Account>> getAllAccounts(){
        List<Account> accounts = accountService.getAllAccounts();
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }

    @PostMapping("/public/accounts")
    //@RequestMapping(value = "/public/categories", method = RequestMethod.POST)
    public ResponseEntity<String> createAccount(@Valid @RequestBody Account account){
        accountService.createAccount(account);
        return new ResponseEntity<>("Account added successfully", HttpStatus.CREATED);
    }

    @DeleteMapping("/admin/accounts/{accountId}")
    public ResponseEntity<String> deleteAccount(@PathVariable Long accountId){
        try {
            String status = accountService.deleteAccount(accountId);
            //return new ResponseEntity<>(status, HttpStatus.OK);
            //return ResponseEntity.ok(status);
            return ResponseEntity.status(HttpStatus.OK).body(status);
        } catch (ResponseStatusException e){
            return new ResponseEntity<>(e.getReason(), e.getStatusCode());
        }
    }


    @PutMapping("/public/Accounts/{accountId}")
    public ResponseEntity<String> updateCategory(@RequestBody Account account,
                                                 @PathVariable Long accountId){
        try{
            Account savedAccount = accountService.updateAccount(account, accountId);
            return new ResponseEntity<>("Account with category id: " + accountId, HttpStatus.OK);
        } catch (ResponseStatusException e){
            return new ResponseEntity<>(e.getReason(), e.getStatusCode());
        }
    }
}
