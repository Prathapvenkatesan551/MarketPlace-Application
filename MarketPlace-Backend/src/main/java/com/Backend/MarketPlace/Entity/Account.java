package com.Backend.MarketPlace.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table (name = "Customers")
public class Account {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
private Long accountId;
    @Column(name = "Name")
private String accountName;
    @Column(name = "EmailAddress" ,nullable = false , unique = true)
    private String email;
    @Column
    private String password;
    @Column(name = "MobileNumber",nullable = false , unique = true)
private String mobileNumber;

}
