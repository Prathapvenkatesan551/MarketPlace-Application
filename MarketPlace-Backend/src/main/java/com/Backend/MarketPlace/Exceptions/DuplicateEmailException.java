package com.Backend.MarketPlace.Exceptions;

public class DuplicateEmailException extends RuntimeException {


    public DuplicateEmailException(String emailIsAlreadyRegistered) {
        System.out.println(emailIsAlreadyRegistered);
    }
}
