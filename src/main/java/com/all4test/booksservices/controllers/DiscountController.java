package com.all4test.booksservices.controllers;

import com.all4test.booksservices.models.Discount;
import com.all4test.booksservices.services.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/discount")
public class DiscountController {
    @Autowired
    private DiscountService discountService;

    @RequestMapping(method = RequestMethod.GET, value = "/computeDiscount", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Discount> getDiscount2(@RequestParam(value = "orderTotal", required = true) double orderTotal,
                                          @RequestParam(value = "customerRating", required = true) String customerRating) throws Exception {
        return ResponseEntity.ok(discountService.computeDiscount(customerRating, orderTotal));
    }
}
