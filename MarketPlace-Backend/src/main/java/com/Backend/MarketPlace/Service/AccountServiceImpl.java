package com.Backend.MarketPlace.Service;

import com.Backend.MarketPlace.Entity.Account;
import com.Backend.MarketPlace.Exceptions.DuplicateEmailException;
import com.Backend.MarketPlace.Repository.AccountRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
@Service
public class AccountServiceImpl implements AccountService {
    private final AccountRepository accountRepository;
    private Long nextId = 1L;
    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    @Override
    @Transactional

    public String createAccount(Account account) {
        Optional<Account> existingAccount = accountRepository.findByEmail(account.getEmail());

        if (existingAccount.isPresent()) {
            // If an account with the same email already exists, return a message indicating so
            return "Email already exists";
        } else {
            // Set the account ID and save the new account
            account.setAccountId(nextId++);
            accountRepository.save(account);
            return "Account created successfully";
        }
    }

    @Override
    public String deleteAccount(Long accountId) {
        Account account = accountRepository.findById(Math.toIntExact(accountId))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource not found"));
        accountRepository.delete(account);
        return "Account with Id: " + accountId + " deleted successfully !!";
    }


    @Override
    public Account updateAccount(Account account, Long accountId) {
        List<Account> accounts = accountRepository.findAll();
        Optional<Account> optionalAccount = accounts.stream()
                .filter(c -> c.getAccountId().equals(accountId))
                .findFirst();

        if(optionalAccount.isPresent()){
            Account existingAccount = optionalAccount.get();
            existingAccount.setAccountName(account.getAccountName());
            Account updatedAccount = accountRepository.save(existingAccount);
            return updatedAccount;
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found");
        }
    }
}
