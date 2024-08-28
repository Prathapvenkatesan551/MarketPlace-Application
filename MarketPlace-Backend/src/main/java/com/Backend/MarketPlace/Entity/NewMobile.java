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
@Table (name = "NewMobiles")
public class NewMobile {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long mobileId;
    @Column(name = "Name")
    private String mobileName;
    @Column(name = "Colour" )
    private String mobileColour;
    @Column(name = "Ram")
    private String ram;
    @Column(name = "Rom")
    private String rom;
    @Column(name = "Cost")
    private Long cost;
    @Column(name = "Warranty")
    private Long warranty;

}
