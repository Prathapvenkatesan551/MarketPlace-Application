package com.Backend.MarketPlace.Service;

import com.Backend.MarketPlace.Entity.Account;
import com.Backend.MarketPlace.Repository.AccountRepository;
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
    public void createAccount(Account account) {
        account.setAccountId(nextId++);
        accountRepository.save(account);
    }

    @Override
    public String deleteAccount(Long id) {
        List<Account> accounts = accountRepository.findAll();
        Account account=accounts.stream()
                .filter(c -> c.getAccountId().equals(id))
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource not found"));

        accounts.remove(account);
        return "Account with Id: " + id + " deleted successfully !!";
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
