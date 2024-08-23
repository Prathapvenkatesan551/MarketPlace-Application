package com.Backend.MarketPlace.Service;

import com.Backend.MarketPlace.Entity.Account;

import java.util.List;

public interface AccountService {
List<Account> getAllAccounts();
void createAccount(Account account);
String deleteAccount(Long id);
Account updateAccount(Account account, Long accountId);
}
