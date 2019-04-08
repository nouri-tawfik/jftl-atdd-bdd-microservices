package com.all4test.booksservices.services;

import com.all4test.booksservices.exceptions.CustomerRatingException;
import com.all4test.booksservices.exceptions.OrderTotalException;
import com.all4test.booksservices.models.Discount;
import org.springframework.stereotype.Service;


@Service
public class DiscountService {

    // Customer Category | Threshold Level	| Discount Percentage
    // Good	             | 100.00 	| 1%
    // Excellent	     | 50.00     |3.5%


    public Discount computeDiscount(String customerRating, double orderTotal) throws Exception {
        // TODO: 01/04/2019: Test Double ou service ?

        int discountPercentage = 0;

        if (orderTotal < 0) {
             throw new OrderTotalException();
        }
        if (((customerRating.equalsIgnoreCase("BONNE"))
                && orderTotal <= 10.00)) {
            discountPercentage = 0;
        } else if (((customerRating.equalsIgnoreCase("BONNE"))
                && orderTotal > 10.00)) {
            discountPercentage = 1;
        } else if (((customerRating.equalsIgnoreCase("EXCELLENTE"))
                && orderTotal <= 50.00)) {
            discountPercentage = 1;
        } else if (((customerRating.equalsIgnoreCase("EXCELLENTE"))
                && orderTotal > 50.00)) {
            discountPercentage = 5;
        } else {
             throw new CustomerRatingException(customerRating);
        }

        Discount discount = new Discount();
        discount.setDiscountPercentage(discountPercentage);
        return discount;
    }

}
